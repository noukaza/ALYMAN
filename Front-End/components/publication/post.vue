<template>

  <!--<b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
    class="mb-5">-->
  <b-card class="mb-5">
    <h4> {{image.user.firstName}} {{image.user.lastName}} </h4>
    <b-img style="width : 100%"  v-bind:src="this.$axios.defaults.baseURL + image.image"></b-img>
    <b-card-text>
      {{image.description}}
    </b-card-text>
    <li v-for="(comment,index) in comments" v-bind:key="(comment,index)" style="list-style: none; padding-bottom: 10px; ">
    <Comment
      :image="image.user.profileImage" :userID ="image.user._id"
      :lastName="image.user.lastName" :firstName=" image.user.firstName" :descriptions="comment.comment" :commentID="comment._id">
    </Comment>
    </li>
    <CommentSaisie :imageId="image._id"></CommentSaisie>
  </b-card>

</template>
<script>
  import Comment from '~/components/publication/Comment';
  import CommentSaisie from '~/components/publication/CommentSaisie';
  
  export default {
    props: ['image'],
    components: {
      Comment,
      CommentSaisie
    },
    created: async function () {
      let comments = await this.$axios.get(`/comments/image/${this.image._id}`)
      this.comments = comments.data.data
    },
    data () {
      return {
        comments:[
              
            ],
      }
    }
    
    
  }

</script>
