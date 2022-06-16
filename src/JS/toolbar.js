import { loadStorage, saveStorage, removeStorage } from './localStorage';

const refs = {
  toolbarBtn: document.querySelector('.toolbarContainer__Btn'),
  body: document.querySelector('body'),
  sunSvg: document.querySelector('.toolbarContainer__sun'),
  moonSvg: document.querySelector('.toolbarContainer__moon'),
  footer: document.querySelector('.footer'),
  footerLink: document.querySelector('.team__link'),
  scroll: document.querySelector('.scroll-process'),
  container: document.querySelector('.container'),
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
let checkpoint = false;

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

refs.sunSvg.classList.add(loadStorage(SUN) ?? 'n');
refs.moonSvg.classList.add(loadStorage(SUN) ? 'n' : 'active-toolebar');

function nightTheme() {
  removeStorage(NIGHT);

  refs.moonSvg.classList.remove(active);
  refs.body.classList.add('dark-theme');
  refs.footer.classList.add('dark-theme');
  refs.footerLink.classList.add('dark-theme');
  refs.scroll.classList.add('dark');
  refs.container.classList.add('dark-theme');
  saveStorage(BODY, 'dark-theme');
  saveStorage(FOOTER, 'dark-theme');
  saveStorage(COLORFOOTERLINK, 'dark-theme');
  saveStorage(SKROLL, 'dark-theme');
  saveStorage(CONTAINER, 'dark-theme');

  refs.sunSvg.classList.add(active);
  saveStorage(SUN, active);

  checkpoint = true;
}

function dayTheme() {
  removeStorage(SUN);
  removeStorage(BODY);
  removeStorage(FOOTER);
  removeStorage(COLORFOOTERLINK);
  removeStorage(SKROLL);
  removeStorage(CONTAINER);

  refs.body.classList.remove('dark-theme');
  refs.footer.classList.remove('dark-theme');
  refs.footerLink.classList.remove('dark-theme');
  refs.sunSvg.classList.remove(active);
  refs.scroll.classList.remove('dark');
  refs.container.classList.remove('dark-theme');

  refs.moonSvg.classList.add(active);
  saveStorage(NIGHT, active);

  checkpoint = false;
}
