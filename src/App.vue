<template>
  <v-app v-scroll="onScroll">
    <core-toolbar/>
    <!-- <img src="./assets/logo.png"> -->
    <core-view/>
    <core-footer/>
    <v-btn
                v-show="!hidden"
                color="primary"
                href="#app"
                fixed
                bottom
                right
                fab
              >
                <v-icon>mdi-arrow-up-thick</v-icon>
              </v-btn>
              <p fixed bottom left class="black--text">{{hidden}}</p>
  </v-app>
</template>

<script>
export default {
  // name: 'App',
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    // CoreToolbarTab: () => import('@/components/core/ToolbarTab'),
    CoreView: () => import('@/components/core/View'),
  },
  data() {
    return {
      hidden: true
    }
  },
  methods: {
      onScroll() {
        // alert(e.target.scrollTop);
        if(window.scrollY < 100) this.hidden = true;
        else this.hidden = false;
      }
    }
  
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Righteous');
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400,700');
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
