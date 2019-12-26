<template>
  <div>
        <ProfileInfo :user="$auth.user"></ProfileInfo>

  </div>
 
</template>


<script>
import ProfileInfo from '~/components/ProfileInfo.vue'

export default {
  middleware : "auth",
  components:{
     ProfileInfo
  },
}
</script>