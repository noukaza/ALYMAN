<template>
  <div class="container">
    <div class="Block"  v-for = "image in images" v-bind:key="image">
      <div class="Block_img">
        <img
          width="220"
          height="220"
          v-bind:src="image"
          alt="image slot"
        >
      </div>
    </div>
  </div>
</template>
<style>
  .Block {
    display: inline-block;
    width: 226px;
    height: 330px;
    padding: 10px;
  }
</style>
<script>
  import modalImageProfile from "./modalImageProfile";
  export default {
    components: {modalImageProfile},
    props: ['images'],
  }

</script>
