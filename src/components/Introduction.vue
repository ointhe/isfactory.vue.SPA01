<template>
   <v-card dark color="white">
     <v-img src="../../../static/img/introduction_01.jpg" aspect-ratio="2.75">
          <v-container fill-height fluid>
            <v-layout align-end fill-height>
              <v-flex sm5>
                <span class="headlineintro">{{title}}</span>
                <v-icon color="white" class="iconshadow" >mdi-feather</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
     </v-img>
   <v-card-title>
   </v-card-title>
    <v-card-text>
      <v-flex xs10 offset-xs1>
    <div v-for="content in introduction[0].contents"
    :key="content.part">
    <p class="customtextcompany text-sm-left"><v-icon color="black">{{getIcon(content.part)}}</v-icon>
     {{content.content}}
     </p>
    </div>
    <br><br>
    <v-img src="../../../static/img/com_introduction.jpg" alt="introduction" lazy-src="true"/>
    </v-flex>
    
    </v-card-text>
   </v-card>
</template>
<script>
export default {
  name: 'Introduction',
    data: () => ({    
    title : "INTRODUCTION",
    introduction: [
      {
        title : "INTRODUCTION",
        contents: [{
          part:0,
          content:"당사는 분산 환경을 위한 다양한 솔루션과 서비스, Host 시스템에 설치되어 있는 소프트웨어 자원의 내역과 사용 패턴을 정확하고 완벽한 정보를 제공하는 전문 업체입니다."
        },
         { part:1,
          content:"대규모 분산 클라이언트/서버 환경하에서 OLTP 기능을 이용하여 n-tier 환경을 빠른 시간안에 구축할 수 있는 Magnax, GenManager와 기업의 legacy 중심의 기 업무와 비즈니스 로직을 지속적으로 사용하면서 XML문서나 COM, java, .Net과 같은 표준 오브젝트 프로그램과 인터페이스 할 수 있는 신 기술을 제공하는 ApplinX, 소프트웨어의 자산과 활용도에 대한 정보를 제공함으로써 소프트웨어 비용을 절감할 수 있는 방법을 제공하는 SA/390 등의 툴들을 취급하고 있으며, 소프트웨어 공급과 함께 기술 및 노하우를 제공하는데 주력을 두고 있습니다."
          } ,
         {
          part:2,
          content:"당사는 IT 솔루션을 제공하는 업계의 선두 주자 , 최고의 기술을 자부하는 전문 인력을 보유, 고객의 요구를 100% 수용할 수 있는 기술력 보유, 고객 만족도 보증 제도를 통한 90% 이상의 고객 만족 달성, 각 IT 부문별 협력 체제를 도모 융통성 있는 기술 지원, 신사고/ 신 개념에 의한 개발 및 벤처 인큐베이터, 전문 기술 인력 양성을 위한 교육 제도라는 신조를 가지고 언제나 최선을 다할 것을 약속 드립니다. "
         }]
        }
    ],
    }),    
    methods:{
      getIcon: part =>{
        return "mdi-numeric-"+ (part+1) +"-box";
      },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
