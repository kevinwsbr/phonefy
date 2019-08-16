<template>
  <div>
    <v-carousel v-if="phones" dark height="500">
      <v-carousel-item v-for="(phone, id) in phones" :key="id">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="space-around">
            <v-card class="mx-auto" height="100%" width="100%">
              <v-img class="black--text" height="100%" src="../../assets/phone.jpg">
                <v-card-title class="device-name align-end fill-height">{{ phone[0].DeviceName }}</v-card-title>
              </v-img>
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import Phone from "../../services/phones";

export default {
  data() {
    return {
      phones: [],
      source: [
        { brand: "Apple", model: "Iphone X" },
        { brand: "Samsung", model: "Galaxy S10" },
        { brand: "Motorola", model: "Moto Z3" },
        { brand: "Xiaomi", model: "Xiaomi Mi 9" },
        { brand: "LG", model: "LG V40" }
      ]
    };
  },

  async mounted() {
    for (let i = 0; i < this.source.length; i++) {
      await Phone.getDevice(this.source[i].brand, this.source[i].model).then(
        response => {
          this.phones.push(response.data);
        }
      );
    }
  }
};
</script>

<style scoped lang="scss">
.device-name {
  padding: 34px 34px 8px 34px;
}
</style>