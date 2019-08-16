<template>
  <div>
    <phone-list v-for="(brand, id) in brands" :brand="brand" v-bind:limit="9" :key="id"></phone-list>
  </div>
</template>

<script>
import PhoneList from "./layout/PhoneList";

export default {
  components: {
    "phone-list": PhoneList
  },

  data() {
    return {
      brands: ["Apple", "Samsung", "Motorola", "LG", "Xiaomi"]
    };
  }
};
</script>
