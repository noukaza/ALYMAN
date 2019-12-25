<template>

  <Comment :images="image" :username="username" :descriptions="description"></Comment>
</template>

<script>
  import Comment from "../components/Comment";
  export default {
    components: {
      Comment
    },
    data: function () {
      return {
        image: "Pictures/liti.jpg",
        username: "Litissia",
        description: "Ceci est un commentaire"
      }
    }
  }
</script>
