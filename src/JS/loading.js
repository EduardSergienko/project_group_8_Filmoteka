import { Loading } from 'notiflix';

export function NotiflixLoading() {
  Loading.pulse({
    svgColor: 'var(--complementary-text-color)',
    svgSize: '170px',
  });
}

export function NotiflixLoadingRemove() {
  Loading.remove();
}
