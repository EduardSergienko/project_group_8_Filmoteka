import FilmApiService from './filmApiService';
import { cutFilmTitle } from './renderCards';
import { getGenreModalMovie } from './modal';
import posterNotFound from '../images/desktop/poster-not-found-desktop.jpg';
import posterNotFound2x from '../images/desktop/poster-not-found-desktop@2x.jpg';
import { notiflixLoading, notiflixLoadingRemove } from './loading';
import {
  initPagination,
  paginationProperties,
  scrollToTop,
} from './pagePagination';
import { MY_LIBRARY } from './searchType';
import buttonColorChange from './changeButtonColor';

const filmApiService = new FilmApiService();
const refs = {
  watched: document.querySelector('.watched-button'),
  queue: document.querySelector('.queue-button'),
  gallery: document.querySelector('.films-list'),
  libraryBtn: document.querySelector('.pages__library-btn'),
  pagination: document.getElementById('pagination'),
  footer: document.querySelector('.footer'),
};

refs.libraryBtn.addEventListener('click', onClickWatched);
refs.watched.addEventListener('click', onClickWatched);
refs.queue.addEventListener('click', onClickQueue);

export async function onClickWatched() {
  refs.watched.classList.add('currentbtn');
  refs.queue.classList.remove('currentbtn');
  const watched = JSON.parse(localStorage.getItem('watched'));

  refs.gallery.innerHTML = '';
  if (watched === null || watched.length === 0) {
    messageWarning();
    refs.pagination.classList.add('is-hidden');
  } else {
    // зробити рендер сітки
    paginationProperties.page = 1;
    renderMovies(watched);
  }
}

export async function onClickQueue() {
  refs.watched.classList.remove('currentbtn');
  refs.queue.classList.add('currentbtn');
  const queue = JSON.parse(localStorage.getItem('queue'));
  refs.gallery.innerHTML = '';

  if (queue === null || queue.length === 0) {
    messageWarning();
    refs.pagination.classList.add('is-hidden');
  } else {
    // зробити рендер сітки
    paginationProperties.page = 1;
    renderMovies(queue);
  }
  return;
}

function messageWarning() {
  const message =
    '<p class = "warning">Sorry, you did not add any movies to the list.</p>';
  refs.gallery.insertAdjacentHTML('beforeend', message);
}

export function libraryFilmCardRender(arg) {
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
      !item.vote_average
        ? item.vote_average
        : (item.vote_average = item.vote_average.toFixed(1));

      let darkTheme = JSON.parse(localStorage.getItem('Night'))
        ? ' dark-theme'
        : '';

      return `<li class="films-list__card${darkTheme}" 
      data-id="${item.id}"
      data-media-type="${item.media_type}">
        <div class = 'poster-wrap'>
        <img class = 'films-list__poster' src="${src}" alt="${
        item.name || item.original_title
      }" srcset="${src} 1x, ${src2x} 2x" loading="lazy" />
      </div>
    <div class="film-info">
    <h2 class="film-info__name">
      ${cutFilmTitle(item.name || item.original_title)}  
    </h2>
    <div class="film-info__wrap">
    <p class="film-info__genre-year">
      ${getGenreModalMovie(item.genres)} | ${(
        item.first_air_date || item.release_date
      ).slice(0, 4)}
      <span class="movie-info__value--vote-left">${item.vote_average}</span>
    </p>
    </div>
  </div>
</li>`;
    })
    .join('');
}

async function renderMovies(array) {
  refs.pagination.classList.add('is-hidden');

  const libraryArraySlice = [];
  try {
    notiflixLoading();
    for (let i = 0; i < array.length; i += 9) {
      const chunk = array.slice(i, i + 9);
      libraryArraySlice.push(chunk);
    }

    const libraryArrayRender = [];

    for (let id of libraryArraySlice[0]) {
      filmApiService.ID = id;
      const resolve = await filmApiService.fetchMovieID();
      const filmArray = resolve.data;
      libraryArrayRender.push(filmArray);
    }

    paginationProperties.pageName = MY_LIBRARY;
    paginationProperties.page = 1;
    paginationProperties.totalPages = libraryArraySlice.length;
    paginationProperties.libraryArr = libraryArraySlice;

    refs.gallery.innerHTML = libraryFilmCardRender(libraryArrayRender);

    pagination.classList.remove('is-hidden');

    initPagination(paginationProperties); //Add Pagination
    notiflixLoadingRemove();
    refs.footer.classList.remove('is-hidden');

    //тёмная тема
    buttonColorChange.CallButtonColorChange();

    scrollToTop();

    //тёмная тема
    buttonColorChange.CallButtonColorChange();
  } catch (error) {
    console.log(error);
  }
}
