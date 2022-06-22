import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import buttonColorChange from './changeButtonColor';

import FilmApiService from './filmApiService';
import arrowSprite from '../images/arrow-sprite.svg';
import { filmCardRender } from './renderCards';
import { libraryFilmCardRender } from './btnWatchedQueue';
import { SHOW_TRANDING_FILMS, SEARCH_FILMS, MY_LIBRARY } from './searchType';
import { notiflixLoading, notiflixLoadingRemove } from './loading';

import { loadStorage, saveStorage, removeStorage } from './localStorage';

const filmApiService = new FilmApiService();
const filmList = document.querySelector('.films-list');

const arrow = `${arrowSprite}#arrow`;
const dotte = `${arrowSprite}#dotte`;

export const paginationProperties = {
  pageName: '',
  page: 1,
  totalPages: null,
  searchingFilm: '',
  libraryArr: [],
};

export function initPagination({
  pageName = '',
  page,
  totalPages,
  searchingFilm = '',
  libraryArr = [],
}) {
  const container = document.getElementById('pagination');
  const options = {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: 5,
    page: page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn tui-page-number">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected tui-page-number">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} custom-{{type}}" aria-label="{{type}} page">' +
        `<svg class="tui-ico-{{type}} pagination__arrow" width="16" height="16"><use href="${arrow}-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-{{type}}">' +
        `<svg class="tui-ico-{{type}} pagination__arrow" width="16" height="16"><use href="${arrow}-{{type}}"></use></svg>` +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip" aria-label="{{type}} page">' +
        `<svg class="tui-ico-ellip dotte"><use href="${dotte}"></use></svg>` +
        '</a>',
    },
  };

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', async ({ page }) => {
    filmApiService.page = page;
    buttonColorChange.CallButtonColorChange();

    if (pageName === SHOW_TRANDING_FILMS) {
      try {
        notiflixLoading();
        const resolve = await filmApiService.fetchTranding();
        const genres = await filmApiService.getGenreName();
        const filmArray = resolve.data.results;
        const genreArray = genres.data.genres;

        setTimeout(() => {
          filmList.innerHTML = filmCardRender(filmArray, genreArray);
          notiflixLoadingRemove();
        }, 500);
        scrollToTop();
      } catch (error) {
        console.log(error);
      }
    }

    if (pageName === SEARCH_FILMS) {
      try {
        notiflixLoading();
        filmApiService.query = searchingFilm;
        const resolve = await filmApiService.fetchMovies();
        const genres = await filmApiService.getGenreName();
        const filmArray = resolve.data.results;
        const genreArray = genres.data.genres;

        setTimeout(() => {
          filmList.innerHTML = filmCardRender(filmArray, genreArray);
          notiflixLoadingRemove();
        }, 500);
        scrollToTop();
      } catch (error) {
        console.log(error);
      }
    }

    if (pageName === MY_LIBRARY) {
      paginationProperties.page = page;

      //тёмная тема
      buttonColorChange.CallButtonColorChange();

      try {
        const libraryArrayRender = [];

        for (let id of libraryArr[page - 1]) {
          filmApiService.ID = id;
          const resolve = await filmApiService.fetchMovieID();
          const filmArray = resolve.data;
          libraryArrayRender.push(filmArray);
        }

        notiflixLoading();
        setTimeout(() => {
          filmList.innerHTML = libraryFilmCardRender(libraryArrayRender);
          notiflixLoadingRemove();
        }, 300);
        scrollToTop();
      } catch (error) {
        console.log(error);
      }
    }

    return pagination;
  });
}

export function scrollToTop() {
  window.scrollTo(0, 0);
}
