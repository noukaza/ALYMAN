<template>
<ImagesProfile :images="image">
</ImagesProfile>
</template>

<script>
  import ImagesProfile from "../components/profile/ImagesProfile"
  export default {
    components: {
      ImagesProfile,
    },
    data: function () {
      return {
        image:[
          "Pictures/image1.jpg",
          "Pictures/image1.jpg",
          "Pictures/image1.jpg",
          "Pictures/image1.jpg",
          "Pictures/image1.jpg",
          "Pictures/image1.jpg",
        ],
        username: "Litissia",
        description: "Ceci est un commentaire"
      }
    }
  }
</script>
