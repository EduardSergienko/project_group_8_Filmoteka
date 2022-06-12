import * as basicLightbox from 'basiclightbox';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '5f364d2fc6b25c805674b50a1c63d59e';

class FilmApi {
  constructor() {
    this.movie_id = '20';
  }

  fetchImages() {
    const params = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-US',
      //   orientation: 'horizontal',
      //   safesearch: 'true',
      //   page: this.page,
      //   per_page: this.per_page,
    });

    const URL =
      'https://api.themoviedb.org/3/movie/20?api_key=5f364d2fc6b25c805674b50a1c63d59e&language=en-US';

    return fetch(URL).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  get movieId() {
    return this.movie_id;
  }
}
const filmApi = new FilmApi();

const movieItemRef = document.querySelector('.films-list');

movieItemRef.addEventListener('click', onMovieItemClick);

async function onMovieItemClick(evt) {
  evt.preventDefault();

  const isMovieItemEl = evt.target.classList.contains('films-list__poster');
  if (!isMovieItemEl) {
    return;
  }

  try {
    const movieItem = await filmApi.fetchImages();
    console.log(movieItem);

    getMovieGenre(movieItem.genres);
    createMovieItemClick(movieItem);

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
            <button type="button" class="circle-btn" data-modal-close>
            <svg
                class="modal__circle-svg"
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="m7.975 8-.699.701 3.149 3.149 3.15 3.15-3.138 3.138L7.3 21.275l.712.713.713.712 3.137-3.137L15 16.425l3.138 3.138 3.137 3.137.713-.712.712-.713-3.137-3.137L16.425 15l3.15-3.15 3.15-3.15-.713-.712-.712-.713-3.15 3.15-3.15 3.15-3.138-3.138C10.137 8.712 8.713 7.3 8.699 7.3c-.014 0-.34.315-.724.7"
                fill-rule="evenodd"
                fill="#000"
                />
            </svg>
            </button>
            <div class="modal-item poster__modal">
            <a class="poster__link" href="#">
                <img
                class="movie__poster"
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
            <div class="modal-item movie__feature">
            <div class="movie__desc">
                <h1 class="movie__title">${title}</h1>
                <div class="movie-info">
                <div class="movie-info__item movie__vote">
                    <p class="movie-info__param">Vote / Votes</p>
                    <p class="movie-info__value">${vote_average} / ${vote_count}</p>
                </div>
                <div class="movie-info__item movie__popularity">
                    <p class="movie-info__param">Popularity</p>
                    <p class="movie-info__value">${popularity}</p>
                </div>
                <div class="movie-info__item movie__original-title">
                    <p class="movie-info__param">Original Title</p>
                    <p class="movie-info__value">${original_title}</p>
                </div>
                <div class="movie-info__item movie__genre">
                    <p class="movie-info__param">Genre</p>
                    <p class="movie-info__value">${getMovieGenre(genres)}</p>
                </div>
                </div>
                <div class="movie__about">
                <h2></h2>
                <p class="overview">${overview}</p>
                </div>
            </div>
            <div class="feature-button"></div>
            </div>
        </div>
    </div>`
  );
  modalMovie.show();
}

function onCloseModalBtn() {
  modalMovie.close();
}
