<template>
  <div> 
    <ProfileInfo :iduser="$route.params.id"></ProfileInfo>
  </div>
</template>


<script>
import ProfileInfo from '~/components/ProfileInfo.vue'
import axios from "@nuxtjs/axios";
export default {
  // middleware : "auth",
  mounted: () => {
  },
  components: {
    ProfileInfo
  }
}
</script>