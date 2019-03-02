<template>
<div id="basicform">
  <v-container v-scroll="onScrollDown"> 
    <v-layout
      align-center
      justify-center
      row 
      style="margin-top: 0px; margin-bottom: 20px;" 
    >
      <v-tabs fixed-tabs v-model="step"
      color="rgba(255, 255, 255, 0.7)" 
      active-class="customselected" 
      hide-slider
      :class="{ topFixBannerFixed : isScrolldown }" 
      style="border-radius: 100px;"> 
        <v-tab
          :key="index"
          v-for="(title, index) in tabtitle"
          @click="onTabsClick(title)"
        >{{title}}
        </v-tab>
      </v-tabs>      
    </v-layout>
    
    <v-window v-model="step">
      <v-window-item v-for="(content,index) in contents"
      :key="index" :value="(index)">
        <component 
         :is="content.componentName" :title="content.title" :param="content.paramContent[0]">
         </component>
      </v-window-item>
    </v-window>
  </v-container>
</div>
</template>

<script>
export default {
    name:'BasicForm',
    props:{
      contents: { type: Array, required: true,},
      tabtitle: { type: Array, required: true,},      
    },
    props: ['contents', 'tabtitle'],       
    data: () => ({
      step: 0,
      isScrolldown: false,
    }),
    components:{
      Basicinfo: () => import('@/components/base/BasicInfo'),
      Timeline: () => import('@/components/base/Timeline'),
      LocationMap: () => import('@/components/base/LocationMap'),
    },
    methods:{
      onTabsClick(title){
        window.location.href = '#basicform';
      },
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
    background-color: rgba(0,0,0,0.8);
    color: white;
    padding-bottom: 1.0vw;
}
.topFixBannerFixed {
    position: fixed;
    top: 0px;
    z-index: 1;
    padding-top: 10px;
    height: 60px;
    border-radius: 100px;
}
.topFixBannerLeft{
  border-radius: 100px 100px 0px 0px;
}
.topFixBannerRight{
  border-radius: 0px 0px 100px 100px;
}
</style>

