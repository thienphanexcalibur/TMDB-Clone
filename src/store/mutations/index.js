import * as types from '../types'

export default {
  [types.FETCH_NOW_SHOWING] (state, payload) {
    state.nowShowingList = payload
  },

  [types.FETCH_UPCOMING_LIST] (state, payload) {
    state.upcomingList = payload
  },

  [types.SEARCH_MOVIES] (state, payload) {
    state.searchResult = payload
  },

  [types.FETCH_MOVIE_DETAILS] (state, payload) {
    state.movieDetails = payload
  },

  [types.FETCH_MOVIE_CREDITS] (state, payload) {
    state.movieCredits = payload
  },

  [types.CONFIGURATIONS] (state, payload) {
    state.configurations = payload
  }
}
