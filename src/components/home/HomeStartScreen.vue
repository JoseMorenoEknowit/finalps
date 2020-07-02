<template>
  <v-container id="back" fluid class="v-responsive__content " style="background: url('/imgs/pr.png');">
    <div class="text-center">  
        <v-col>
        <p
          class="google-font mb-1 "
          :class="$vuetify.theme.dark == true?'dark-font-color':'light-font-color'"
          style="font-weight: 350;font-size:230%"
        >
          <b class="text-center display-3">
             Pregnancy
            <span style="color: #FDC5E0;">Safe</span>
          </b>
        </p>
       <div>  
         <a href="
         "></a>
       </div>
     <header class="pshome">

      <div class="container" style="background: url(/imgs/pr.png) !important;">
        <div class="intro-text">
          <div class="text-center display-4">Cuida tu embarazo</div>
          <div class="text-center display-3">Resuelve todas tus dudas</div>
    
        </div>
      </div>
    </header>
      
    
         
        <v-btn style:
          
   
          target="_blank"
          rel="noreferrer"
          aria-label="Become a Member"
          class="color: #BEB5F5 ma-0 google-font elevation-1 primary mr-2"
          style="text-transform: capitalize;border-radius:5px;color:white"
        >Empieza</v-btn>
        <v-btn
          v-if="checkExistance(config.generalConfig.learnMoreLink,0)"
          :href="config.generalConfig.learnMoreLink"
          target="_blank"
          aria-label="Learn More"
          rounded
          rel="noreferrer"
          color="cyan"
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          outlined
          class="ml-0"
          dark
        >Saber mas</v-btn>
      </v-col></div>
    
   
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState(["config"])
  }
};
</script>

<style scoped>
.dark-font-color {
  color: white;
}
.light-font-color {
  color: #616161;
}
.back {
  background-image: url("/imgs/pr.png");
  background-size: cover;
}
#inspire {
  background: none;
}

</style>