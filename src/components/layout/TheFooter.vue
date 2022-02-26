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
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;

  &__source {
    margin-right: 1rem;
  }
}
</style>
