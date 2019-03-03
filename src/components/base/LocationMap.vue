<template>
    <v-card class="location" dark color="white">
      <img-headline :title="title" :imageurl="param.location[0].imageurl"/>
   <v-flex xs10 offset-xs1 class="customgmap">
       <p v-if="param.location[0].comment != null "class="text-sm-left black--text" style="padding: 2vw;">
        {{ param.location[0].comment }}
       </p>
    <gmap-map ref="mapRef" class="customgmap"
      :center="param.location[0].center"
      :zoom="17"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in param.location[0].markers"
        :position="m.position"
        @click="param.location[0].center=m.position"
      ></gmap-marker>
    </gmap-map>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  name: "GoogleMap",
  props: {
    title: {type: String, default: "TITLE"},
    param: {type: Object, default: {
          location: [{
                  imageurl : "../../../static/img/location_01.jpg" ,
                  center: { lat: 37.4738077, lng: 126.88531 },
                  markers: [{
                      position:{
                        lat: 37.4738077,
                        lng: 126.88531
                      }
                    },
                  ],
                  comment: "찾아오시는 길 : 서울 금천구 가산동 345-50 IT프리미어타워 701호",
          }],
    }},
  },
  props: ['title','param'],
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      places: [],
      currentPlace: null
    };
  },
  components:{
    ImgHeadline: () => import('@/components/base/ImgHeadline'),
  },
  mounted() {
    // this.$refs.mapRef.$mapPromise.then((map) => {
    //   map.panTo({ lat: param.location[0].center.lat, lng: param.location[0].center.lng })
    // })
    
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
        param.location[0].markers.push({ position: marker });
        this.places.push(this.currentPlace);
        param.location[0].center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        param.location[0].center = {
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
  padding-bottom: 2vw;
}
</style>
