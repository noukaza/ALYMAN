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
       <vs-button @click="popupActivo2=true"  color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" class="m-1"  v-if="image.user === $auth.user._id" icon="edit" type="filled"></vs-button>
                <vs-popup classContent="popup-example" title="Edit description" :active.sync="popupActivo2">
                  <vs-input class="inputx w-100"  size="large"  placeholder="Placeholder" v-model="value1" />

                <vs-button color="primary"  class="mt-3" type="filled" v-on:click='editImage'>save</vs-button>


                </vs-popup>
                
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
        },
        popupActivo2: false,
        value1: this.image.description,
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
       editImage() {
         this.$axios.put('/images/'+ this.image._id,{
           description: this.value1
         }).then(_=>{
           this.image.description = this.value1
           this.popupActivo2 = false
           this.$vs.notify({
            title: ':D',
            text: 'success',
            color: 'success',
            icon: 'favorite'
          })
         }).catch(err=>{
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
