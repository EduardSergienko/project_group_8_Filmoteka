import axios, { Axios } from 'axios';

export default class FilmApiService {
  constructor() {
    this.searchingFilm = '';
    this.ID = '';
    this.page = 1;
  }
  async fetchMovies() {
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(
      `${BASE_URL}?${API_KEY}&query=${this.searchingFilm}&language=en-US&page=${this.page}`
    );
  }

  async fetchTranding() {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(`${BASE_URL}?${API_KEY}&page=${this.page}`);
  }

  async getGenreName() {
    const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(`${BASE_URL}?${API_KEY}&language=en-US`);
  }

  async fetchMovieID() {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(`${BASE_URL}${this.ID}?${API_KEY}&language=en-US`);
  }

  async getExternalID() {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(`${BASE_URL}${this.ID}/external_ids?${API_KEY}`);
  }

  async fetchMovieImages() {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(`${BASE_URL}${this.ID}/images?${API_KEY}`);
  }

  async fetchMovieTrailer() {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
    return await axios.get(`${BASE_URL}${this.ID}/videos?${API_KEY}`);
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchingFilm;
  }
  set query(newQuery) {
    this.searchingFilm = newQuery;
  }
  get nextPage() {
    return this.page;
  }
  set nextPage(newPage) {
    this.page = newPage;
  }
  get queryID() {
    return this.ID;
  }
  set queryID(newID) {
    this.ID = newID;
  }
}
