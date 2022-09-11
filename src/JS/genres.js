import { showTranding } from './showTrandingFilms';

const genres = document.querySelector('#genres');
genres.addEventListener('input', onSelect);

function onSelect(e) {
  showTranding();
}
