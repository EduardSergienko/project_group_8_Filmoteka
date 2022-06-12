import { loadStorage, saveStorage, removeStorage } from './localStorage';

// импорт галереи с модалки.addEventListener('click', addMoviesToList);

const WATCHED = 'watched';
const QUEUE = 'queue';

function addMoviesToList(e) {
  //   e.preventDefault();
  let movieId = e.target.dataset.id;
  addWatchList(movieId);
}

function addWatchList() {
  //   const btnWatch = document.querySelector('удалить из листа');
  // if (btnWatch.classList.contains('active'))
  if (btnWatch) {
    removeFromWatchedList(id);
  } else {
    let watchList = [];
    let localWatchListJson = loadStorage(WATCHED);
    if (localWatchListJson) {
      watchList = [...localWatchListJson];
    }

    let queueList = [];
    let localQueueListJson = loadStorage('queue');
    if (localQueueListJson) {
      queueList = [...localQueueListJson];
    }
    let queueSet = new Set(queueList);
    if (queueSet.has(id)) {
      removeStorage('queue');
      let index = queueList.indexOf(id);
      queueList.splice(index, 1);
      saveStorage('queue', queueList);
    }

    const watchSet = watchList.includes(id);
    if (watchSet) {
      console.log('уже есть такой фильм');
    } else {
      watchList.push(id);
      saveStorage(WATCHED, watchList);
    }
  }
}

// function addQueueList() {
//   const btnQueue = document.querySelector('.btn__queue');
//   if (btnQueue.classList.contains('active')) {
//     removeFromQueueList(id);
//   } else {
//     let queueList = [];
//     let localQueueListJson = load('queue');
//     if (localQueueListJson) {
//       queueList = [...localQueueListJson];
//     }

//     let watchList = [];
//     let localWatchListJson = load('watched');
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
