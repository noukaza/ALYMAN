<template>
  <div> 
    <ProfileInfo :nbrpost="posts.length" :iduser="$route.params.id"></ProfileInfo>
    <postsprofil :posts="posts"></postsprofil>
  </div>
</template>


<script>
import ProfileInfo from '~/components/ProfileInfo.vue'
import postsprofil from '~/components/profile/postsProfile'

import axios from "@nuxtjs/axios";
export default {
  middleware : "auth",
  data: function () {
    return {
      posts:[]
    }
  },
  components: {
    postsprofil,
    ProfileInfo
  },
  created: async function () {
    let posts = await this.$axios.get(`/users/${this.$route.params.id}/images`)
      .catch(e => this.$router.push("/"));
    this.posts = posts.data.data
  },
}
</script>