<template>
  <footer class="footer">
    <h4 class="footer__source">Source</h4>
    <a target="_blank" href="https://www.themoviedb.org/">
      <img
        :src="
          require('../../assets/images/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg')
        "
        height="50"
    /></a>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $grey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;

  &__source {
    margin-right: 1rem;
  }
}
</style>
