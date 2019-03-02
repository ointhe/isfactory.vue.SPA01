<template>
  <v-app v-scroll="onScroll">
    <core-toolbar/>
    <!-- <img src="./assets/logo.png"> -->
    <core-view/>
    <core-footer/>
    <transition name="fade">
    <v-btn class="topbtn"
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
    </transition>
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
      hidden: true,
    };
  },
  methods: {
    onScroll() {
      // alert(e.target.scrollTop);
    if (window.scrollY < 100) this.hidden = true;
    else this.hidden = false;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Righteous');
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400,700');
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans');
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
