<template>
   <v-card dark color="white">
     <!-- <v-img v-if="param.basicinfo[0].imageurl != null" v-bind:src="param.basicinfo[0].imageurl" aspect-ratio="2.75">
        <img-headline :title="title"/>
     </v-img> -->
     <img-headline :title="title" :imageurl="param.basicinfo[0].imageurl"/>
     <!-- <v-img v-else src="../../../static/img/introduction_01.jpg" aspect-ratio="2.75">
        <img-headline :title="title"></img-headline>
     </v-img> -->
      <v-card-text>
        <v-flex xs10 offset-xs1>
          <div v-for="contents in param.basicinfo[0].contents"
              :key="contents.part">
            <p class="customtext-Basicinfo text-sm-left">
              {{contents.content}}
            </p>
          </div>
        </v-flex>
      </v-card-text>
    </v-card>
</template>
<script>

export default {
  name: 'BasicInfo',
  props:{
      title: {type: String,defalut: "",},
      param: {type: Object,required: true,},      
    },
  props: ['title', 'param'],
  components:{
    ImgHeadline: () => import('@/components/base/ImgHeadline'),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
