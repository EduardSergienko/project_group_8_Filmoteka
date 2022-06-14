import { loadStorage, saveStorage } from './localStorage';

const WATCHED = 'watched';
const QUEUE = 'queue';

function textModalBtn(id) {
  const BTNQueue = document.querySelector('.feature-button__queue');
  const BTNWatched = document.querySelector('.feature-button__watched');

  if (inLocalStorage(id, WATCHED)) {
    BTNWatched.textContent = 'Remove from watched';
    BTNWatched.style.padding = '5px';
    BTNWatched.classList.add('active');
  } else {
    BTNWatched.textContent = 'Add to watched';
    BTNWatched.classList.remove('active');
    BTNWatched.style.padding = '14px 8px 12px';
  }

  if (inLocalStorage(id, QUEUE)) {
    BTNQueue.textContent = 'Remove from queue';
    BTNQueue.style.padding = '5px 6px';
    BTNQueue.classList.add('active');
  } else {
    BTNQueue.textContent = 'Add to queue';
    BTNQueue.classList.remove('active');
    BTNQueue.style.padding = '14px 8px 12px';
  }
}

function addBtnListenet(id) {
  const BTNWatched = document.querySelector('.feature-button__watched');
  const BTNQueue = document.querySelector('.feature-button__queue');

  BTNWatched.addEventListener('click', () => addWatchList(id));
  BTNQueue.addEventListener('click', () => addQueueList(id));
}

function addWatchList(id) {
  const btnWatch = document.querySelector('.feature-button__watched');
  if (btnWatch.classList.contains('active')) {
    removeFromWatchedList(id);
    textModalBtn(id);
  } else {
    let watchList = [];
    let localWatchListJson = loadStorage(WATCHED);
    if (localWatchListJson) {
      watchList = [...localWatchListJson];
    }
    // let queueList = [];
    // let localQueueListJson = loadStorage(QUEUE);
    // if (localQueueListJson) {
    //   queueList = [...localQueueListJson];
    // }
    // let queueSet = queueList.includes(id);
    // if (queueSet) {
    //   let index = queueList.indexOf(id);
    //   queueList.splice(index, 1);
    //   saveStorage(QUEUE, queueList);
    // }
    const watchSet = watchList.includes(id);
    if (watchSet) {
      return;
    } else {
      watchList.push(id);
      saveStorage(WATCHED, watchList);
      textModalBtn(id);
    }
  }
}

function addQueueList(id) {
  const btnQueue = document.querySelector('.feature-button__queue');
  if (btnQueue.classList.contains('active')) {
    removeFromQueueList(id);
    textModalBtn(id);
  } else {
    let queueList = [];
    let localQueueListJson = loadStorage(QUEUE);
    if (localQueueListJson) {
      queueList = [...localQueueListJson];
    }

    // let watchList = [];
    // let localWatchListJson = loadStorage(WATCHED);
    // if (localWatchListJson) {
    //   watchList = [...localWatchListJson];
    // }
    // let watchSet = watchList.includes(id);
    // if (watchSet) {
    //   let index = watchList.indexOf(id);
    //   watchList.splice(index, 1);
    //   saveStorage(WATCHED, watchList);
    // }

    const queueSet = queueList.includes(id);
    if (queueSet) {
      return;
    } else {
      queueList.push(id);
      saveStorage(QUEUE, queueList);
      textModalBtn(id);
    }
  }
}

function removeFromWatchedList(id) {
  let watchList = [];
  let localWatchedList = loadStorage(WATCHED);
  if (localWatchedList) {
    watchList = [...localWatchedList];
  }

  let index = watchList.indexOf(id);
  watchList.splice(index, 1);
  saveStorage(WATCHED, watchList);
}

function removeFromQueueList(id) {
  let queueList = [];
  let localQueueList = loadStorage(QUEUE);
  if (localQueueList) {
    queueList = [...localQueueList];
  }

  let index = queueList.indexOf(id);
  queueList.splice(index, 1);
  saveStorage(QUEUE, queueList);
}

function inLocalStorage(id, key) {
  let arrList = [];
  let localList = loadStorage(key);
  if (localList) {
    arrList = [...localList];
  }
  const includesID = arrList.includes(id);
  return includesID;
}

export { addBtnListenet, textModalBtn };
