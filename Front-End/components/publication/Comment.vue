<template>
  <div v-show="show">
    <b-container v-if="show" class="clearfix" style="padding: 10px 0px 10px 0px">
      <div class="media">
        <b-img class="img-pofil" v-bind="mainProps" :src=" this.$axios.defaults.baseURL + comment.user.profileImage" rounded="circle" alt="Circle image"></b-img>
        <div class="media-body">
          <h5 class="mt-0">{{ comment.user.lastName +" "+  comment.user.firstName}} </h5>
          {{ comment.comment }}
        </div>
      <b-btn  class="btn btn-light" v-if="userID == $auth.user._id" v-on:click="deleteComment">
        X
      </b-btn>

      </div>
    </b-container>
  </div>
</template>

<script>

export default {

  props: ['image', 'firstName', 'lastName', 'descriptions', 'userID','commentID',"comment"],

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
deleteComment(){
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
