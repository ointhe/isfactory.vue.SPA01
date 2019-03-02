<template>
<section class="history">
  
  <v-card dark color="white">
    <v-img src="../../../static/img/timeline_02.jpg" aspect-ratio="2.75">
          <v-container fill-height fluid>
            <v-layout align-end fill-height>
              <v-flex sm4>
                <span class="headlineintro">{{introduction.title}}</span>
                <v-icon color="white" class="iconshadow" >mdi-feather</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
     </v-img>
    <v-card-title>
   </v-card-title>
   <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
    <Timeline class="black--text bold"
      :timeline-items="dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :unique-year="true"
      order="desc"  
    >
    <v-icon>mdi-format-quote-open</v-icon>
    </Timeline>
    </v-flex>
     <!-- <v-timeline
        align-top
        dense
      >
      <v-timeline-item
        v-for="historys in history"
        :key="historys.idx"
        :color="getColors(historys.date)"
        small
      >
          <v-layout pt-3>
            <v-flex xs3>
              <strong :class="`${getColors(historys.date)}--text`">{{historys.date}}</strong>
            </v-flex>
            <v-flex>
              <strong>{{ historys.content.split(' ')[0] }}</strong>
              <div class="caption">{{historys.content}}</div>
            </v-flex>
          </v-layout>
      </v-timeline-item>
     </v-timeline> -->

    <!-- <v-timeline-item
      v-for="historys in history"
      :key="historys.idx"
      :color="getColors(historys.date)"
      small
    >
    
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${getColors(historys.date)}--text`"
          v-text="historys.date"
        ></span>
      </template>
      <div class="py-3">
        <h2 :class="`headline font-weight-light mb-3 ${getColors(historys.date)}--text`">{{ historys.content.split(' ')[0] }} </h2>
        <div class="black--text">
          {{historys.content}}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline> -->
  </v-card>
  </section>
</template>

<script>
import Timeline from "timeline-vuejs";
export default {
  name: 'History',
  data: () => ({
    introduction: {
      title: "TIMELINE",
    },
    messageWhenNoItems: "There arent items",
    dataTimeline: [
      {
        from: new Date(2016, 1),
        title: "LH",
        description:"LH 차세대 정보시스템 유지보수 수주 - 재무, 보상",
      },
      {
        from: new Date(2015, 12),
        title: "LH",
        description:"LH 차세대 정보시스템 구축 사업 완료 - 재무, 구분회계",
      },
      {
        from: new Date(2014, 4),
        title: "LH",
        description:"LH 차세대 정보시스템 구축 사업 참여 - 재무, 구분회계",
      },
      {
        from: new Date(2013, 12),
        title: "한국도로공사",
        description:"한국도로공사 재무 고도화 사업 완료",
      },
      {
        from: new Date(2013, 7),
        title:"LH",
        description:"LH 차세대 정보시스템 구축전략 사업 재무 컨설팅",
      },
      {
        from: new Date(2013, 7),
        title:"코이카",
        description:"코이카 재무시스템 사업 완료",
      },
      {
        from: new Date(2012, 10),
        title:"성신양회",
        description:"성신양회 법인카드 정산 시스템 개발",
      },
      {
        from: new Date(2012, 8),
        title:"광물자원공사",
        description:"광물자원공사 재무코어 개선 사업 완료",
      },
      {
        from: new Date(2012, 2),
        title:"LH",
        description:"LH공사 구분회계 시스템 오픈",
      },
      {
        from: new Date(2011, 12),
        title:"우정사업부",
        description:"우정사업부 PRETON 유지보수 수주",
      },
      {
        from: new Date(2011, 9),
        title:"LH",
        description:"LH공사 구분회계 시스템 수주",
      },
      {
        from: new Date(2011, 6),
        title:"LH",
        description:"LH공사 통합정보사업 참여",
      },
      {
        from: new Date(2010, 12),
        title:"LH",
        description:"LH공사 IFRS도입에 따른 재무시스템 고도화",
      },
      {
        from: new Date(2010, 10),
        title:"한국관광공사",
        description:"한국관광공사 IFRS기반의 전략경영시스템 변경구축",
      },
      {
        from: new Date(2010, 10),
        title:"LH",
        description:"LH 공사 예산 기능개선 시스템 수주",
      },
      {
        from: new Date(2010, 10),
        title:"송유관공사",
        description:"송유관공사 법인카드정산시스템 수주",
      },
      {
        from: new Date(2010, 10),
        title:"성신양회",
        description:"성신양회 재무시스템 고도화",
      },
      {
        from: new Date(2010, 2),
        title:"LH",
        description:"LH공사 공급결산시스템 구축",
      },
      {
        from: new Date(2010, 2),
        title:"LH",
        description:"LH공사 재무시스템 통합",
      },
      {
        from: new Date(2009, 10),
        title:"LH",
        description:"LH공사 공사통합결산",
      },
      {
        from: new Date(2009, 9),
        title:"LH",
        description:"LH공사(구 한국토지공사) 자금관리 자통법 적용",
      },
      {
        from: new Date(2008, 9),
        title:"LH",
        description:"LH공사(구 한국토지공사) 전략경영시스템 운영",
      },
      {
        from: new Date(2007, 2),
        title:"한국광물자원공사",
        description:"한국광물자원공사(구 광업진흥공사) 재무 시스템 구축 완료",
      },
       {
         from: new Date(2007, 1),
        title:"LH",
        description:"LH공사(구 한국토지공사) 재무관리 시스템 수주",
      },
       {
         from: new Date(2007, 1),
        title:"한국관광공사",
        description:"한국관광공사 재무 시스템 구축 완료",
      },
       {
         from: new Date(2006, 6),
        title:"인포섹",
        description:"인포섹 회계 시스템 수주",
      },
       {
         from: new Date(2006, 3),
        title:"한국관광공사",
        description:"한국관광공사 회계 시스템 수주",
      },
       {
        from: new Date(2006, 3),
        title:"대한광업진흥공사",
        description:"대한광업진흥공사 회계 시스템 수주",
      },
       {
        from: new Date(2006, 2),
        title:"성신양회",
        description:"성신양회 재무회계, 관리회계, 펌뱅킹 시스템 구축 완료",
      },
      {
        from: new Date(2005, 11),
        title:"텔스크",
        description:"텔스크 회계 시스템 수주",
      },
      {
        from: new Date(2004, 10),
        title:"성신양회",
        description:"성신양회 펌뱅킹 시스템 수주",
      },
      {
        from: new Date(2004, 10),
        title:"성신양회",
        description:"성신양회 재무 회계, 관리 회계 시스템 수주",
      },
      {
        from: new Date(2004, 9),
        title:"대한송유관",
        description:"대한송유관 공사 펌뱅킹 시스템 구축 완료",
      },
      {
        from: new Date(2004, 1),
        title:"서울 산업 지원 센터",
        description:"서울 산업 지원 센터 입주",
      },
      {
        from: new Date(2004, 1),
        title:"파라다이스",
        description:"파라다이스 회계 시스템 수주",
      },
      {
        from: new Date(2003, 11),
        title:"탠시",
        description:"탠시 법인 설립 ( ITE(주) 기술 사업부 분사)",
      },
    ]
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
.history{
  margin-top : 100px;
}
</style>
