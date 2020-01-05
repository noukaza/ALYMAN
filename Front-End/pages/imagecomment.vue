<template>
  <b-row class="justify-content-md-center m-5">
    <b-col class="m-5" cols="10" md="7" >
 <Post>
 </Post>
    </b-col>
  </b-row>
</template>

<script>
  import Post from "../components/publication/post";
  export default {
      middleware : "auth",

    components: {
      Post,
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
