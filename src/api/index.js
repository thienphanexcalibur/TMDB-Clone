import { http } from '../services/http'
import { APIKey } from '../constant'
/**
 * @param {void}
 * @returns {Promise} [] List now showing movies
 */

export async function fetchNowShowingList (page) {
  const url = `/movie/now_playing?language=en-US&region=&page=${page}`
  return http.get(url)
}
export async function fetchUpcomingList (page) {
  const url = `/movie/upcoming?language=en-US&page=${page}`
  return http.get(url)
}
/**
 *
 * @param {String} query [] query to be searched
 * @returns {Promise} [] List movies in Objects
 */
export async function searchWithQueries (query) {
  const url = `/search/movie?query=${query}`
  return http.get(url)
}

export async function fetchMovieDetails (id) {
  const url = `/movie/${id}?append_to_response=videos`
  return http.get(url)
}

export async function fetchMovieCredits (id) {
  const url = `/movie/${id}/credits?api_key=${APIKey}`
  return http.get(url)
}
