import { Pagination } from 'tui-pagination';
import { loadStorage, saveStorage, removeStorage } from './localStorage';
import buttonColorChange from './changeButtonColor';
const refs = {
  toolbarBtn: document.querySelector('.toolbarContainer__Btn'),
  toolbarBtnLib: document.querySelector('.toolbarContainer__Lib'),
  body: document.querySelector('body'),
  sunSvg: document.querySelector('.toolbarContainer__sun'),
  sunLibSvg: document.querySelector('.toolbarContainer__sun-lib'),
  moonSvg: document.querySelector('.toolbarContainer__moon'),
  moonLibSvg: document.querySelector('.toolbarContainer__moon-lib'),
  libHeader: document.querySelector('.header-library'),
  footer: document.querySelector('.footer'),
  footerLink: document.querySelector('.team__link'),
  scroll: document.querySelector('.scroll-process'),
  // pageBtn: document.querySelector('.tui-page-btn'),
};

const active = 'active-toolebar';
const SUN = 'Sun';
const NIGHT = 'Night';
const BODY = 'body';
const FOOTER = 'footer';
const SKROLL = 'skroll';
const CONTAINER = 'container';
const COLORFOOTERLINK = 'colorFooterLink';

refs.toolbarBtn.addEventListener('click', togle);
refs.toolbarBtnLib.addEventListener('click', togle);
let checkpoint = false;
if (loadStorage(SUN)) {
  checkpoint = true;
  setTimeout(() => {
    buttonColorChange.CallButtonColorChange();
  }, 1000);
}
function togle() {
  if (checkpoint) {
    dayTheme();
    return;
  }
  nightTheme();
}

refs.body.classList.add(loadStorage(BODY) ?? 'n');
refs.footer.classList.add(loadStorage(FOOTER) ?? 'n');
refs.footerLink.classList.add(loadStorage(COLORFOOTERLINK) ?? 'n');
refs.scroll.classList.add(loadStorage(COLORFOOTERLINK) ?? 'n');
refs.libHeader.classList.add(loadStorage(BODY) ?? 'n');

refs.sunSvg.classList.add(loadStorage(SUN) ?? 'n');
refs.sunLibSvg.classList.add(loadStorage(SUN) ?? 'n');
refs.moonSvg.classList.add(loadStorage(SUN) ? 'n' : 'active-toolebar');
refs.moonLibSvg.classList.add(loadStorage(SUN) ? 'n' : 'active-toolebar');

function nightTheme() {
  removeStorage(NIGHT);

  refs.sunSvg.classList.add(active);
  refs.sunLibSvg.classList.add(active);
  refs.moonSvg.classList.remove(active);
  refs.moonLibSvg.classList.remove(active);

  refs.body.classList.add('dark-theme');
  refs.footer.classList.add('dark-theme');
  refs.footerLink.classList.add('dark-theme');
  refs.scroll.classList.add('dark-theme');
  refs.libHeader.classList.add('dark-theme');

  const allContainers = document.querySelectorAll('.films-list__card');
  if (allContainers.length > 0) {
    for (let i = 0; i < allContainers.length; i++) {
      allContainers[i].classList.add('dark-theme');
    }
  }
  saveStorage(BODY, 'dark-theme');
  saveStorage(FOOTER, 'dark-theme');
  saveStorage(COLORFOOTERLINK, 'dark-theme');
  saveStorage(SKROLL, 'dark-theme');
  saveStorage(CONTAINER, 'dark-theme');

  saveStorage(SUN, active);

  checkpoint = true;
  buttonColorChange.CallButtonColorChange();
}

function dayTheme() {
  removeStorage(SUN);
  removeStorage(BODY);
  removeStorage(FOOTER);
  removeStorage(COLORFOOTERLINK);
  removeStorage(SKROLL);
  removeStorage(CONTAINER);

  refs.sunSvg.classList.remove(active);
  refs.sunLibSvg.classList.remove(active);
  refs.moonSvg.classList.add(active);
  refs.moonLibSvg.classList.add(active);

  refs.body.classList.remove('dark-theme');
  refs.footer.classList.remove('dark-theme');
  refs.footerLink.classList.remove('dark-theme');
  refs.scroll.classList.remove('dark-theme');
  refs.libHeader.classList.remove('dark-theme');

  const allContainers = document.querySelectorAll('.films-list__card');
  if (allContainers.length > 0) {
    for (let i = 0; i < allContainers.length; i++) {
      allContainers[i].classList.remove('dark-theme');
    }
  }

  saveStorage(NIGHT, active);

  checkpoint = false;
  buttonColorChange.CallButtonColorChange();
}
