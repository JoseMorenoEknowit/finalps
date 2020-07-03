<template>
    <v-container fluid class="py-0 my-0 mt-0">
        <v-row class="py-0 my-0">
            <v-col md="9" sm="6" cols="12" class="py-0 my-0">
                <p class="google-font mb-1" style="font-size:110%">Manejo de patologías crónicas (Hipertensión arterial, Diabetes Mellitus 2, Hipotiroidismo, otras.
                    Prevención de enfermedades y promoción de salud.
                    Atiende pacientes de todas las edades.</p>
                <p class="google-font" style="font-size:250%" >Consejo </p>
                <p class="google-font mb-2" style="font-size:110%">Querida Mamá recuerda que en esta etapa de el embarazo las pataditas del bebe iran aumentando con más frecuencia
                    y no hay de que preocuparse. Recuerda nuestras citas semanales.</p>
                <p class="google-font" style="font-size:250%;color: #FFBFFC;">Mensaje </p>
                <p class="google-font mt-5">Madre proxima te invito a escriberne por más dudas a mi correo:  NataliaValdivia@Misalud.com</p>
                <span v-for="(item,i) in data.hashtags" :key="i">


                </span>
            </v-col>
            <v-col md="3" sm="6" cols="12" class="py-0 my-0" >
                <img :src="require('@/assets/img/Obstreta.png')" style="float:right" width="100%" alt="">
            </v-col>
            <v-btn style:


                   target="_blank"
                   rel="noreferrer"
                   aria-label="Become a Member"
                   class="color: #BEB5F5 ma-0 google-font elevation-1 primary mr-2"
                   style="text-transform: capitalize;border-radius:5px;color:white"
            >Contactame!</v-btn>
        </v-row>
    </v-container>
</template>

<script>
// import SocialInfo from '@/components/common/SocialInfo'
export default {
    components:{
        // SocialInfo
    },
    props:['data'],
    data:()=>({

    })
}
</script>