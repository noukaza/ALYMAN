<template>
</template>
<script>
  export default {
    middleware: "auth",
    created: async function () {
      this.$router.push("/profile/" + this.$auth.user._id)
    }
  }
</script>
