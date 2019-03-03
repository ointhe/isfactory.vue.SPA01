<template>
    <basic-form :tabtitle="tabtitle" :contents="paramContents"/>
</template>
<script>
export default {
   name: "Product",
    data:()=>({
        paramContents:[
        {
            componentName:"Basicinfo",
            title: "CONTACT US",
            paramContent:[{
                basicinfo: [{
                imageurl : "../../../static/img/introduction_01.jpg" ,
                contents: [
                    {
                        part:0,
                        content:"　"
                    },
                    {
                        part:1,
                        content:"　"
                    },
                    {   
                        part:2,
                        content:"▶ (주)탠시는 여러분의 의견을 소중히 생각합니다. 언제나 고객과 함께하겠습니다."
                    },
                    { 
                        part:3,
                        content:"▶ 궁금하신 사항을 E-MAIL로 문의하시면 정성을 다해 답변해 드리겠습니다."
                    },
                    
                    {
                        part:4,
                        content:"info@tansy.co.kr"
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