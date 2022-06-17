import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import buttonColorChange from './changeButtonColor';

import FilmApiService from './filmApiService';
import arrowSprite from '../images/arrow-sprite.svg';
import { filmCardRender } from './renderCards';
import { libraryFilmCardRender } from './btnWatchedQueue';
import { SHOW_TRANDING_FILMS, SEARCH_FILMS, MY_LIBRARY } from './searchType';
import { NotiflixLoading, NotiflixLoadingRemove } from './loading';

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

export const paginationPropertiesMyLibrary = {
  page: 1,
  results: [],
  totalPages: null,
};

export function initPagination({
  pageName = '',
  page,
  totalPages,
  searchingFilm = '',
  libraryArr,
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
    buttonColorChange.CallButtonColorChange();

    if (pageName === SHOW_TRANDING_FILMS) {
      filmApiService.page = page;
      try {
        NotiflixLoading();
        const resolve = await filmApiService.fetchTranding();
        const genres = await filmApiService.getGenreName();
        const filmArray = resolve.data.results;
        const genreArray = genres.data.genres;

        setTimeout(() => {
          filmList.innerHTML = filmCardRender(filmArray, genreArray);
          NotiflixLoadingRemove();
        }, 500);
        scrollToTop();
      } catch (error) {
        console.log(error);
      }
    }

    if (pageName === SEARCH_FILMS) {
      filmApiService.page = page;
      try {
        NotiflixLoading();
        filmApiService.qwery = searchingFilm;
        const resolve = await filmApiService.fetchMovies();
        const genres = await filmApiService.getGenreName();
        const filmArray = resolve.data.results;
        const genreArray = genres.data.genres;

        setTimeout(() => {
          filmList.innerHTML = filmCardRender(filmArray, genreArray);
          NotiflixLoadingRemove();
        }, 500);
        scrollToTop();
      } catch (error) {
        console.log(error);
      }
    }

    if (pageName === MY_LIBRARY) {
      const libraryArrayCut = [];
      console.log('in pagin', libraryArr);
      try {
        let j = 0;
        if (libraryArr.length <= 9) {
          for (let i = 0; i < libraryArr.length; i += 1) {
            const chunk = libraryArr[i];
            libraryArrayCut.push(chunk);
          }
        } else {
          for (let i = 0; i < libraryArr.length; i += 9) {
            const chunk = libraryArr.slice(i, i + 9);
            libraryArrayCut.push(chunk);
          }
        }

        const libraryArrayRender = [];
        for (let id of libraryArrayCut[j]) {
          filmApiService.ID = id;
          const resolve = await filmApiService.fetchMovieID();
          const filmArray = resolve.data;
          libraryArrayRender.push(filmArray);
        }

        setTimeout(() => {
          filmList.innerHTML = libraryFilmCardRender(libraryArrayRender);
          j += 1;
          NotiflixLoadingRemove();
        }, 500);
        scrollToTop();
      } catch (error) {
        console.log(error);
      }
    }

    return pagination;
  });
}

export function initPaginationMyLibrary(libraryTotalArray, properties) {
  const container = document.getElementById('pagination');
  const options = {
    totalItems: properties.totalPages,
    itemsPerPage: 1,
    visiblePages: 5,
    page: properties.page,
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

  pagination.on('afterMove', ({ page }) => {
    properties.page = page;
    //тёмная тема
    buttonColorChange.CallButtonColorChange();

    try {
      if (properties.page === page) {
        NotiflixLoading();
        setTimeout(() => {
          filmList.innerHTML = libraryFilmCardRender(
            libraryTotalArray[page - 1].results
          );
          NotiflixLoadingRemove();
        }, 300);
      }
    } catch (error) {
      console.log(error);
    }
  });
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
