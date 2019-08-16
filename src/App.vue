<template>
  <v-app>
    <header>
      <v-header></v-header>
    </header>
    <section id="carousel">
      <v-carousel></v-carousel>
    </section>
    <section id="main-content">
      <h2 class="display-1 pa-5">Latest Devices</h2>
      <main-page />
    </section>
  </v-app>
</template>

<script>
import MainPage from "./components/MainPage";
import Header from "./components/layout/Header";
import Carousel from "./components/layout/Carousel";

export default {
  name: "App",
  components: {
    "v-header": Header,
    "v-carousel": Carousel,
    "main-page": MainPage
  }
};
</script>

<style scoped lang="scss">
#carousel {
  margin-top: 64px;
}
</style>
