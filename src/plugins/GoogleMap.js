import Vue from 'vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAUEjRHo7Ld_rWmZxtlRhMrYQAl_inHBjs",
        libraries: "places" // necessary for places input
    }
});