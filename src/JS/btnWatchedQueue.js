
import FilmApiService from './filmApiService';
import { cutFilmTitle } from './renderCards';
import { getMovieGenre } from './modal';
import posterNotFound from '../images/desktop/poster-not-found-desktop.png';
import posterNotFound2x from '../images/desktop/poster-not-found-desktop@2x.png';
import { NotiflixLoading, NotiflixLoadingRemove } from './loading';

const filmApiService = new FilmApiService();
const refs = {
  watched: document.querySelector('.watched-button'),
  queue: document.querySelector('.queue-button'),
  gallery: document.querySelector('.films-list'),
  libraryBtn: document.querySelector('.pages__library-btn'),
  paginationHidden: document.querySelector('.tui-pagination'),
 };

refs.libraryBtn.addEventListener('click', onClicLibrary);
refs.watched.addEventListener('click', onClickWatched);
refs.queue.addEventListener('click', onClickQueue);


async function onClicLibrary() {
  onClickWatched();
  refs.paginationHidden.classList.add('is-hidden');

}

async function onClickWatched() {

  refs.watched.classList.add('currentbtn');
  refs.queue.classList.remove('currentbtn');
  const watched = JSON.parse(localStorage.getItem('watched'));
  console.log(watched);
  
  refs.gallery.innerHTML = '';
  if (watched === null || watched.length === 0) {
    messageWarning();
  } else {
    // зробити рендер сітки
    renderMovies(watched);
    
  }
  return;
}

async function onClickQueue() {
  // console.log(e);
  refs.watched.classList.remove('currentbtn');
  refs.queue.classList.add('currentbtn');
  const queue = JSON.parse(localStorage.getItem('queue'));
 console.log(queue);
  refs.gallery.innerHTML = '';
  
  if (queue === null || queue.length === 0) {
    messageWarning();
  } else {
    // зробити рендер сітки
    renderMovies(queue);
  }
  return;
}

function messageWarning() {
  const message =
    '<p class = "warning">Sorry, you did not add any movies to the list.</p>';
  refs.gallery.insertAdjacentHTML('beforeend', message);
}


function libraryFilmCardRender(arg) {
  return arg
    .map(item => {
      let src = `https://image.tmdb.org/t/p/w400/${item.poster_path}`;
      let src2x = `https://image.tmdb.org/t/p/w780/${item.poster_path}`;
      if (!item.poster_path) {
        src = posterNotFound;
        src2x = posterNotFound2x;
      }
      if (!item.first_air_date & !item.release_date) {
        item.first_air_date = 'n/a';
      }

      return `<li class="films-list__card" 
      data-id="${item.id}"
      data-media-type="${item.media_type}">
      <img class = 'films-list__poster' src="${src}" alt="${
        item.name || item.original_title
      }" srcset="${src} 1x, ${src2x} 2x" loading="lazy" />

  <div class="film-info">
  <h2 class="film-info__name">
      ${cutFilmTitle(item.name || item.original_title)}  
    </h2>
    <div class="film-info__wrap">
    <p class="film-info__genre-year">
      ${getMovieGenre(item.genres)} | ${(
        item.first_air_date || item.release_date
      ).slice(0, 4) }
      <span class="movie-info__value--vote-left">${ item.vote_average}</span>
      
    </p>
   
    </div>
  </div>
</li>`;
    })
    .join('');
};



async function renderMovies(array) {
  const librartArray = [];
    try {
      for (let id of array) {
        filmApiService.ID = id 
        const resolve = await filmApiService.fetchMovieID();
        const filmArray = resolve.data;
        librartArray.push(filmArray);
       }
      NotiflixLoading();
      console.log(librartArray);
    } catch (error) {
        console.log(error);
    };
     setTimeout(() => {
     console.dir(librartArray);
  refs.gallery.innerHTML = libraryFilmCardRender(librartArray);
  NotiflixLoadingRemove();
    }, 300);
  
}