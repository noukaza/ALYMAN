<template>
    <posts></posts>
</template>
<script>
import posts from '~/components/publication/posts'
  export default {
      middleware : "auth",

    components:{
        posts
    }
  }
</script>