<template>
  <v-footer
    height="auto"
    fixedfir
    class="hidden-sm-and-down ma-0"
    :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'"
  >
  <!-- style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0;border-left:0;border-right:0" -->
    <v-container fluid >
      <v-row align="center" justify="center" class="my-0 py-0">
        <v-col cols="12" md="10" lg="10" sm="11" class="py-0 my-0">
          <v-divider v-if="!this.$vuetify.theme.dark"></v-divider>
          <!-- {{socialLinks}} -->
          <p class="google-font mt-4 mb-3" style="font-size:130%" >Siguenos:
              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.facebook,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.facebook" target="_blank" slot="activator">
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                 </template>
                  <span>Facebook</span>
              </v-tooltip>

              
              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.instagram,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.instagram" target="_blank" slot="activator">
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                 </template>
                  <span>Instagram</span>
              </v-tooltip>

              <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.github/lutimi,0)">
                 <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on" rel="noreferrer" :href="config.generalConfig.socialLinks.github" target="_blank" slot="activator">
                      <v-icon>mdi-github-circle</v-icon>
                    </v-btn>
                 </template>
                  <span>Github</span>
              </v-tooltip>
          </p>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mt-3">
        <v-col cols="12" md="10" lg="10" sm="11" class="my-0 py-0">
          <v-container fluid class="pa-0 my-0">
          </v-container>
        </v-col>
      </v-row>



    </v-container>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data:()=>({
    }),
    computed:{
      ...mapState(['config'])
    },
  }
</script>

<style scoped>
  .darkThemeTextLink{
    color: #FAFAFA
  }
  .lightThemeTextLink{
    color: #3E4551
  }
</style>