<template>
  <section class="infinite">
    <h1 class="infinite__heading">Infinite Scroll</h1>
    <p class="infinite__subheading">
      Parcourez la liste des thrillers les plus populaires en faisant dérouler
      la page vers le bas. Dans un premier temps, la page charge 20&nbsp;films.
      Si vous avez fait défilé jusqu'au 20ème&nbsp;film, nous réinterrogeons
      l'API TheMovieDB pour charger les 20&nbsp;films suivants.
    </p>

    <MovieList :movies="loadedMovies" />
    <!-- when the intersect event is triggered, we load the next round of movies -->
    <IntersectionObserver @intersect="loadMoreMovies" />
    <div v-if="isLoading" class="loader"><BaseSpinner /></div>
    <div v-if="endOfList" class="end-message">Fin de la liste</div>
  </section>
</template>

<script>
// import axios from "axios";

import MovieList from "../../components/movies/MovieList.vue";
import IntersectionObserver from "../../components/infinite/IntersectionObserver.vue";

export default {
  components: {
    MovieList,
    IntersectionObserver,
  },
  data() {
    return {
      currentPage: 0,
      endOfList: false,
      isLoading: false,
    };
  },
  methods: {
    async loadMovies() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadMovies", {page: 1});
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }

      this.isLoading = false
    },
    async loadMoreMovies() {
      this.isLoading = true;
      this.currentPage++;
      try {
        await this.$store.dispatch("loadMoreMovies", { page: this.currentPage});
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadMovies();
  },
  computed: {
    loadedMovies() {
      return this.$store.getters["movies"];
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.infinite {
  margin-top: $nav-height;
  background: linear-gradient(#ffff, $secondary);
  height: 100%;

  &__heading {
    color: $secondary;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    font-size: 2.5rem;
  }

  &__subheading {
    margin: 0 auto;
    width: 50%;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
}
</style>
