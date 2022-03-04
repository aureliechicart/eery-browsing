<template>
  <section class="movies">
    <h1 class="movies__heading">Pagination</h1>

    <MovieList :movies="loadedMovies" />
    <ThePagination
      :totalPages="5"
      :perPage="20"
      :currentPage="currentPage"
      @pagechanged="onPageChange" />
  </section>
</template>

<script>

import axios from 'axios'

import MovieList from '../../components/movies/MovieList.vue'
import ThePagination from '../../components/pagination/ThePagination.vue'

export default {
  components: {
    MovieList,
    ThePagination,
  },
  data() {
    return {
      currentPage: 1,
      loadedMovies: { results: [] },
    }
  },
  methods: {
    loadMovies() {
      axios
        .get(`/api/thrillers?page=${this.currentPage}`)
        .then((response) => {
          this.loadedMovies = response.data
        })
        .catch((error) => console.log(error))
    },
    onPageChange(page) {
      this.currentPage = page
      this.loadMovies()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
  mounted() {
    this.loadMovies()
  },
}
</script>


<style lang="scss" scoped>
.movies {
  margin: 0 auto;
  background: linear-gradient($grey, $secondary);

  &__heading {
    color: $secondary;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    font-size: 2.5rem;
  }
}
</style>
