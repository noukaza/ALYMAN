<template>
  <div>
    <ProfileInfo :nbrpost="posts.length" :iduser="$route.params.id"></ProfileInfo>
    <postsprofil :posts="posts"></postsprofil>
    <UploadBtn></UploadBtn>
    <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">

      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
        <vs-button type="gradient" v-on:click='showMore'>show more </vs-button>

      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
      </vs-col>
    </vs-row>
  </div>
</template>


<script>
  import ProfileInfo from '~/components/ProfileInfo.vue'
  import postsprofil from '~/components/profile/postsProfile'
  import UploadBtn from '~/components/UploadBtn.vue'


  import axios from "@nuxtjs/axios";
  export default {
    middleware: "auth",
    data: function () {
      return {
        posts: [],
        prePage: 5,
        page: 1
      }
    },
    components: {
      postsprofil,
      ProfileInfo,
      UploadBtn

    },
    created: async function () {
      let posts = await this.$axios.get(
          `/users/${this.$route.params.id}/images?page=${this.page}&prePage=${this.prePage}`)
        .catch(e => this.$router.push("/"));
      this.posts = posts.data.data.docs
      this.page++;
    },
    methods: {
      async showMore() {
        let allImages = await this.$axios.get(`/images?page=${this.page}&prePage=${this.prePage}`)
        this.posts = this.posts.concat(allImages.data.data.docs)
        this.page++;
      }
    },
  }

</script>
