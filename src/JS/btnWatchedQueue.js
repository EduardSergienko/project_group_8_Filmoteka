import './JS/filmApiService';
import './JS/showTrandingFilms';
import './JS/renderCards';

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
      
        messageWarning();

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
        messageWarning();  
   
  } else {
    // зробити рендер сітки
  }
  return;
};
function messageWarning() {
    const message =
    '<p class = "warning">Sorry, you did not add any movies to the list.</p>';
  refs.gallery.insertAdjacentHTML('beforeend', message);
};