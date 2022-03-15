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
  width: 100%;
  height: $nav-height;
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__source {
    margin-right: 1rem;
  }
}
</style>
