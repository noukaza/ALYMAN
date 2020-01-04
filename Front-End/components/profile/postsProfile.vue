<template>
  <b-container class="p-3 bg-dark text-center">
    <PostProfile :url="$axios.defaults.baseURL + post.image" postId="mqlksdmlqksd" v-for="post in posts"
      v-bind:key="post"></PostProfile>
  </b-container>

</template>
<script>
import PostProfile from "./PostProfile";
export default {
  data: function () {
    return {
      posts:[]
    }
  },
  components: {
    PostProfile
  },
  created: async function () {

    let posts = await this.$axios.get(`/users/${this.$route.params.id}/images`)
      .catch(e => this.$router.push("/"));
    console.log(posts.data)
    this.posts = posts.data.data
  },
}
</script>