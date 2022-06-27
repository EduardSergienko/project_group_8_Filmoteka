import FilmApiService from './filmApiService';
import { filmCardRender } from './renderCards';
import { initPagination, paginationProperties } from './pagePagination';
import { SHOW_TRANDING_FILMS } from './searchType';
import { notiflixLoading, notiflixLoadingRemove } from './loading';
import buttonColorChange from './changeButtonColor';

const filmApiService = new FilmApiService();

const filmsWrap = document.querySelector('.films-wrap');
const filmList = document.querySelector('.films-list');
// const filmRating = document.querySelector('.film-info__rating');
const searchForm = document.getElementById('search-form');
const pagination = document.getElementById('pagination');
const footer = document.querySelector('.footer');
footer.classList.add('is-hidden');

filmsWrap.addEventListener('DOMContentLoaded', showTranding);

export async function showTranding() {
  searchForm.reset();
  try {
    const resolve = await filmApiService.fetchTranding();
    const genres = await filmApiService.getGenreName();
    const filmArray = resolve.data.results;
    const genreArray = genres.data.genres;

    notiflixLoading();
    //Add paginationProperties
    paginationProperties.pageName = SHOW_TRANDING_FILMS;
    paginationProperties.page = resolve.data.page;
    paginationProperties.totalPages = resolve.data.total_pages;

    setTimeout(() => {
      filmList.innerHTML = filmCardRender(filmArray, genreArray);
      pagination.classList.remove('is-hidden');
      initPagination(paginationProperties); //Add Pagination
      footer.classList.remove('is-hidden');
      notiflixLoadingRemove();
      //тёмная тема
      buttonColorChange.CallButtonColorChange();
    }, 500);
  } catch (error) {
    console.log(error);
  }
}
showTranding();
