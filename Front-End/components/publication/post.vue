<template>

  <!--<b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
    class="mb-5">-->
  <b-card class="mb-5">
    <b-row class="justify-content-md-center">
      <b-col col lg="2">
        <b-img rounded="circle" alt="Circle image" :src="this.$axios.defaults.baseURL + image.user.profileImage "
          style="width : 70px ; height : 70px; margin-left : 30px"></b-img>
      </b-col>
      <b-col style="margin-top:10px">
        <h4> {{image.user.firstName}} {{image.user.lastName}} </h4>
      </b-col>
    </b-row>

    <b-img style="width : 100%" v-bind:src="this.$axios.defaults.baseURL + image.image"></b-img>
    <b-card-text>
      {{image.description}} | Like :  {{image.likes}} 
    </b-card-text>
    <li v-for="(comment,index) in comments" v-bind:key="(comment,index)"
      style="list-style: none; padding-bottom: 10px; ">
      <Comment :comment="comment">
      </Comment>
    </li>
    <CommentSaisie :imageId="image._id" :image="image" :comments="comments"></CommentSaisie>
  </b-card>

</template>
<script>
  import Comment from '~/components/publication/Comment';
  import CommentSaisie from '~/components/publication/CommentSaisie';

  export default {
    props: ['image', 'images'],
    components: {
      Comment,
      CommentSaisie
    },
    created: async function () {
      let comments = await this.$axios.get(`/comments/image/${this.image._id}`)

      this.comments = comments.data.data
    },
    data() {
      return {
        comments: [

        ],
      }
    }


  }

</script>
