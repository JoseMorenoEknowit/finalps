<template>
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on }">
          <div v-on="on" style="cursor: pointer;" class="text-center py-5 ma-1 fill-height" :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'" >
               <v-avatar size="100">
              
     
        <v-img src="https://i.ibb.co/BCMwqBj/person3.jpg" aspect-ratio="1.7"></v-img>
 
                </v-avatar>
               
                <p class="mt-1 mb-0 google-font mt-0" style="font-size:80%">Desarrolladores</p>
                <socialMediaDetails :data="data.socialLinks"/>
          </div>
          
      </template>

      <v-card :class="theme.isDark?'grey darken-3':'white'">
        <v-card-title
          class="px-5 google-font"
          primary-title
        >
         Luis Tcona
        </v-card-title>

        <v-card-text class="pa-5">
            <p class="google-font">Soy estudiante de la carrera de ingenieria de software en la universidad peruana de ciencias aplicadas en la upc
            </p>
            <p class="google-font">Tengo 20 años </p>
            
           

           
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import socialMediaDetails from '@/components/common/SocialInfo'
  export default {
    components:{
        
    },
    inject: ['theme'],
    props:['data'],
    data () {
      return {
        dialog: false,
      }
    },
    mounted(){
     
    },
    methods:{
      goToTeam(id){
        this.$router.push("/team/" + id);
      },
    }
    
    }
  
</script>

