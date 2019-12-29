<template>
  <Comment :images="image" :username="username" :descriptions="description"></Comment>
</template>

<script>
  import Comment from "../components/publication/Comment";
  import CommentSaisie from "../components/publication/CommentSaisie";
  export default {
    components: {
      CommentSaisie,
      Comment
    },
    data: function () {
      return {
        image: "Pictures/image1.jpg",
        username: "Litissia",
        description: "Ceci est un commentaire"
      }
    }
  }
</script>
