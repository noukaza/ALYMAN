<template>
      <b-img thumbnail class="post" v-bind="mainProps" :src="url" :alt="alt"></b-img>
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
    position: relative;
    width:  250px;
    height: 250px;
    background-repeat:   no-repeat;
    background-size:     cover;

}
</style>
