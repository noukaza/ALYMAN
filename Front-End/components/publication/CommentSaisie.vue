<template>
  <b-container class="clearfix " style="padding: 10px 0px 0px 0px">
    <b-row>
      <b-col cols="1">
          <vs-avatar size="50px" v-bind:src="this.$axios.defaults.baseURL + $auth.user.profileImage" />
      </b-col>
      <b-col cols="11">
         <vs-textarea v-model="comment" placeholder="Enter your comment" v-on:keyup.enter="submit"/>
      </b-col>
    </b-row>
  </b-container>
</template>
<style>

  .comment {
    blank: false;
    blankColor: '#777';
    width: 50px;
    height: 50px;
    padding: 10px 0px 10px 0px;
  }

  .saisir {
    display: inline-block;
    padding: 15px 25px;
    border-radius: 30px;
    width: 50vh;
  }

</style>

<script>
  export default {
    name: "CommentSaisie.vue",
    props: ['images', 'username', "imageId", 'comments'],
    methods: {
      submit() {
        this.$axios.post("/comments", {
          "comment": this.comment,
          "image": this.imageId
        }).then(data => {
          let comm = {
            _id: data.data._id,
            comment: this.comment,
            user: {
              _id : this.$auth.user._id,
              lastName: this.$auth.user.lastName,
              firstName: this.$auth.user.firstName,
              profileImage: this.$auth.user.profileImage
            }
          }
          this.comments.push(comm)
          this.comment = ""
        }).catch(e => console.log(e))
      },
      like() {
        this.$axios.post("/likes", {
          "image": this.imageId
        }).then(_ => this.comment = "").catch(e => console.log(e))
      }
    },
    data: () => {
      return {
        comment: ""
      }
    }
  }

</script>
