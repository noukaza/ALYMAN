<template>
  <div v-show="show">
    <b-link :to="'/profile/'+comment.user._id" style="color:black;">
      <vs-list-item :title=" comment.user.lastName +' '+  comment.user.firstName" :subtitle="comment.comment">
        <template slot= "avatar">
          <vs-avatar :src=" this.$axios.defaults.baseURL + comment.user.profileImage"/>
        </template>
       <vs-button color="dark"  v-if="userID == $auth.user._id" type="flat" v-on:click="deleteComment">X</vs-button>
      </vs-list-item>
    </b-link>
  </div>
</template>

<script>
  export default {

    props: ['image', 'firstName', 'lastName', 'descriptions', 'userID', 'commentID', "comment"],

    data() {

      return {
        show: true,
        modifier: true,
        mainProps: {
          blank: false,
          blankColor: '#777',
          width: 50,
          height: 50,
          class: 'align-middle'
        },
        nanoProps: {
          blank: false,
          blankColor: '#777',
          width: 50,
          height: 50,
          class: 'align-middle'
        }
      }
    },

    methods: {
      deleteComment() {
        console.log('hi')
        this.$axios.delete(`/comments/${this.comment._id}`)
          .then(e => {
            this.show = false
          })

      }
    }
  }

</script>

<style>
  .img-pofil {
    margin: 10px;
  }

  .comment {
    blank: false;
    blankColor: '#777';
    width: 40px;
    height: 40px;
    padding: 10px 0px 10px 0px;
  }

</style>
