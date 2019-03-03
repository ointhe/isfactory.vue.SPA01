<template>
    <basic-form :tabtitle="tabtitle" :contents="paramContents"/>
</template>
<script>
export default {
   name: "Recruit",
    data:()=>({
        paramContents:[
        {
            componentName:"Basicinfo",
            title: "RECRUIT",
            paramContent:[{
                basicinfo: [{
                imageurl : "../../../static/img/introduction_01.jpg" ,
                contents: [
                    {
                        part:0,
                        content:" JAVA 개발자"
                    },
                    {
                        part:1,
                        content:" 4년제 대학 동등 이상의 학력 소지자"
                    },
                    {   
                        part:2,
                        content:" 우대 전공 계열 : 자연과학, 공대 / 1983 년 이후 출생자 or 경력 1년 이상"
                    },
                    { 
                        part:3,
                        content:"1차 : 서류심사 > 2차 : 면접 (1차 합격자에 한함)"
                    },
                    {
                        part:4,
                        content:"제출서류 : 이력서(경력 상세 기록/최종학교 성적), 자기소개서"
                    }]
              }],
            }],
        }],
    }),
    components:{
        BasicForm: () => import('@/components/base/BasicForm'),
    }
}
</script>