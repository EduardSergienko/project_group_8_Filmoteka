import FilmApiService from './filmApiService';
const filmApiService = new FilmApiService();
console.log(filmApiService);

const filmsWrap = document.querySelector('.films-wrap');
const filmList = document.querySelector('.films-list');

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

function filmCardRender(arg, genresArrObj) {
  return arg
    .map(
      item => ` <li class="films-list__card">
      <img class = 'films-list__poster' src="https://image.tmdb.org/t/p/w500${
        item.poster_path
      }" alt="" width="309" height="449" loading="lazy" />

  <div class="film-info">
  <h2 class="film-info__name">
      ${item.original_title || item.name}  
    </h2>
    <div class="film-info__wrap">
    <p class="film-info__genre-year">
      ${getGenresNames(genresArrObj, item.genre_ids)}  |  ${(
        item.first_air_date || item.release_date
      ).slice(0, 4)} 
      
    </p>
   <div class = 'film-info__rait'>${item.vote_average}</div>
    </div>
  </div>
</li>`
    )
    .join('');
}

function getGenresNames(gengeArray, dataIds) {
  const genresNames = gengeArray
    .filter(genre => dataIds.includes(genre.id))
    .map(genre => genre.name);

  if (genresNames.length > 2) {
    return genresNames.slice(0, 2).join(', ').concat([', Other']);
  }
  return genresNames.join(', ') || 'No Genre';
}

showTranding();
