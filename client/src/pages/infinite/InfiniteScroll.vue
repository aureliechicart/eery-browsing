<template>
  <section class="infinite">
    <h1 class="infinite__heading">Infinite Scroll</h1>

    <MovieList />
    <!-- when the intersect event is triggered, we load the next round of films -->
    <IntersectionObserver @intersect="loadFilms(this.page)" />
    <div v-if="endOfList" class="end-message">Fin de la liste</div>
  </section>
</template>


<script>
import films_1 from '../../data/films_1.json'
import films_2 from '../../data/films_2.json'
import films_3 from '../../data/films_3.json'
import films_4 from '../../data/films_4.json'
import films_5 from '../../data/films_5.json'

import MovieList from '../../components/movies/MovieList.vue'
import IntersectionObserver from '../../components/infinite/IntersectionObserver.vue'

export default {
  components: {
    MovieList,
    IntersectionObserver,
  },
  data() {
    return {
      films_list: [
        { id: 0, films: films_1 },
        { id: 1, films: films_2 },
        { id: 2, films: films_3 },
        { id: 3, films: films_4 },
        { id: 4, films: films_5 },
      ],
      films: { results: [] },
      page: 0,
      endOfList: false,
      img_prefix: 'http://image.tmdb.org/t/p/w154/',
    }
  },
  methods: {
    loadFilms(page) {
      if (!this.films_list[page]) {
        // if there is no more movies to load, we display a message and we exit the function
        this.endOfList = true
        return
      }
      const newFilms = this.films_list[page].films.results
      this.films.results.push(...newFilms)
      this.page++
    },
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