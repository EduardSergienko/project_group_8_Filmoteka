
const refs = {
    watched: document.querySelector('.watched-js'),
    queue: document.querySelector('.queue-js'),
    gallery: document.querySelector('.films-list')
};
console.log(refs.watched);
console.log(refs.queue);

refs.watched.addEventListener('click', onClickWatched);
refs.queue.addEventListener('click', onClickQueue);

function onClickWatched(e) {
    console.log(e);
    
  const watched = JSON.parse(localStorage.getItem('watched'));

    refs.gallery.innerHTML = '';
    if (watched === null ) {
      
   const message =
    '<div class = "warning">Sorry, you did not add any movies to the list.<div>';
  refs.gallery.insertAdjacentHTML('beforeend', message);
  } else {
    // зробити рендер сітки
  }
  return;
};


function onClickQueue(e) {
    console.log(e);
    const queue = JSON.parse(localStorage.getItem('queue'));

    refs.gallery.innerHTML = '';
    if (queue === null) {
      
   const message =
    '<div class = "warning">Sorry, you did not add any movies to the list.<div>';
  refs.gallery.insertAdjacentHTML('beforeend', message);
  } else {
    // зробити рендер сітки
  }
  return;
};