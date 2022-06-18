import { Loading } from 'notiflix';

export function notiflixLoading() {
  Loading.pulse({
    svgColor: 'var(--complementary-text-color)',
    svgSize: '170px',
  });
}

export function notiflixLoadingRemove() {
  Loading.remove();
}
