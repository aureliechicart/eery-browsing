<template>
  <section class="films">
    <h1 class="films__heading">Pagination</h1>

    <MovieList :films="loadedFilms" />
    <ThePagination
      :totalPages="5"
      :perPage="20"
      :currentPage="currentPage"
      @pagechanged="onPageChange" />
  </section>
</template>

<script>
// import films_one from '../../data/films_1.json'
// import films_two from '../../data/films_2.json'
// import films_three from '../../data/films_3.json'
// import films_four from '../../data/films_4.json'
// import films_five from '../../data/films_5.json'

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
      loadedFilms: { results: [] },
    }
  },
  methods: {
    loadMovies() {
      axios
        .get(`/api/thrillers?page=${this.currentPage}`)
        .then((response) => {
          this.loadedFilms = response.data
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
.films {
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
