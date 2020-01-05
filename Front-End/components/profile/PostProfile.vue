<template>
    <b-img thumbnail class="post" v-bind="mainProps" :src="url" :alt="alt"  v-on:click='openPost'></b-img>
</template>
<script>
export default {
    data() {
      return {
        mainProps: {  width: 300, height: 300, class: 'm1' }
      }
    },
    props:["url","alt","postId"],
    methods:{
        openPost(){
            this.$router.push("/posts/"+this.postId)
        }
    }
}
</script>
<style scoped>
.post{
    margin: 10px;
}
</style>
