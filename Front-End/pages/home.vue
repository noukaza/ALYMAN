<template>
  <div>
    <Carousel :images="image"></Carousel>
  </div>
</template>
<script>
import Carousel from '~/components/Carousel.vue'

export default {
    middleware : "auth",

  components:{
     Carousel
  },
  data:function(){
    return {
      image:[
        "Pictures/fond.jpg",
        "Pictures/fond.jpg"
      ]
    }
  }
}
</script>