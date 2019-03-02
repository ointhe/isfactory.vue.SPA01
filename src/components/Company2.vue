<template>
    <v-container v-scroll="onScrollDown"> 
       <v-layout
        align-center
        justify-center
        row 
        style="margin-top: 0px; margin-bottom: 20px;" 
        >
     <v-tabs fixed-tabs v-model="step" color="rgba(255, 255, 255, 0.7)" active-class="customselected" hide-slider=true :class="{ topFixBannerFixed : isScrolldown }" style="border-radius: 100px;"> 
    <v-btn
        flat
        @click="prev"
    >
    <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
        <v-tab
           :key="i"
           v-for="(title, i) in title"
           
        >{{title}}
        </v-tab>
         <v-btn
        flat
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
     </v-tabs>
      <!-- <v-btn 
           :key="i"
           v-for="(title, i) in title"
           outline
           :class="{'black--text' : (i+1 == step) , 'grey--text': (i+1 != step) }"
           @click="selectedCard(i)"
      >
      {{title}}
      </v-btn> -->
      
       </v-layout>
  

   <v-window v-model="step">
       <v-window-item :value="0">
           <intro-duction></intro-duction>
       </v-window-item>
       <v-window-item :value="1">
            <view-history></view-history>
       </v-window-item>
       <v-window-item :value="2">
            <location-map></location-map>
       </v-window-item>
   </v-window>
 </v-container>
</template>
<script>
export default {
    name:'Company',
    data: () => ({
      title:["INTRODUCTION","TIMELINE","LOCATION"],
      step: 0,
      length: 3,
      isScrolldown: false,
    }),
    components:{
      IntroDuction: () => import('@/components/Introduction'),
      ViewHistory: () => import('@/components/Historys'),
      LocationMap: () => import('@/components/Location'),
    },
    methods:{
      selectedCard(i){
        //@click="selectedCard(i)"
        this.step = i+1;
      },
      getIcon: part =>{
        return "mdi-numeric-"+ (part+1) +"-box";
      },
      next () {
        this.step = this.step+1 === length
          ? 0 : this.step + 1
      },
      prev () {
        this.step = this.step - 1 < 0
          ? this.length - 1
          : this.step - 1
      },
      onScrollDown() {
        // alert(e.target.scrollTop);
        if(window.scrollY > 150) this.isScrolldown = true;
        else this.isScrolldown = false;
      },
      goTop(){
          window.scrollY = 0;
      }
      
    }
}
</script>
<style>
.headlineintro{
  font-size: 300%;
  font-family: 'Righteous', cursive;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
}
.iconshadow{
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
}
.customtextcompany{
  font-size: 150%;
  font-family: 'Nanum Gothic Coding', monospace, bold;
  color: black;
}
.customselected{
    background-color: rgba(0,0,0,0.5);
    color: white;
    margin-bottom: 10px;
}
.topFixBannerFixed {
    position: fixed;
    top: 0px;
    z-index: 1;
    padding-top: 10px;
    height: 60px;
    border-radius: 100px;
}
</style>

