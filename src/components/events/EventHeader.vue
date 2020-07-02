<template>
    <v-container fluid class="py-0">
        <v-row align="center">
            <v-col md="12" sm="12" cols="12">
                <p class="google-font mb-0" style="font-weight: 350;font-size:200%"><b>Mi
                    <span style="color: #FFBFFC;">Calendario</span> </b>
                </p>
                <p class="google-font mt-0 mb-0" style="font-size:110%">!Hola mamá! bienvenida a tu calendario de embarazo, aqui podras ver tus citas con las obstreticias y las fechas importante de tu embarazo !</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
        }
    },
    computed:{
        ...mapState(["config"])
    },
}
</script>