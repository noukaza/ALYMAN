<template>
  <vs-card actionable class="cardx col-3 m-4">
    <div slot="media">
      <img class="post" v-bind="mainProps" :src="url" :alt="alt">
    </div>
    <div>
      <span>{{image.description}}</span>
    </div>
    <div slot="footer">
      <vs-row vs-justify="flex-end">
        <vs-button class="m-1" color="primary" type="gradient" v-on:click='like' icon="thumb_up"></vs-button>
        <vs-button class="m-1" color="danger" type="gradient" v-on:click='dislike' icon="thumb_down"></vs-button>
        <!-- <vs-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)"  icon="edit" type="gradient"  class="m-1" v-if="image.user === $auth.user._id" v-on:click='editImage'></vs-button> -->
        <vs-button color="dark" color-text="rgb(50,50,50)" icon="delete_forever" type="gradient"  class="m-1" v-if="image.user === $auth.user._id" v-on:click='deleteImage'></vs-button>
  
      </vs-row>
    </div>
  </vs-card>
</template>
<script>
  export default {
    data() {
      return {
        mainProps: {
          width: 300,
          height: 300,
          class: 'm1'
        }
      }
    },
    props: ["url", "alt", "postId","image"],
    methods: {
      openPost() {
        this.$router.push("/posts/" + this.postId)
      },
       editImage(){
        
      },
      deleteImage(){
        this.$axios.delete("/images/"+this.image._id).then(data => {
          this.show = false;
          this.$vs.notify({
            title: ':D',
            text: 'success',
            color: 'success',
            icon: 'favorite'
          })
        }).catch(e => {
          this.$vs.notify({
            title: ':/',
            text: e.response.data.message,
            color: 'danger',
            icon: 'favorite'
          })
        })
      },
      like() {
        this.$axios.post("/likes", {
          "image": this.image._id
        }).then(_ => {
          this.image.likes++;
          this.$vs.notify({
            title: ':D',
            text: 'Like :D',
            color: 'success',
            icon: 'favorite'
          })
        }).catch(e => {
          this.$vs.notify({
            title: ':/',
            text: e.response.data.message,
            color: 'danger',
            icon: 'favorite'
          })
        })
      },
      dislike() {
        this.$axios.delete("/likes/" + this.image._id).then(_ => {
          this.image.likes--;
          this.$vs.notify({
            title: ':D',
            text: 'Like :D',
            color: 'success',
            icon: 'favorite'
          })
        }).catch(e => {
          this.$vs.notify({
            title: ':/',
            text: e.response.data.message,
            color: 'danger',
            icon: 'favorite'
          })
        })
      }
    }
  }

</script>
<style scoped>
  .post {
    margin: 10px;
    position: relative;
    width: 250px;
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;

  }

</style>
