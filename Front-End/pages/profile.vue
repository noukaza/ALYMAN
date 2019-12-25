<template>
  <div>
    {{ $auth.user }}
    <ProfileInfo></ProfileInfo>
  </div>
    <!--<b-img
      style="margin-right: 15px; margin-left: 60px; margin-bottom: 10px"
      v-for="img in images"
      v-bind:src="img"
      thumbnail
      fluid
    ></b-img> -->
</template>


<script>
import ProfileInfo from '~/components/ProfileInfo.vue'

export default {
  components:{
     ProfileInfo
  },
  /*data:function(){
    return {
      images: [
        'https://picsum.photos/250/250/?image=54',
        'https://picsum.photos/250/250/?image=54',
        'https://picsum.photos/250/250/?image=54',
        'https://picsum.photos/250/250/?image=54',
        'https://picsum.photos/250/250/?image=54',

        'https://picsum.photos/250/250/?image=54',

        'https://picsum.photos/250/250/?image=54',

        'https://picsum.photos/250/250/?image=54'
      ]
    }
  }*/
}
</script>