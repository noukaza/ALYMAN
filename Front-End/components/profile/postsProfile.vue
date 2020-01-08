<template>
  <b-container class="p-3 bg-dark text-center" >
    <vs-row vs-justify="center">

    <PostProfile :url="$axios.defaults.baseURL + post.image" :image="post" :postId="post._id" v-for="post in posts"
      v-bind:key="post"></PostProfile> 

  </vs-row>


  </b-container>





</template>
<script>
import PostProfile from "./PostProfile";
export default {
  props:["posts"],
  components: {
    PostProfile
  }
}
</script>