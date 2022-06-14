import * as basicLightbox from 'basiclightbox';
import FilmApiService from './filmApiService';
const filmApiService = new FilmApiService();
import { textModalBtn, addBtnListenet } from './modalBtn';

const movieItemRef = document.querySelector('.films-list');

movieItemRef.addEventListener('click', onMovieItemClick);

async function onMovieItemClick(evt) {
  evt.preventDefault();

  const isMovieItemEl = evt.target.classList.contains('films-list__poster');
  if (!isMovieItemEl) {
    return;
  }

  const currentMovie = evt.target.closest('.films-list__card');

  filmApiService.queryID = currentMovie.dataset.id;
  filmApiService.queryMediaType = currentMovie.dataset.mediaType;

  try {
    const { data } = await filmApiService.fetchMovieID();

    getMovieGenre(data.genres);
    createMovieItemClick(data);

    addBtnListenet(filmApiService.queryID);
    textModalBtn(filmApiService.queryID);

    const closeModalBtnRef = document.querySelector('[data-modal-close]');
    closeModalBtnRef.addEventListener('click', onCloseModalBtn);
  } catch (error) {
    console.log(error.message);
  }
}
function getMovieGenre(genreArr) {
  const genresNames = genreArr.map(genre => genre.name);

  if (genresNames.length > 2) {
    return genresNames.slice(0, 2).join(', ').concat([', Other']);
  }
  return genresNames.join(', ') || 'No Genre';
}

let modalMovie;
function createMovieItemClick({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
}) {
  modalMovie = basicLightbox.create(
    `<div class="modal">
  <div class="modal__wrapper">
    <button type="button" class="modal__circle-btn" data-modal-close>
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
      <a class="poster__link" href="#">
        <img
          class="poster__movie"
          src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}"
          data-src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}"
          data-srcset="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path} 2x"
          alt="${title}"
          srcset="
            https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path} 1x,
            https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path} 2x
          "
        /> 
      </a>
    </div>
    <div class="modal-item">
      <div class="movie-desc">
        <h1 class="movie-desc__item movie-title">${title}</h1>
        <div class="movie-desc__item movie-info">
          <div class="movie-info__item movie__vote">
            <p class="movie-info__param">Vote / Votes</p>
            <p class="movie-info__value">
              <span class="movie-info__value--vote-left">${vote_average}</span>
              /
              <span class="movie-info__value--vote-right">${vote_count}</span>
            </p>
          </div>
          <div class="movie-info__item">
            <p class="movie-info__param">Popularity</p>
            <p class="movie-info__value">${popularity}</p>
          </div>
          <div class="movie-info__item">
            <p class="movie-info__param">Original Title</p>
            <p class="movie-info__value movie-info__value--text">
              ${original_title}
            </p>
          </div>
          <div class="movie-info__item">
            <p class="movie-info__param">Genre</p>
            <p class="movie-info__value">${getMovieGenre(genres)}</p>
          </div>
        </div>
        <div class="movie-desc__item movie-overview">
          <p class="movie-overview__title">About</p>
          <p class="movie-overview__text">${overview}</p>
        </div>
      </div>
      <ul class="feature-button">
        <li class="feature-button__item">
          <button class="feature-button__watched" type="button">
            add to Watched
          </button>
        </li>
        <li class="feature-button__item">
          <button class="feature-button__queue" type="button">
            add to queue
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
`
  );
  modalMovie.show();
}

function onCloseModalBtn() {
  modalMovie.close();
}
