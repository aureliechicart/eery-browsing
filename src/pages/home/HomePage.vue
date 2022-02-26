<template>
  <div class="home">
    <h2 class="home__title">
      Parcourez les thrillers les plus populaires de la manière que vous
      préférez :
    </h2>
    <div class="home__buttons">
      <router-link to="/pagination">Pagination</router-link>
      <router-link to="/infinite-scroll">Infinite Scroll</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: calc(100vh - #{$nav-height} * 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 3rem;
  }

  &__buttons {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      color: $primary;
      display: inline-block;
      padding: 0.75rem 1.5rem;

      margin-right: 5rem;
      border: 1px solid transparent;
      background-color: transparent;
      border-color: $primary;

      a:active,
      a:hover {
        border: 1px solid #f391e3;
      }
    }
  }
}
</style>
