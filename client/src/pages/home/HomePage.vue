<template>
  <div class="home">
    <h2 class="home__title">
      Parcourez la liste des thrillers les plus populaires de la manière que vous
      préférez&nbsp;:
    </h2>
    <div class="home__buttons">
      <router-link to="/pagination">Liste paginée</router-link>
      <router-link to="/infinite-scroll">Infinite Scroll</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: calc(100vh - #{$nav-height} * 2);
  margin-top: $nav-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 3rem;
    width: 50%;
    text-align: center;
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

      &:hover {
        border: 1px solid $secondary;
        color: $secondary;
        background-color: $light-sec;
      }
    }
  }
}
</style>
