<template>
<div>
    
    <v-card class="location" dark color="white">
        <v-card-title>
     <v-icon color="black">mdi-format-quote-open</v-icon>
     <span class="headlineintro">
       {{introduction.title}}
       </span>
   </v-card-title>
   <hr><br><br>
   <v-flex xs10 offset-xs1>
       <p class="text-sm-left">
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
    <gmap-map ref="mapRef"
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
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      introduction:{title:"LOCATION"},
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
.location{
    margin-top: 100px;
    margin-bottom: 100px;
    padding-bottom: 100px;
}
</style>
