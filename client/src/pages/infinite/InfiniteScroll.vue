<template>
  <section class="infinite">
    <h1 class="infinite__heading">Infinite Scroll</h1>

    <MovieList :movies="loadedMovies" />
    <!-- when the intersect event is triggered, we load the next round of movies -->
    <IntersectionObserver @intersect="loadMoreMovies" />
    <div v-if="endOfList" class="end-message">Fin de la liste</div>
  </section>
</template>


<script>
import axios from 'axios'

import MovieList from '../../components/movies/MovieList.vue'
import IntersectionObserver from '../../components/infinite/IntersectionObserver.vue'

export default {
  components: {
    MovieList,
    IntersectionObserver,
  },
  data() {
    return {
      loadedMovies: { results: [] },
      currentPage: 0,
      endOfList: false,
    }
  },
  methods: {
    loadMovies() {
      axios
        .get(`/api/thrillers?page=1`)
        .then((response) => {
          this.loadedMovies = response.data
        })
        .catch((error) => console.log(error))
    },
    loadMoreMovies() {
      this.currentPage++
      axios
        .get(`/api/thrillers?page=${this.currentPage}`)
        .then((response) => {
          this.loadedMovies.results = [
            ...this.loadedMovies.results,
            ...response.data.results,
          ]
        })
        .catch((error) => console.log(error))
    },
  },
  mounted() {
    this.loadMovies()
  },
}
</script>

<style lang="scss" scoped>
.infinite {
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