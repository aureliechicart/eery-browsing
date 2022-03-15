<template>
  <section class="movies">
    <h1 class="movies__heading">Pagination</h1>
    <p class="movies__subheading">
      Parcourez la liste des thrillers les plus populaires en utilisant les
      boutons de navigation présents en haut et bas de page.
    </p>
    <ThePagination
      :totalPages="totalPages"
      :perPage="perPage"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
    <div v-if="isLoading" class="loader"><BaseSpinner /></div>
    <MovieList v-else :movies="loadedMovies" />
    <ThePagination
      :totalPages="totalPages"
      :perPage="perPage"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </section>
</template>

<script>
import axios from "axios";

import MovieList from "../../components/movies/MovieList.vue";
import ThePagination from "../../components/pagination/ThePagination.vue";

export default {
  components: {
    MovieList,
    ThePagination,
  },
  data() {
    return {
      totalPages: 500,
      currentPage: 1,
      perPage: 0,
      loadedMovies: { results: [] },
      isLoading: false,
    };
  },
  methods: {
    loadMovies() {
      this.isLoading = true;
      axios
        .get(`/api/thrillers?page=${this.currentPage}`)
        .then((response) => {
          this.loadedMovies = response.data;
          this.perPage = Math.ceil(
            response.data.total_results / response.data.total_pages
          );
        })
        .catch((error) => console.log(error))
        .finally(() => (this.isLoading = false));
    },
    onPageChange(page) {
      this.currentPage = page;
      this.loadMovies();
    },
  },
  mounted() {
    this.loadMovies();
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
}

.movies {
  margin-top: $nav-height;
  background: linear-gradient(#ffffff, $secondary);

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
