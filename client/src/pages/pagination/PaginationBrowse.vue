<template>
  <section class="films">
    <h1 class="films__heading">Pagination</h1>

    <MovieList />
    <ThePagination
      :totalPages="5"
      :perPage="20"
      :currentPage="currentPage"
      @pagechanged="onPageChange" />
  </section>
</template>

<script>
import films_one from '../../data/films_1.json'
import films_two from '../../data/films_2.json'
import films_three from '../../data/films_3.json'
import films_four from '../../data/films_4.json'
import films_five from '../../data/films_5.json'

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
      films: films_one,
      films_one: films_one,
      films_two: films_two,
      films_three: films_three,
      films_four: films_four,
      films_five: films_five,
      img_prefix: 'http://image.tmdb.org/t/p/w154/',
    }
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page
      if (this.currentPage === 1) {
        this.films = this.films_one
      }
      if (this.currentPage === 2) {
        this.films = this.films_two
      }
      if (this.currentPage === 3) {
        this.films = this.films_three
      }
      if (this.currentPage === 4) {
        this.films = this.films_four
      }
      if (this.currentPage === 5) {
        this.films = this.films_five
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
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
