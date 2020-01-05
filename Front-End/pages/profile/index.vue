<template>
  <div>
    <ProfileInfo :user="$auth.user"></ProfileInfo>
    <postsprofil :posts="posts"></postsprofil>
    <UploadBtn></UploadBtn>
  </div>
</template>


<script>
import ProfileInfo from '~/components/ProfileInfo.vue'
import postsprofil from '~/components/profile/postsProfile'
import UploadBtn from '~/components/UploadBtn.vue'

export default {
  middleware: "auth",
  data: function () {
    return {
      posts:[]
    }
  },
  components: {
    ProfileInfo,
    UploadBtn,
    postsprofil
  },
   created: async function () {
    let posts = await this.$axios.get(`/users/${this.$auth.user._id}/images`)
      .catch(e => this.$router.push("/"));
    this.posts = posts.data.data
  },
}
</script>