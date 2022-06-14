const homeNavBtn = document.querySelector('.pages__home-btn');
const libraryNavBtn = document.querySelector('.pages__library-btn');
const homeHeader = document.querySelector('.main-page__header');
const libraryHeader = document.querySelector('.header-library');
libraryNavBtn.addEventListener('click', onLibraryNavBtnClick);
function onLibraryNavBtnClick() {
  homeHeader.classList.toggle('is-hidden');
  homeNavBtn.classList.toggle('current');
  libraryHeader.classList.toggle('is-hidden');
  libraryNavBtn.classList.toggle('current');
}
const libraryHeaderLibbtn = document.querySelector('.header-library__button');
libraryHeaderLibbtn.addEventListener('click', onLibraryHeaderBtnClick);
function onLibraryHeaderBtnClick() {
  homeHeader.classList.toggle('is-hidden');
  homeNavBtn.classList.toggle('current');
  libraryHeader.classList.toggle('is-hidden');
  libraryNavBtn.classList.toggle('current');
}
