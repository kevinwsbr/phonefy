<template>
  <phone-list></phone-list>
</template>

<script>
import PhoneList from "./layout/PhoneList";
import Carousel from "./layout/Carousel";
export default {
  components: {
    "v-carousel": Carousel,
    PhoneList
  }
};
</script>
