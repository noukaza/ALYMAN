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
  mounted:()=>{
     // console.log($route )
     //this.$axios.get("/users/5e03642d7a37c61cba3dde7b" ).then(e => console.log("hi")).catch(e => console.log("error"));
  },
  components:{
     ProfileInfo
  }
}
</script>