import FilmApiService from './filmApiService';
import { filmCardRender } from './renderCards';

const filmApiService = new FilmApiService();
console.log(filmApiService);

const filmsWrap = document.querySelector('.films-wrap');
const filmList = document.querySelector('.films-list');
const filmRait = document.querySelector('.film-info__rait');

filmsWrap.addEventListener('DOMContentLoaded', showTranding);

async function showTranding() {
  try {
    const resolve = await filmApiService.fetchTranding();
    const genres = await filmApiService.getGenreName();
    const filmArray = resolve.data.results;

    const gengeArray = genres.data.genres;

    filmList.innerHTML = filmCardRender(filmArray, gengeArray);
  } catch (error) {
    console.log(error);
  }
}

// ===<div class = 'film-info__rait'>${item.vote_average}</div>  -  Рейтинг всталять после года

showTranding();
