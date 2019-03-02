<template>
    
    <v-card class="location" dark color="white">
      <v-img src="../../../static/img/location_01.jpg" aspect-ratio="2.75">
          <v-container fill-height fluid>
            <v-layout align-end fill-height>
              <v-flex sm4>
                <span class="headlineintro">{{title}}</span>
                <v-icon color="white" class="iconshadow" >mdi-feather</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
     </v-img>
    <v-card-title>
   </v-card-title>
   <v-flex xs10 offset-xs1 class="customgmap">
       <p class="text-sm-left black--text">
        찾아오시는 길 : 서울 금천구 가산동 345-50 IT프리미어타워 701호
       </p>
      <!-- <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label> -->
      <br/>
    <br>
    <gmap-map ref="mapRef" class="customgmap"
      :center="center"
      :zoom="17"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      title:"LOCATION",
      center: { lat: 37.4738077, lng: 126.88531 },
      markers: [{
          position:{
              lat: 37.4738077,
              lng: 126.88531
          }
         },
      ],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({ lat: 37.473, lng: 126.883 })
    })
    
    // this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style>
.customgmap{
  padding-bottom: 20px;
}
</style>
