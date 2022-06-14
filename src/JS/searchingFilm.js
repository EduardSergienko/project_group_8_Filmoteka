import FilmApiService from './filmApiService';
import { filmCardRender } from './renderCards';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import initPagination from './pagePagination';
const filmApiService = new FilmApiService();

const searchBtn = document.querySelector('.search-submit');
const inputEl = document.querySelector('.form-input');
const filmList = document.querySelector('.films-list');
searchBtn.addEventListener('click', onSearchBtnClick);
const PAGE_NAME = 'SearchingFilms';

async function onSearchBtnClick(evt) {
  evt.preventDefault();

  filmApiService.qwery = inputEl.value.trim();
  filmApiService.resetPage();
  if (filmApiService.qwery !== '') {
    try {
      const resolve = await filmApiService.fetchMovies();
      const genres = await filmApiService.getGenreName();
      const filmArray = resolve.data.results;
      const gengeArray = genres.data.genres;

      if (filmArray.length !== 0) {
        filmList.innerHTML = filmCardRender(filmArray, gengeArray);
        initPagination(
          PAGE_NAME,
          resolve.data.page,
          resolve.data.total_pages,
          filmApiService.searchingFilm
        );
      } else {
        Notify.failure(
          'Search result not successful. Enter the correct movie name and try again. '
        );
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    Notify.failure(
      'Search result not successful. Enter the correct movie name and try again. '
    );
  }
}
