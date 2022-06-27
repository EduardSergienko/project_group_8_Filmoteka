import { loadStorage, saveStorage, removeStorage } from './localStorage';
import buttonColorChange from './changeButtonColor';
const refs = {
  toolbarBtn: document.querySelector('.toolbarContainer__Btn'),
  toolbarBtnLib: document.querySelector('.toolbarContainer__Lib'),

  sunSvg: document.querySelector('.toolbarContainer__sun'),
  sunLibSvg: document.querySelector('.toolbarContainer__sun-lib'),
  moonSvg: document.querySelector('.toolbarContainer__moon'),
  moonLibSvg: document.querySelector('.toolbarContainer__moon-lib'),
  theme: {
    body: document.querySelector('body'),
    libHeader: document.querySelector('.header-library'),
    mainHeader: document.querySelector('.main-page__header'),
    footer: document.querySelector('.footer'),
    footerLink: document.querySelector('.team__link'),
    scroll: document.querySelector('.scroll-process'),
  },
};

const active = 'active-toolbar';
const SUN = 'Sun';
const NIGHT = 'Night';

refs.toolbarBtn.addEventListener('click', togle);
refs.toolbarBtnLib.addEventListener('click', togle);
let checkpoint = false;
if (loadStorage(NIGHT)) {
  togle();
  setTimeout(() => {
    buttonColorChange.CallButtonColorChange();
  }, 1000);
} else {
  checkpoint = true;
  togle();
}
function togle() {
  if (checkpoint) {
    dayTheme();
    return;
  }
  nightTheme();
}

function nightTheme() {
  removeStorage(SUN);

  refs.sunSvg.classList.add(active);
  refs.sunLibSvg.classList.add(active);
  refs.moonSvg.classList.remove(active);
  refs.moonLibSvg.classList.remove(active);

  blurButtons();

  const allContainers = document.querySelectorAll('.films-list__card');
  if (allContainers.length > 0) {
    for (let i = 0; i < allContainers.length; i++) {
      allContainers[i].classList.add('dark-theme');
    }
  }
  changeTheme(refs.theme, true);

  saveStorage(NIGHT, active);

  checkpoint = true;
  buttonColorChange.CallButtonColorChange();
}

function dayTheme() {
  removeStorage(NIGHT);

  refs.sunSvg.classList.remove(active);
  refs.sunLibSvg.classList.remove(active);
  refs.moonSvg.classList.add(active);
  refs.moonLibSvg.classList.add(active);

  blurButtons();

  changeTheme(refs.theme, false);

  saveStorage(SUN, active);

  const allContainers = document.querySelectorAll('.films-list__card');
  if (allContainers.length > 0) {
    for (let i = 0; i < allContainers.length; i++) {
      allContainers[i].classList.remove('dark-theme');
    }
  }

  checkpoint = false;
  buttonColorChange.CallButtonColorChange();
}

function changeTheme(refsList, bool) {
  const newRefsList = { ...refsList };
  if (bool) {
    for (const elem in newRefsList) {
      newRefsList[elem].classList.add('dark-theme');
    }
    return;
  }
  for (const elem in newRefsList) {
    newRefsList[elem].classList.remove('dark-theme');
  }
}

function blurButtons() {
  refs.toolbarBtn.blur();
  refs.toolbarBtnLib.blur();
}
