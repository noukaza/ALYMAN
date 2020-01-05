
<template>
  <div>
    <login v-if="!$auth.loggedIn"></login>
     <posts v-else></posts>
  </div>
</template>

<script>

// import axios from "@nuxtjs/axios";
import login from "~/components/login";
import posts from "~/components/publication/posts";
export default {
  components: {
    login,
    posts
  },

}

</script>

