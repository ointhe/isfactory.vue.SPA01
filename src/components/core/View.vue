<template>
<v-container grid-list-md text-xs-center>
  <div class="main-view">
    <v-scroll-y-transition mode="out-in">
    <router-view/>
    </v-scroll-y-transition>
  </div>
</v-container>
</template>

<script>
export default {
  // name: 'App',
//   components: {
//     CoreFooter: () => import('@/components/core/Footer'),
//     CoreToolbar: () => import('@/components/core/Toolbar'),
//     CoreToolbarTab: () => import('@/components/core/ToolbarTab'),
//     CoreView: () => import('@/components/core/View')
//   },
  
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


.main-view{
    height: 100%;
    
}
</style>
