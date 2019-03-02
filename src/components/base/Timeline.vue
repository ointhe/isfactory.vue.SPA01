<template>
  <v-card dark color="white">
    <img-headline :title="title" :imageurl="param.timeline[0].imageurl"/>
   <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
    <Timeline class="black--text bold"
      :timeline-items="param.timeline[0].dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :unique-year="true"
      order="desc"
    >
    <v-icon>mdi-format-quote-open</v-icon>
    </Timeline>
    </v-flex>
  </v-card>
</template>

<script>
import Timeline from "timeline-vuejs";
export default {
  name: 'History',
  props:['title','param'],
  comments:{
    ImgHeadline: () => import('@/components/base/ImgHeadline'),
  },
  data: () => ({
    messageWhenNoItems: "There arent items",
  }),
  methods: {
    // getColors(date){ 
    //   // alert();
    //   var date2 = date+"";
    //   date2 = date2.substr(2,2);
    //   console.log(date2);
    //   date2 *= 1;
    //   return this.colors[date2%6];
    // },
  },
}
</script>
<style>
</style>
