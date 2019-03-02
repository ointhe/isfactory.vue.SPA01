
<template>
<div>

  <v-toolbar dark color="primary">
    <!-- <v-toolbar-side-icon> -->
        <popover-menu/>
    <!-- </v-toolbar-side-icon>     -->
    <v-spacer></v-spacer>
    <router-link to="/" >
    <v-toolbar-title class="white--text custom-toolbar">TANSY</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-star</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-code-tags</v-icon>
    </v-btn>
      <v-tabs
        slot="extension"
        v-model="currentItem"
        color="transparent"
        fixed-tabs
        slider-color="yellow"
        show-arrows
      >
        <v-tab
          v-for="item in items"
          :key="item[0]"
          :href="'#tab-' + item[0]"
          :to="item[0]"
        >
          {{item[0]}} 
          <v-icon color="gray">{{item[1]}} </v-icon>
        </v-tab>

        <v-menu
          v-if="more.length"
          bottom
          class="v-tabs__div"
          left
        >
          <a slot="activator" class="v-tabs__item">
            more
            <v-icon>mdi-chevron-down</v-icon>
          </a>

          <v-list class="grey lighten-3">
            <v-list-tile
              v-for="item in more"
              :key="item"
              @click="addItem(item)"
            >
              {{ item }}
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-tabs>
  </v-toolbar>
  
</div>
</template>

<script>
 import axios from 'axios'
export default {    
  components: {
    //   ToolbarTab: () => import('@/components/core/ToolbarTab'),
    // CoreFooter: () => import('@/components/core/Footer'),
    // CoreToolbar: () => import('@/components/core/Toolbar'),
    // CoreView: () => import('@/components/core/View')
    PopoverMenu: () => import('@/components/core/PopoverMenu')
  },
  data: () => ({
      currentItem: 'Home',
      items: [
        ['Home', 'mdi-home'],['Company', 'mdi-domain'],['Products', 'mdi-file-find'],[ 'Contact us', 'mdi-contacts'], ['Recruit' ,'mdi-account-tie']
      ],
      more: [
        'News', 'Maps', 'Books', 'Flights', 'Apps'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }),

    methods: {
      created() {
        console.log("SCREEN : "+window.screen.width);
      },
      mounted() {
        
        if(window.screen.width < 640) alert(window.screen.width);
      },
        // goItem(item){
        //      axios.get('http://localhost:8080/#/'+item)
        //         .then(result => this.msg = item);
        // }
    //   addItem (item) {
    //     const removed = this.items.splice(0, 1)
    //     this.items.push(
    //       ...this.more.splice(this.more.indexOf(item), 1)
    //     )
    //     this.more.push(...removed)
    //     this.$nextTick(() => { this.currentItem = 'tab-' + item })
    //   }
    }

};
</script>

<style>

.custom-toolbar{
    font-size: 500%;
    font-family: 'Righteous', cursive;
}   
</style>