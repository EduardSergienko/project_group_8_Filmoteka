import { loadStorage, saveStorage, removeStorage } from './localStorage';

// импорт галереи с модалки.addEventListener('click', addMoviesToList);

// const BTN = document.querySelector('.btn');
// BTN.addEventListener('click', addMoviesToList);

const WATCHED = 'watched';
const QUEUE = 'queue';

function addMoviesToList(e) {
  //   e.preventDefault();

  //   let movieId = e.target.dataset.id;
  addWatchList(m);
  textModalBtn(m);
}

async function textModalBtn(id) {
  //   const btnQueue = document.querySelector('.btn');
  const btnWatch = document.querySelector('.btn');
  if (inLocalStorage(id, WATCHED)) {
    // console.log('есть такой в watched');
    btnWatch.textContent = 'Added to watched';
    btnWatch.disabled = true;
    function changeText() {
      btnWatch.disabled = false;
      btnWatch.textContent = 'Remove from watched';
      btnWatch.classList.add('active');
    }
    setTimeout(changeText, 1000);
  } else {
    // console.log('нет такого в watched');
    btnWatch.textContent = 'Add to watched';
    btnWatch.classList.remove('active');
    // console.log('удаляем класс active');
    btnWatch.disabled = false;
  }

  //   if (inLocalStorage(id, QUEUE)) {
  //     // console.log('есть такой в queue');
  //     btnQueue.textContent = 'Added to queue';
  //     btnQueue.disabled = true;
  //     function changeText() {
  //       btnQueue.disabled = false;
  //       btnQueue.textContent = 'Remove from queue';
  //       btnQueue.classList.add('active');
  //     }
  //     setTimeout(changeText, 1000);
  //   } else {
  //     // console.log('нет такого в queue');
  //     btnQueue.textContent = 'Add to queue';
  //     btnQueue.classList.remove('active');
  //     btnQueue.disabled = false;
  //   }
}

function inLocalStorage(id, key) {
  let arrList = [];
  let localListJson = loadStorage(key);
  if (localListJson) {
    arrList = [...localListJson];
  }
  const mapList = arrList.includes(id);
  return mapList;
}

function addWatchList(id) {
  const btnWatch = document.querySelector('.active');
  if (btnWatch) {
    removeFromWatchedList(id);
  } else {
    let watchList = [];
    let localWatchListJson = loadStorage(WATCHED);
    if (localWatchListJson) {
      watchList = [...localWatchListJson];
    }

    let queueList = [];
    let localQueueListJson = loadStorage(QUEUE);
    if (localQueueListJson) {
      queueList = [...localQueueListJson];
    }
    let queueSet = queueList.includes(id);
    if (queueSet) {
      // removeStorage(QUEUE);
      let index = queueList.indexOf(id);
      queueList.splice(index, 1);
      saveStorage(QUEUE, queueList);
    }

    const watchSet = watchList.includes(id);
    if (watchSet) {
      textModalBtn(id);
      console.log('уже есть такой фильм');
    } else {
      watchList.push(id);
      saveStorage(WATCHED, watchList);
      textModalBtn(id);
    }
  }
}

// function addQueueList() {
//   const btnQueue = document.querySelector('.active');
//   if (btnQueue) {
//     removeFromQueueList(id);
//   } else {
//     let queueList = [];
//     let localQueueListJson = loadStorage('queue');
//     if (localQueueListJson) {
//       queueList = [...localQueueListJson];
//     }

//     let watchList = [];
//     let localWatchListJson = loadStorage('watched');
//     if (localWatchListJson) {
//       watchList = [...localWatchListJson];
//     }
//     let watchSet = new Set(watchList);
//     if (watchSet.has(id)) {
//       remove('watched');
//       let index = watchList.indexOf(id);
//       watchList.splice(index, 1);
//       save('watched', watchList);
//     }

//     const queueSet = new Set(queueList);
//     if (queueSet.has(id)) {
//       textModalBtn(id);
//     } else {
//       queueList.push(id);
//       save('queue', queueList);
//       textModalBtn(id);
//     }
//   }
// }

function removeFromWatchedList(id) {
  //   console.log('removeFromWatchedList');
  let queueList = [];
  let localQueueListJson = loadStorage(WATCHED);
  if (localQueueListJson) {
    queueList = [...localQueueListJson];
  }

  //   removeStorage(WATCHED);
  let index = queueList.indexOf(id);
  queueList.splice(index, 1);
  saveStorage(WATCHED, queueList);
}

function removeFromQueueList(id) {
  let queueList = [];
  let localQueueListJson = loadStorage(QUEUE);
  if (localQueueListJson) {
    queueList = [...localQueueListJson];
  }

  //   removeStorage(QUEUE);
  let index = queueList.indexOf(id);
  queueList.splice(index, 1);
  saveStorage(QUEUE, queueList);
}
