import { showTranding } from './showTrandingFilms';
const homeNavBtn = document.querySelector('.pages__home-btn');
const libraryNavBtn = document.querySelector('.pages__library-btn');
const homeHeader = document.querySelector('.main-page__header');
const libraryHeader = document.querySelector('.header-library');
const libraryHeaderHomebtn = document.querySelector(
  '.header-library__home-button'
);
const headerLogo = document.querySelector('.header-lib-logo');
libraryNavBtn.addEventListener('click', onLibraryNavBtnClick);
libraryHeaderHomebtn.addEventListener('click', onLibraryHeaderHomeBtnClick);
headerLogo.addEventListener('click', onHeaderLogoClick);

function onLibraryNavBtnClick() {
  homeHeader.classList.toggle('is-hidden');
  //homeNavBtn.classList.toggle('current');
  libraryHeader.classList.toggle('is-hidden');
  //libraryNavBtn.classList.toggle('current');
}

function onLibraryHeaderHomeBtnClick() {
  homeHeader.classList.toggle('is-hidden');
  // homeNavBtn.classList.toggle('current');
  libraryHeader.classList.toggle('is-hidden');
  //libraryNavBtn.classList.toggle('current');
  showTranding();
}

function onHeaderLogoClick() {
  console.log('click');
  libraryHeader.classList.add('is-hidden');
  homeHeader.classList.remove('is-hidden');
  showTranding();
}
