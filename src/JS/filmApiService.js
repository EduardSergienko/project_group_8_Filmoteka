import axios, { Axios } from 'axios';

export default class FilmApiService {
  constructor() {
    this.searchingFilm = '';
    this.page = 1;
  }
  async fetchMovies() {
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(
      ` ${BASE_URL}?${API_KEY}&query=${this.searchingFilm}&language=en-US&page=${this.page}`
    );
  }

  async fetchTranding() {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(` ${BASE_URL}?${API_KEY}`);
  }

  async getGenreName() {
    const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(
      ` ${BASE_URL}?${API_KEY}&language=en-US&page=${this.page}`
    );
  }

  resetPage() {
    this.page = 1;
  }

  get qwery() {
    return this.searchingFilm;
  }
  set qwery(newQwery) {
    this.searchingFilm = newQwery;
  }
  get nextPage() {
    return this.page;
  }
  set nextPage(newPage) {
    this.page = newPage;
  }
}
