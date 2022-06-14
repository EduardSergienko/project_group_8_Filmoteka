export function filmCardRender(arg, genresArrObj) {
  return arg
    .map(
      item => ` <li class="films-list__card" 
      data-id="${item.id}"
      data-media-type="${item.media_type}">
      <img class = 'films-list__poster' src="https://image.tmdb.org/t/p/w400/${
        item.poster_path
      }" alt="${item.name || item.original_title}" srcset="
            https://image.tmdb.org/t/p/w400/${item.poster_path} 1x,
            https://image.tmdb.org/t/p/original/${item.poster_path} 2x
          " loading="lazy" />

  <div class="film-info">
  <h2 class="film-info__name">
      ${cutFilmTitle(item.name || item.original_title)}  
    </h2>
    <div class="film-info__wrap">
    <p class="film-info__genre-year">
      ${getGenresNames(genresArrObj, item.genre_ids)}  |  ${(
        item.first_air_date || item.release_date
      ).slice(0, 4)} 
      
    </p>
   
    </div>
  </div>
</li>`
    )
    .join('');
}
export function getGenresNames(genreArray, dataIds) {
  const genresNames = genreArray
    .filter(genre => dataIds.includes(genre.id))
    .map(genre => genre.name);

  if (genresNames.length > 2) {
    return genresNames.slice(0, 2).join(', ').concat([', Other']);
  }
  return genresNames.join(', ') || 'No Genre';
}

function cutFilmTitle(title) {
  if (title.length > 40) {
    return title.slice(0, 40) + '...';
  } else {
    return title;
  }
}
