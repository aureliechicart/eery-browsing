<template>
  <!-- header -->
  <the-header></the-header>
  <router-view v-slot="slotProps">
      <component :is="slotProps.Component"></component>
  </router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Heebo", sans-serif;
  background: linear-gradient($grey, $dark);
}

body {
  margin: 0;
}
</style>
