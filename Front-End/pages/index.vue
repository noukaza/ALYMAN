
<template>
  
  <login v-if="!$auth.loggedIn"></login>
  

</template>

<script>

// import axios from "@nuxtjs/axios";
import login from "~/components/login";
export default {
  components:{login},

}

</script>

