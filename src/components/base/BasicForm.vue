<template>
<div class="test">
  <v-container v-scroll="onScrollDown"> 
    <v-layout
      align-center
      justify-center
      row 
      style="margin-top: 0px; margin-bottom: 20px;" 
    >
      <v-tabs fixed-tabs v-model="step" color="rgba(255, 255, 255, 0.7)" active-class="customselected" hide-slider=true :class="{ topFixBannerFixed : isScrolldown }" style="border-radius: 100px;"> 
        <!-- <v-btn
          flat
          @click="prev"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
        <v-tab
          :key="index"
          v-for="(title, index) in tabtitle"           
        >{{title}}
        </v-tab>
        <!-- <v-btn
          flat
          @click="next"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn> -->
      </v-tabs>      
    </v-layout>
    <v-window v-model="step"
      v-for="(content,index) in contents"
      :key="index"
    >
      <v-window-item :value="index">
        <component :is="content.componentName" :title="content.title" :param="content.paramContent[index]"></component>
      </v-window-item>
    </v-window>
  </v-container>
</div>
</template>

<script>
export default {
    name:'BasicForm',
    props:{
      contents: {type: Array,required: true,},
      tabtitle: {type: Array,required: true,},      
    },
    props: ['contents', 'tabtitle'],       
    data: () => ({
      step:0,
      isScrolldown: false,
    }),
    components:{
      Basicinfo: () => import('@/components/base/BasicInfo'),
      Timeline: () => import('@/components/base/Timeline'),
      LocationMap: () => import('@/components/base/Location'),
    },
    methods:{
      // next () {
      //   this.step = (this.step+1) == this.contents.length
      //     ? 0 : this.step + 1
      // },
      // prev () {
      //   this.step = this.step - 1 < 0
      //     ? this.contents.length - 1
      //     : this.step - 1
      // },
      onScrollDown() {
        if(window.scrollY > 150) this.isScrolldown = true;
        else this.isScrolldown = false;
      },      
    }
}
</script>
<style>
@media all and (max-width: 2000px) and (min-width: 600px) {
.customtext-Basicinfo{
    font-size: 1.5vw;
  }
.headlineintro{
    font-size: 3vw;
  }
}
@media all and (max-width: 599px) and (min-width: 50px) {
.customtext-Basicinfo{
    font-size: 2vw;
  }
.headlineintro{
    font-size: 6vw;
  }
}
.headlineintro{  
  font-family: 'Righteous', cursive;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
}
.iconshadow{
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
}
.customtext-Basicinfo{  
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

