<template>
  <div>
    <div class="container" v-for="k in 3" :key="k">
      <div class="layout wrap">
        <h2 class="mb-5 text-black">Apple</h2>
        <v-carousel height="270" hide-delimiters dark>
          <v-carousel-item v-for="n in 3" :key="n">
            <v-row class="fill-height" align="center" justify="space-around">
              <v-col cols="12" md="4" v-for="c in 3" :key="c">
                <v-sheet dark class="mx-auto" tile height="100%">
                  <v-card light>
                    <v-img
                      src="https://kevinws.com/assets/img/avatar.jpg"
                      class="black--text"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    >
                      <v-card-title class="fill-height align-start justify-center">teste</v-card-title>
                    </v-img>
                  </v-card>
                </v-sheet>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
