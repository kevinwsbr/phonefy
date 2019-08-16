<template>
  <div class="container">
    <div class="layout wrap">
      <h2 class="mb-5 text-black">{{ brandName }}</h2>
      <v-carousel height="270" hide-delimiters dark>
        <v-carousel-item height="100%" v-for="id in 3" :key="id">
          <v-row height="100%" class="fill-height" align="center" justify="space-around">
            <v-col cols="12" md="4" v-for="(phone, p_id) in phones" :key="p_id">
              <v-sheet dark class="mx-auto" tile elevation="1" height="100%">
                <v-card light>
                  <v-img src="../../assets/phone.jpg" class="black--text">
                    <v-card-title
                      class="fill-height align-start justify-center"
                    >{{ phone[id-1].DeviceName }}</v-card-title>
                  </v-img>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import Phone from "../../services/phones";

export default {
  props: {
    brand: String,
    limit: Number
  },

  data() {
    return {
      brandName: "",
      phones: []
    };
  },

  mounted() {
    Phone.listDevices(this.brand, this.limit).then(response => {
      for (let i = 0; i < 3; i++) {
        this.phones[i] = response.data.splice(0, 3);
      }

      this.brandName = this.phones[0][0].Brand;
    });
  }
};
</script>

<style scoped lang="scss">
.row {
  padding: 10px;
}
</style>