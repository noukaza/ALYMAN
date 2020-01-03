<template>
  <div>
    <ProfileInfo :user="$auth.user"></ProfileInfo>
    <UploadBtn></UploadBtn>
  </div>
</template>


<script>
import ProfileInfo from '~/components/ProfileInfo.vue'
import UploadBtn from '~/components/UploadBtn.vue'

export default {
  middleware: "auth",
  components: {
    ProfileInfo,
    UploadBtn
  },
}
</script>