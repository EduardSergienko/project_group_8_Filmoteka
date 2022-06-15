import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import FilmApiService from './filmApiService';
import arrowSprite from '../images/arrow-sprite.svg';
import { filmCardRender } from './renderCards';
import { SHOW_TRANDING_FILMS, SEARCH_FILMS } from './searchType';

const filmApiService = new FilmApiService();
const filmList = document.querySelector('.films-list');

const arrow = `${arrowSprite}#arrow`;
const dotte = `${arrowSprite}#dotte`;

export const paginationProperties = {
  pageName: '',
  page: 1,
  totalPages: null,
  searchingFilm: '',
};

export function initPagination({
  pageName,
  page,
  totalPages,
  searchingFilm = '',
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
        '<a href="#" class="tui-page-btn tui-{{type}} custom-{{type}}">' +
        `<svg class="tui-ico-{{type}} pagination__arrow" width="16" height="16"><use href="${arrow}-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-{{type}}">' +
        `<svg class="tui-ico-{{type}} pagination__arrow" width="16" height="16"><use href="${arrow}-{{type}}"></use></svg>` +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        `<svg class="tui-ico-ellip dotte"><use href="${dotte}"></use></svg>` +
        '</a>',
    },
  };

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', async ({ page }) => {
    filmApiService.page = page;

    if (pageName === SHOW_TRANDING_FILMS) {
      try {
        const resolve = await filmApiService.fetchTranding();
        const genres = await filmApiService.getGenreName();
        const filmArray = resolve.data.results;
        const genreArray = genres.data.genres;

        filmList.innerHTML = filmCardRender(filmArray, genreArray);
        scrollToTop();
      } catch (error) {
        console.log(error);
      }
    }

    if (pageName === SEARCH_FILMS) {
      try {
        filmApiService.qwery = searchingFilm;
        const resolve = await filmApiService.fetchMovies();
        const genres = await filmApiService.getGenreName();
        const filmArray = resolve.data.results;
        const genreArray = genres.data.genres;

        filmList.innerHTML = filmCardRender(filmArray, genreArray);
        scrollToTop();
      } catch (error) {
        console.log(error);
      }
    }

    return pagination;
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0 });
}
