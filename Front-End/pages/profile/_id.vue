<template>
  <div> 
    <ProfileInfo :iduser="$route.params.id"></ProfileInfo>
    <postsprofil></postsprofil>
  </div>
</template>


<script>
import ProfileInfo from '~/components/ProfileInfo.vue'
import postsprofil from '~/components/profile/postsProfile'

import axios from "@nuxtjs/axios";
export default {
  // middleware : "auth",
  mounted: () => {
  },
  components: {
    postsprofil,
    ProfileInfo
  }
}
</script>