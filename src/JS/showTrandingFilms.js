import FilmApiService from './filmApiService';
import { filmCardRender } from './renderCards';
import { initPagination, paginationProperties } from './pagePagination';
import { SHOW_TRANDING_FILMS } from './searchType';
import Notiflix from 'notiflix';
const filmApiService = new FilmApiService();

const filmsWrap = document.querySelector('.films-wrap');
const filmList = document.querySelector('.films-list');
const filmRait = document.querySelector('.film-info__rait');

filmsWrap.addEventListener('DOMContentLoaded', showTranding);

export async function showTranding() {
  try {
    Notiflix.Loading.pulse({
      svgColor: 'var(--complementary-text-color)',
      svgSize: '170px',
    });
    const resolve = await filmApiService.fetchTranding();
    const genres = await filmApiService.getGenreName();
    const filmArray = resolve.data.results;
    const genreArray = genres.data.genres;

    //Add paginationProperties
    paginationProperties.pageName = SHOW_TRANDING_FILMS;
    paginationProperties.page = resolve.data.page;
    paginationProperties.totalPages = resolve.data.total_pages;

    filmList.innerHTML = filmCardRender(filmArray, genreArray);

    initPagination(paginationProperties); //Add Pagination
    Notiflix.Loading.remove();
  } catch (error) {
    console.log(error);
  }
}
showTranding();
// ===<div class = 'film-info__rait'>${item.vote_average}</div>  -  Рейтинг всталять после года
