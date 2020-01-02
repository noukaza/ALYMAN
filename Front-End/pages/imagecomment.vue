<template>
  <b-img v-bind:src="images" rounded="circle" alt="Circle image"></b-img>
</template>

<script>
  import CommentImage from "../components/profile/CommentImage";
  export default {
    components: {
      CommentImage,
    },
    props:['images'],

    data: function () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
