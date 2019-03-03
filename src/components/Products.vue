<template>
    <search-form :tabtitle="tabtitle" :contents="paramContents"/>
</template>
<script>
export default {
    name: "Product",
    data:()=>({
        tabtitle: ["A I S","TIMELINE","ABCD","EFGH","ZZZZ"],
        paramContents:[
        {
            componentName:"TreeViewForm",
            title: "A I S",
            paramContent:[{
                items: [
                        {
                        id: 1,
                        name: 'PRODUCT',
                        children: [
                            {
                            id: 2,
                            name: '회계 정보 시스템 (AIS)',
                            children: [
                                {
                                id: 201,
                                name: 'Master관리',
                                children:[{
                                    id: 2011,
                                    name: '계정과목, 거래처, 사원, 부서, 법인카드, 기타코드 관리'
                                },]
                                },
                                {
                                id: 202,
                                name: '전표 관리 ',
                                children:[{
                                    id: 2012,
                                    name: '전표 검색, 전표승인, 전표승인해제, 전표취소, 마감관리,현황 판 관리'
                                },]
                                },{
                                id: 203,
                                name: '일반회계관리',
                                children:[{
                                    id: 2013,
                                    name: '대체전표입력,자동본지점전표,총계정~전표 행 추적관리, 보조부,관리보조부 '
                                },]
                                },{
                                id: 204,
                                name: '채권/채무관리',
                                children:[{
                                    id: 2014,
                                    name: '거래처별,채권/채무관리,상계계정 Line Item관리,가수금정산'
                                },]
                                },{
                                id: 205,
                                name: '유형업무지원',
                                children:[{
                                    id: 2015,
                                    name: '경비 정산,전불 전표,법인카드 지급,Interface전표 자동발생 및 관리 '
                                },]
                                },{
                                id: 206,
                                name: '자산관리',
                                children:[{
                                    id: 2016,
                                    name: '고정자산 현황/변동관리 및 자동전표, 감가상각자동전표,감상비 추정 '
                                },]
                                },{
                                id: 207,
                                name: '자금관리',
                                children:[{
                                    id: 2017,
                                    name: '원인전표와지급전표분리,입출금 및 일별현황관리 / 시재관리(은행의 거래장부와 일치),미수수익(이자)자동전표,자동본지점전표 '
                                },]
                                },{
                                id: 208,
                                name: '예산관리',
                                children:[{
                                    id: 2018,
                                    name: '예산통제,부서별 예산대비 실적 집계,예산편성,예산조정 '
                                },]
                                },{
                                id: 209,
                                name: '결산관리',
                                children:[{
                                    id: 2019,
                                    name: '가결산(추정결산)기능,재무제표 작성및검증기능,비교/기간별 재무제표 제공 '
                                },]
                                },{
                                id: 210,
                                name: '세무지원',
                                children:[{
                                    id: 2020,
                                    name: '부가세,원천세,기부금,접대비 등 세무신고작업지원 '
                                },]
                                },{
                                id: 211,
                                name: '보안관리',
                                children:[{
                                    id: 2021,
                                    name: '개인단위 화면별 통제기능 '
                                },]
                                },{
                                id: 212,
                                name: '보고서관리',
                                children:[{
                                    id: 2022,
                                    name: '보고서 목록관리, 모든 보고서의 Excel Down-Load기능 '
                                },]
                                },
                            ]
                            },
                            {
                            id: 3,
                            name: 'PretonServer',
                            children: [
                                {
                                id: 301,
                                name: '품질',
                                children:[{
                                    id: 3001,
                                    name: 'PretonSaver를 통한 프린팅 작업들은 프린트품질을 최상으로 유지한다.'
                                }]
                                },{
                                id: 302,
                                name: '유저인터페이스 ',
                                children:[{
                                    id: 3002,
                                    name: 'PretonSaver의 사용자들은 별도의 유저인터페이스가 필요하거나 오버헤드가 요구되어지지 않는다.'
                                }]
                                },{
                                id: 303,
                                name: '최대절약 ',
                                children:[{
                                    id: 3003,
                                    name: 'PretonSaver의 잉크/토너 절약 알고리즘을 통해 25%-45% 의 실질적인 절약이 가능하다 '
                                }]
                                },
                            ]
                            },
                            {
                            id: 4,
                            name: 'Contributors',
                            children: [
                                {
                                id: 401,
                                name: 'Phlow'
                                },
                                {
                                id: 402,
                                name: 'Brandon'
                                },
                                {
                                id: 403,
                                name: 'Sean'                                                   
                                }
                            ]
                            }
                        ]
                        },
                    ],
            }]
        },
        ],
    }),
    components:{
        SearchForm: () => import('@/components/base/SearchForm'),
    }
}
</script>

