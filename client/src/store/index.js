import {
  createStore
} from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      movies: {results: []}
    }
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload
    },
    addMoreMovies(state, payload) {
      state.movies.results = [...state.movies.results, ...payload.results]
    }
  },
  getters: {
    movies(state) {
      return state.movies;
    }
  },
  actions: {
    async loadMovies(context, payload) {
      await axios
        .get(`/api/thrillers?page=${payload.page}`)
        .then((response) => {
          const moreMovies = response.data;
          context.commit('setMovies', moreMovies)
        })
        .catch((error) => console.log(error))
    },
    async loadMoreMovies(context, payload) {
      await axios
        .get(`/api/thrillers?page=${payload.page}`)
        .then((response) => {
          const moreMovies = response.data;
          context.commit('addMoreMovies', moreMovies)
        })
        .catch((error) => console.log(error))
    }
  }
})


export default store;