import FilmApiService from './filmApiService';
import { filmCardRender } from './renderCards';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initPagination, paginationProperties } from './pagePagination';
import { SEARCH_FILMS } from './searchType';
import { notiflixLoading, notiflixLoadingRemove } from './loading';
import buttonColorChange from './changeButtonColor';

const filmApiService = new FilmApiService();

const searchBtn = document.querySelector('.search-submit');
const inputEl = document.querySelector('.form-input');
const filmList = document.querySelector('.films-list');
searchBtn.addEventListener('click', onSearchBtnClick);

async function onSearchBtnClick(evt) {
  evt.preventDefault();

  filmApiService.query = inputEl.value.trim();
  filmApiService.resetPage();
  if (filmApiService.query !== '') {
    try {
      const resolve = await filmApiService.fetchMovies();
      const genres = await filmApiService.getGenreName();
      const filmArray = resolve.data.results;
      const gengeArray = genres.data.genres;

      //Add paginationProperties
      paginationProperties.pageName = SEARCH_FILMS;
      paginationProperties.page = resolve.data.page;
      paginationProperties.totalPages = resolve.data.total_pages;
      paginationProperties.searchingFilm = filmApiService.searchingFilm;

      if (filmArray.length !== 0) {
        notiflixLoading();

        setTimeout(() => {
          filmList.innerHTML = filmCardRender(filmArray, gengeArray);
          initPagination(paginationProperties);
          notiflixLoadingRemove();
          buttonColorChange.CallButtonColorChange();
        }, 500);
      } else {
        Notify.failure(
          'Search result not successful. Enter the correct movie name and try again.',
          {
            timeout: 3000,
            position: 'center-top',
            cssAnimationStyle: 'zoom',
            width: '500px',
            showOnlyTheLastOne: true,
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    Notify.info('Please enter something to search.', {
      timeout: 3000,
      position: 'center-top',
      cssAnimationStyle: 'zoom',
      width: '500px',

      showOnlyTheLastOne: true,
    });
  }
}
