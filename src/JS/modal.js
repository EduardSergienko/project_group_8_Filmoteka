import * as basicLightbox from 'basiclightbox';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notiflixLoading, notiflixLoadingRemove } from './loading';

import FilmApiService from './filmApiService';
import { textModalBtn, addBtnListener } from './modalBtn';
import {
  onClickWatched,
  onClickQueue,
  libraryFilmCardRender,
} from './btnWatchedQueue';
import { initPagination, paginationProperties } from './pagePagination';

import posterNotFound from '../images/desktop/poster-not-found-desktop.jpg';
import posterNotFound2x from '../images/desktop/poster-not-found-desktop@2x.jpg';
import { saveStorage } from './localStorage';

import buttonColorChange from './changeButtonColor';

const DEBOUNCE_DELAY = 250;
const filmApiService = new FilmApiService();

const movieItemRef = document.querySelector('.films-list');
movieItemRef.addEventListener('click', onMovieItemClick);

const headerLibrary = document.querySelector('.header-library');
const watchedButton = document.querySelector('.watched-button');
const queueButton = document.querySelector('.queue-button');
const filmList = document.querySelector('.films-list');

let postersArr = [];

let getLocalStorageWatched = [];
let getLocalStorageQueue = [];

async function onMovieItemClick(evt) {
  const isMovieItemEl =
    evt.target.classList.contains('films-list__poster') ||
    evt.target.closest('.film-info');
  if (!isMovieItemEl) {
    return;
  }

  const currentMovie = evt.target.closest('.films-list__card');
  filmApiService.queryID = currentMovie.dataset.id;

  try {
    const { data } = await filmApiService.fetchMovieID();
    getGenreModalMovie(data.genres);
    createMovieItemClick(data);

    addBtnListener(filmApiService.queryID);
    textModalBtn(filmApiService.queryID);

    document
      .querySelector('.basicLightbox__placeholder')
      .classList.add('lightbox-placeholder__modal--centre');
  } catch (error) {
    console.log(error.message);
  }
}
export function getGenreModalMovie(genreArr) {
  const genresNames = genreArr.map(genre => genre.name);

  if (genresNames.length > 2) {
    return genresNames.slice(0, 2).join(', ').concat([', Other']);
  }
  return genresNames.join(', ') || 'No Genre';
}

let modalMovie;
async function createMovieItemClick({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
  name,
  original_name,
  id,
  imdb_id,
}) {
  // console.log(poster_path);
  let src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  let src2x = `https://image.tmdb.org/t/p/w780${poster_path}`;
  let src3x = `https://image.tmdb.org/t/p/w780${poster_path}`;
  let imdbLink = '';
  let tmdbLink = '';

  !vote_average ? vote_average : (vote_average = vote_average.toFixed(1));

  let darkTheme = JSON.parse(localStorage.getItem('Night'))
    ? ' dark-theme'
    : '';

  getLocalStorageWatched = JSON.parse(localStorage.getItem('watched'));
  getLocalStorageQueue = JSON.parse(localStorage.getItem('queue'));

  if (!poster_path) {
    src = posterNotFound;
    src2x = posterNotFound2x;
    src3x = posterNotFound2x;
  }
  // movie-social-link-icon
  if (imdb_id) {
    imdbLink = `<li class='movie-icon-container'><a href="https://www.imdb.com/title/${imdb_id}" target="_blank"><svg class="movie-social-link-icon imdb-logo${darkTheme}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 575 289.83" ><defs><path d="M575 24.91C573.44 12.15 563.97 1.98 551.91 0C499.05 0 76.18 0 23.32 0C10.11 2.17 0 14.16 0 28.61C0 51.84 0 237.64 0 260.86C0 276.86 12.37 289.83 27.64 289.83C79.63 289.83 495.6 289.83 547.59 289.83C561.65 289.83 573.26 278.82 575 264.57C575 216.64 575 48.87 575 24.91Z" id="d1pwhf9wy2"/><path d="M69.35 58.24L114.98 58.24L114.98 233.89L69.35 233.89L69.35 58.24Z" id="g5jjnq26yS"/><path d="M201.2 139.15C197.28 112.38 195.1 97.5 194.67 94.53C192.76 80.2 190.94 67.73 189.2 57.09C185.25 57.09 165.54 57.09 130.04 57.09L130.04 232.74L170.01 232.74L170.15 116.76L186.97 232.74L215.44 232.74L231.39 114.18L231.54 232.74L271.38 232.74L271.38 57.09L211.77 57.09L201.2 139.15Z" id="i3Prh1JpXt"/><path d="M346.71 93.63C347.21 95.87 347.47 100.95 347.47 108.89C347.47 115.7 347.47 170.18 347.47 176.99C347.47 188.68 346.71 195.84 345.2 198.48C343.68 201.12 339.64 202.43 333.09 202.43C333.09 190.9 333.09 98.66 333.09 87.13C338.06 87.13 341.45 87.66 343.25 88.7C345.05 89.75 346.21 91.39 346.71 93.63ZM367.32 230.95C372.75 229.76 377.31 227.66 381.01 224.67C384.7 221.67 387.29 217.52 388.77 212.21C390.26 206.91 391.14 196.38 391.14 180.63C391.14 174.47 391.14 125.12 391.14 118.95C391.14 102.33 390.49 91.19 389.48 85.53C388.46 79.86 385.93 74.71 381.88 70.09C377.82 65.47 371.9 62.15 364.12 60.13C356.33 58.11 343.63 57.09 321.54 57.09C319.27 57.09 307.93 57.09 287.5 57.09L287.5 232.74L342.78 232.74C355.52 232.34 363.7 231.75 367.32 230.95Z" id="a4ov9rRGQm"/><path d="M464.76 204.7C463.92 206.93 460.24 208.06 457.46 208.06C454.74 208.06 452.93 206.98 452.01 204.81C451.09 202.65 450.64 197.72 450.64 190C450.64 185.36 450.64 148.22 450.64 143.58C450.64 135.58 451.04 130.59 451.85 128.6C452.65 126.63 454.41 125.63 457.13 125.63C459.91 125.63 463.64 126.76 464.6 129.03C465.55 131.3 466.03 136.15 466.03 143.58C466.03 146.58 466.03 161.58 466.03 188.59C465.74 197.84 465.32 203.21 464.76 204.7ZM406.68 231.21L447.76 231.21C449.47 224.5 450.41 220.77 450.6 220.02C454.32 224.52 458.41 227.9 462.9 230.14C467.37 232.39 474.06 233.51 479.24 233.51C486.45 233.51 492.67 231.62 497.92 227.83C503.16 224.05 506.5 219.57 507.92 214.42C509.34 209.26 510.05 201.42 510.05 190.88C510.05 185.95 510.05 146.53 510.05 141.6C510.05 131 509.81 124.08 509.34 120.83C508.87 117.58 507.47 114.27 505.14 110.88C502.81 107.49 499.42 104.86 494.98 102.98C490.54 101.1 485.3 100.16 479.26 100.16C474.01 100.16 467.29 101.21 462.81 103.28C458.34 105.35 454.28 108.49 450.64 112.7C450.64 108.89 450.64 89.85 450.64 55.56L406.68 55.56L406.68 231.21Z" id="fk968BpsX"/></defs><g><g><g><use xlink:href="#d1pwhf9wy2" opacity="1" fill="#0000" fill-opacity="1"/><g><use xlink:href="#d1pwhf9wy2" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"/></g></g><g><use xlink:href="#g5jjnq26yS" opacity="1" fill-opacity="1"/><g><use xlink:href="#g5jjnq26yS" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"/></g></g><g><use xlink:href="#i3Prh1JpXt" opacity="1" fill-opacity="1"/><g><use xlink:href="#i3Prh1JpXt" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"/></g></g><g><use xlink:href="#a4ov9rRGQm" opacity="1"  fill-opacity="1"/><g><use xlink:href="#a4ov9rRGQm" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"/></g></g><g><use xlink:href="#fk968BpsX" opacity="1" fill-opacity="1"/><g><use xlink:href="#fk968BpsX" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"/></g></g></g></g></svg></a></li>`;
  }
  tmdbLink = `<li class='movie-icon-container'><a href="https://www.themoviedb.org/movie/${id}" target="_blank"><svg class='movie-social-link-icon tmdb-logo${darkTheme}' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 190.24 81.52"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M105.67,36.06h66.9A17.67,17.67,0,0,0,190.24,18.4h0A17.67,17.67,0,0,0,172.57.73h-66.9A17.67,17.67,0,0,0,88,18.4h0A17.67,17.67,0,0,0,105.67,36.06Zm-88,45h76.9A17.67,17.67,0,0,0,112.24,63.4h0A17.67,17.67,0,0,0,94.57,45.73H17.67A17.67,17.67,0,0,0,0,63.4H0A17.67,17.67,0,0,0,17.67,81.06ZM10.41,35.42h7.8V6.92h10.1V0H.31v6.9h10.1Zm28.1,0h7.8V8.25h.1l9,27.15h6l9.3-27.15h.1V35.4h7.8V0H66.76l-8.2,23.1h-.1L50.31,0H38.51ZM152.43,55.67a15.07,15.07,0,0,0-4.52-5.52,18.57,18.57,0,0,0-6.68-3.08,33.54,33.54,0,0,0-8.07-1h-11.7v35.4h12.75a24.58,24.58,0,0,0,7.55-1.15A19.34,19.34,0,0,0,148.11,77a16.27,16.27,0,0,0,4.37-5.5,16.91,16.91,0,0,0,1.63-7.58A18.5,18.5,0,0,0,152.43,55.67ZM145,68.6A8.8,8.8,0,0,1,142.36,72a10.7,10.7,0,0,1-4,1.82,21.57,21.57,0,0,1-5,.55h-4.05v-21h4.6a17,17,0,0,1,4.67.63,11.66,11.66,0,0,1,3.88,1.87A9.14,9.14,0,0,1,145,59a9.87,9.87,0,0,1,1,4.52A11.89,11.89,0,0,1,145,68.6Zm44.63-.13a8,8,0,0,0-1.58-2.62A8.38,8.38,0,0,0,185.63,64a10.31,10.31,0,0,0-3.17-1v-.1a9.22,9.22,0,0,0,4.42-2.82,7.43,7.43,0,0,0,1.68-5,8.42,8.42,0,0,0-1.15-4.65,8.09,8.09,0,0,0-3-2.72,12.56,12.56,0,0,0-4.18-1.3,32.84,32.84,0,0,0-4.62-.33h-13.2v35.4h14.5a22.41,22.41,0,0,0,4.72-.5,13.53,13.53,0,0,0,4.28-1.65,9.42,9.42,0,0,0,3.1-3,8.52,8.52,0,0,0,1.2-4.68A9.39,9.39,0,0,0,189.66,68.47ZM170.21,52.72h5.3a10,10,0,0,1,1.85.18,6.18,6.18,0,0,1,1.7.57,3.39,3.39,0,0,1,1.22,1.13,3.22,3.22,0,0,1,.48,1.82,3.63,3.63,0,0,1-.43,1.8,3.4,3.4,0,0,1-1.12,1.2,4.92,4.92,0,0,1-1.58.65,7.51,7.51,0,0,1-1.77.2h-5.65Zm11.72,20a3.9,3.9,0,0,1-1.22,1.3,4.64,4.64,0,0,1-1.68.7,8.18,8.18,0,0,1-1.82.2h-7v-8h5.9a15.35,15.35,0,0,1,2,.15,8.47,8.47,0,0,1,2.05.55,4,4,0,0,1,1.57,1.18,3.11,3.11,0,0,1,.63,2A3.71,3.71,0,0,1,181.93,72.72Z"/></g></g></svg></a></li>`;
  modalMovie = basicLightbox.create(
    `<div class="modal${darkTheme}">
  <div class="modal__wrapper">
    <button type="button" class="modal__circle-btn" data-action="close-modal">
      <svg
        class="modal__circle-svg"
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m7.975 8-.699.701 3.149 3.149 3.15 3.15-3.138 3.138L7.3 21.275l.712.713.713.712 3.137-3.137L15 16.425l3.138 3.138 3.137 3.137.713-.712.712-.713-3.137-3.137L16.425 15l3.15-3.15 3.15-3.15-.713-.712-.712-.713-3.15 3.15-3.15 3.15-3.138-3.138C10.137 8.712 8.713 7.3 8.699 7.3c-.014 0-.34.315-.724.7"
          fill-rule="evenodd"
        />
      </svg>
    </button>
    <div class="modal-item poster">
      <div class="poster__wrapp" tabindex="0">
        <img
          class="poster__movie"
          data-action="poster"
          data-src="${poster_path}"
          src="${src}"
          alt="${title || name}"
          srcset="
            ${src} 1x,
            ${src2x} 2x,
            ${src3x} 3x
          "
        />
        <div data-action="trailer" class="poster__trailer-btn${darkTheme}" tabindex="0">
          <svg class='ytp-large-play-button ytp-button' width="30px" height="20px" version="1.1" viewBox="0 0 68 48" ><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>
          <span class="poster__trailer-text">Trailer</span>
        </div>
      </div>
    </div>
    <div class="modal-item">
      <div class="movie-desc">
        <h1 class="movie-desc__item movie-title">${title || name}</h1>
        <div class="movie-desc__item movie-info">
          <div class="movie-info__item movie__vote">
            <p class="movie-info__param${darkTheme}">Vote / Votes</p>
            <p class="movie-info__value">
              <span class="movie-info__value--vote-left">${vote_average}</span>
              /
              <span class="movie-info__value--vote-right${darkTheme}">${vote_count}</span>
            </p>
          </div>
          <div class="movie-info__item">
            <p class="movie-info__param${darkTheme}">Popularity</p>
            <p class="movie-info__value">${popularity.toFixed(1)}</p>
          </div>
          <div class="movie-info__item">
            <p class="movie-info__param${darkTheme}">Original Title</p>
            <p class="movie-info__value movie-info__value--text-title">
              ${original_title || original_name}
            </p>
          </div>
          <div class="movie-info__item">
            <p class="movie-info__param${darkTheme}">Genre</p>
            <p class="movie-info__value movie-info__value--text-genre">
            ${getGenreModalMovie(genres)}</p>
          </div>
        </div>
        <div class="movie-desc__item movie-overview">
          <p class="movie-overview__title">About</p>
          <p class="movie-overview__text">${overview}</p>
        </div>
      </div>
      <ul class="feature-button__list">
        <li class="feature-button__item">
          <button class="feature-button feature-button__watched${darkTheme}" type="button">
            add to Watched
          </button>
        </li>
        <li class="feature-button__item">
          <button class="feature-button feature-button__queue${darkTheme}" type="button">
            add to queue
          </button>
        </li>
      </ul>
      <ul class='movie-social-links'>${imdbLink}${tmdbLink}</ul>
      
    </div>
  </div>
</div>
`,
    {
      className: 'basicLightbox-center',
      onClose: () => {
        window.removeEventListener('keydown', onCloseModalEscape);
        enablePageScroll();
        JSON.parse(localStorage.getItem('watched'));
        renderOnRemove(
          'watched',
          watchedButton,
          onClickWatched,
          getLocalStorageWatched
        );
        renderOnRemove(
          'queue',
          queueButton,
          onClickQueue,
          getLocalStorageQueue
        );
      },
    }
  );
  modalMovie.show();

  const scrollableModal = document.querySelector('.basicLightbox-center');
  disablePageScroll(scrollableModal);

  postersArr.length = 0;
  document
    .querySelector('.poster__wrapp')
    .addEventListener('click', debounce(callPosterOrTrailer, DEBOUNCE_DELAY));

  document
    .querySelector('[data-action="close-modal"]')
    .addEventListener('click', onCloseModalBtn);
  window.addEventListener('keydown', onCloseModalEscape);

  //Watch the trailer button

  const { data } = await filmApiService.fetchMovieTrailer();
  if (data.results.length) {
    const posterTrailerBtn = document.querySelector('.poster__trailer-btn');
    setTimeout(() => {
      posterTrailerBtn.classList.add('is-show');
    }, 1000);
  }
}

function onCloseModalBtn() {
  modalMovie.close();
  enablePageScroll();
}

function onCloseModalEscape(evt) {
  if (evt.code === 'Escape') {
    modalMovie.close();
    enablePageScroll();
  }
}

function callPosterOrTrailer(evt) {
  if (evt.target.dataset.action === 'poster') {
    changePosterByClick();
  } else if (evt.target.dataset.action === 'trailer') {
    onShowTrailer();
  }
}

async function changePosterByClick() {
  try {
    const moviePoster = document.querySelector('.poster__movie');
    let currentPosterPath = moviePoster.getAttribute('data-src');

    if (currentPosterPath === 'null') {
      return;
    }

    if (postersArr.length === 0) {
      const { data } = await filmApiService.fetchMovieImages();
      let imageObj = data.posters;

      for (const image of imageObj) {
        postersArr.push(image.file_path);
      }

      if (imageObj.length === 1) {
        Notify.info(
          'Unfortunately, there are no more posters for this movie.',
          {
            cssAnimationStyle: 'zoom',
          }
        );
      }
    }

    let posterToShow = postersArr.pop();

    let posterSrc = `https://image.tmdb.org/t/p/w500${posterToShow}`;
    const posterSrcset = `https://image.tmdb.org/t/p/w500${posterToShow} 1x, 
                      https://image.tmdb.org/t/p/w780${posterToShow} 2x,
                      https://image.tmdb.org/t/p/w1280${posterToShow} 3x`;
    moviePoster.setAttribute('src', posterSrc);
    moviePoster.setAttribute('srcset', posterSrcset);
    moviePoster.setAttribute('data-src', posterToShow);
  } catch (error) {
    console.log(error.message);
  }
}

let trailerIframe;
async function onShowTrailer() {
  try {
    const { data } = await filmApiService.fetchMovieTrailer();
    const id = data.results[0].key;

    trailerIframe = basicLightbox.create(
      `<iframe width="560" height="315" 
      src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,
      {
        onClose: () => {
          window.addEventListener('keydown', onCloseModalEscape);
          window.removeEventListener('keydown', onCloseTrailerEsc);
        },
      }
    );
    trailerIframe.show();

    window.removeEventListener('keydown', onCloseModalEscape);
    window.addEventListener('keydown', onCloseTrailerEsc);
  } catch (error) {
    console.log(error.message);
  }
}

function onCloseTrailerEsc(evt) {
  if (evt.code === 'Escape') {
    trailerIframe.close();
  }
}

async function rerenderLibraryAfterDelete(libraryArraySlice, page) {
  notiflixLoading();
  const libraryArrayRender = [];

  if (libraryArraySlice[page - 1] === undefined) {
    page -= 1;
  }

  for (let id of libraryArraySlice[page - 1]) {
    filmApiService.ID = id;
    const resolve = await filmApiService.fetchMovieID();
    const filmArray = resolve.data;
    libraryArrayRender.push(filmArray);
  }
  paginationProperties.page = page;
  paginationProperties.totalPages = libraryArraySlice.length;
  paginationProperties.libraryArr = libraryArraySlice;

  filmList.innerHTML = libraryFilmCardRender(libraryArrayRender);
  initPagination(paginationProperties);
  notiflixLoadingRemove();
  buttonColorChange.CallButtonColorChange();
}

function renderOnRemove(item, currentBtn, fn, localStoragePlace) {
  if (
    !headerLibrary.classList.contains('is-hidden') &&
    currentBtn.classList.contains('currentbtn')
  ) {
    let page = paginationProperties.page;
    const getLocalStorgeObj = JSON.parse(localStorage.getItem(item));

    if (getLocalStorgeObj.length === localStoragePlace.length) {
      if (
        JSON.stringify(localStoragePlace) == JSON.stringify(getLocalStorgeObj)
      ) {
        return;
      } else {
        saveStorage(item, localStoragePlace);
        return;
      }
    }

    const libraryArraySlice = [];
    for (let i = 0; i < getLocalStorgeObj.length; i += 9) {
      const chunk = getLocalStorgeObj.slice(i, i + 9);
      libraryArraySlice.push(chunk);
    }

    if (
      libraryArraySlice.toString() ===
      paginationProperties.libraryArr.toString()
    ) {
      return;
    } else if (getLocalStorgeObj.length <= 9) {
      fn();
    } else {
      rerenderLibraryAfterDelete(libraryArraySlice, page);
    }
    buttonColorChange.CallButtonColorChange();
  }
}
