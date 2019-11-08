<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background=""
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="~assets/Pictures/fond.jpg"
            alt="image slot"
            center ="true"
          ></img>
            <div class="carousel-caption" style="top:40%">
                                <h1 class="display-2" style="font-family: Palatino">Rejoinez vos amis sur LYMAN</h1>
            </div>               
        </template>
       </b-carousel-slide>
    
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="~assets/Pictures/fond.jpg"
            alt="image slot"
          >
               <div class="carousel-caption" style="top:40%">
                                <h1 class="display-2">Atquchem</h1>
            </div>    
        </template>
       </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>
