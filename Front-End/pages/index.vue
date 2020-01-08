
<template>
  <div>
    <login v-if="!$auth.loggedIn"></login>
    <posts v-else></posts>
    <UploadBtn  v-if="$auth.loggedIn"></UploadBtn>
  </div>
</template>

<script>

// import axios from "@nuxtjs/axios";
import login from "~/components/login";
import posts from "~/components/publication/posts";
import UploadBtn from '~/components/UploadBtn.vue'

export default {
  components: {
    login,
    posts,
    UploadBtn
  },

}

</script>

