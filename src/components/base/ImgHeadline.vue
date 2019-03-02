<template>
<v-img v-if="imageurl != null" v-bind:src="imageurl" aspect-ratio="2.75">
    <v-container fill-height fluid>
        <v-layout align-end fill-height>
            <v-flex sm5>
                <span class='headlineintro'>{{title}}</span>
                <v-icon color="white" class='iconshadow' >mdi-feather</v-icon>
            </v-flex>
        </v-layout>
    </v-container>
</v-img>
 <v-container fill-height fluid v-else>
        <v-layout align-end fill-height>
            <v-flex sm5>
                <span class='headlineintro'>{{title}}</span>
                <v-icon color="white" class='iconshadow' >mdi-feather</v-icon>
            </v-flex>
        </v-layout>
</v-container>
</template>

<script>
export default {
    name:"ImgHeadline",
    props:{
        title: {type: String, default: "TITLE"},
        imageurl : {type: String, default: null},
    },
    props:['title','imageurl'],
}
</script>
