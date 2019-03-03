<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-sheet class="pa-3 primary lighten-1">
      <v-text-field
        v-model="search"
        label="Search Company Directory"
        dark
        flat
        solo-inverted                                                                                                         
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
      <v-checkbox
        v-model="caseSensitive"
        dark
        hide-details
        label="Case sensitive search"
      ></v-checkbox>
    </v-sheet>
    <v-card-text class="custom-treechild">
      <v-treeview
        :items="param.items" 
        :search="search" 
        :filter="filter" 
        open-on-click
        transition
        return-object
        open-all
        class="custom-treetext"
      >
      <!-- :open.sync="open" -->
        <template v-slot:prepend="{ item }" >
          <v-icon 
            v-if="item.children"
            v-text="`mdi-${item.id === 1 ? 'desktop-classic' : item.id < 100 ? 'information' :''}`"
          ></v-icon>
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props:{
        param:{ 
            // search:{ type: String, default: "", },
            items: {type: Array, required: true},
        },
     },
    props:['param',],
    data: () => ({
    //   open: [1, 2],
      search: null,
      caseSensitive: false
    }),
    computed: {
      filter () {
        return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
      }
    }, 
    created() {
        this.$EventBus.$on('messagesearch', function (msg) {
            this.search = msg;
            alert(this.search);
        })
    },   
  }
  
</script>

<style>
.custom-treetext{
    text-align: left;
}    
.v-treeview-node *{
    flex: initial;
}
/* fisrt */
.v-treeview>.v-treeview-node>.v-treeview-node__children>.v-treeview-node>.v-treeview-node__root>.v-treeview-node__content>.v-treeview-node__label{
    font-weight: bold;
}
.v-treeview>.v-treeview-node>.v-treeview-node__children>.v-treeview-node>.v-treeview-node__children>.v-treeview-node>.v-treeview-node__root>.v-treeview-node__content>.v-treeview-node__label{
    font-weight: bold;
}
/*
.v-treeview-node *{
    overflow: hidden;
    word-wrap: break-word;
    width: auto;
    height: auto;
}
.v-treeview-node__root{
    overflow: hidden;
}
.v-treeview-node__label{
    overflow: hidden;
    word-wrap: break-word;
    
    font-size: 2vw;
}
.v-treeview-node__content{
    
    word-wrap: break-word;
}
.custom-treechild{
    
} */
</style>