<template>
    <basic-form :tabtitle="tabtitle" :contents="paramContents"/>
</template>
<script>
export default {
   name: "Product",
    data:()=>({
        tabtitle: ["INTRODUCTION","TIMELINE","LOCATION"],
        paramContents:[
        {
            componentName:"Basicinfo",
            title: "INTRODUCTION",
            paramContent:[{
                basicinfo: [{
                imageurl : "../../../static/img/introduction_01.jpg" ,
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
              }],
          }],
        },
        {
            componentName:"Timeline",
            title: "TIMELINE",
            paramContent:[{
                timeline: [{
                imageurl : "../../../static/img/timeline_02.jpg" ,
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
                ],
              }],
          }],
        },
        {
            componentName:"LocationMap",
            title: "LOCATION",
            paramContent:[{
                location: [{
                  imageurl : "../../../static/img/location_01.jpg" ,
                  center: { lat: 37.4738077, lng: 126.88531 },
                  markers: [{
                      position:{
                        lat: 37.4738077,
                        lng: 126.88531
                      }
                    },
                  ],
                  comment: "찾아오시는 길 : 서울 금천구 가산동 345-50 IT프리미어타워 701호",
                 }],
            }],
        },
      ],
    }),
    components:{
        BasicForm: () => import('@/components/base/BasicForm'),
    }
}
</script>