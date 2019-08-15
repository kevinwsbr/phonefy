<template>
  <v-app>
    <v-header></v-header>
    <v-carousel></v-carousel>
    <h2 class="display-1 pa-5">Latest Devices</h2>
    <HelloWorld />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/layout/Header";
import Carousel from "./components/layout/Carousel";

export default {
  name: "App",
  components: {
    "v-header": Header,
    "v-carousel": Carousel,
    HelloWorld
  },
  data: () => ({
    //
  })
};
</script>
