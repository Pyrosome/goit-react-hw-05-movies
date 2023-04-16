// https://api.themoviedb.org/3/movie/550?api_key=9fe96a650efadcf3ae7d8661b3201021
// https://api.themoviedb.org/3/trending/movie/day?api_key=9fe96a650efadcf3ae7d8661b3201021

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '9fe96a650efadcf3ae7d8661b3201021';

export async function getTrendingMovies() {
  return await axios.get(`trending/movie/day?api_key=${apiKey}`);
}

export async function getSeachedMovies(queryWord) {
  return await axios.get(`search/movie?api_key=${apiKey}&query=${queryWord}`);
}

export async function getMovieDetails(id) {
  return await axios.get(`movie/${id}?api_key=${apiKey}`);
}

// https://api.themoviedb.org/3/movie/76600?api_key=9fe96a650efadcf3ae7d8661b3201021
// https://api.themoviedb.org/3/find/76600?api_key=9fe96a650efadcf3ae7d8661b3201021&language=en-US&external_source=imdb_id