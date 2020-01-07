<template>
  <b-card class="mb-6 mb-4">
    <b-row class="">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card actionable class="cardx">
          <div slot="header">
            <b-link style="color:black;" :to="'/profile/'+ image.user._id">
              <h3>
                <vs-avatar size="50px" v-bind:src="this.$axios.defaults.baseURL + image.user.profileImage" />
                {{image.user.firstName}} {{image.user.lastName}}
              </h3>
            </b-link>
          </div>
          <div slot="media">
            <img :src="this.$axios.defaults.baseURL + image.image ">
          </div>
          <div>
            <h5>
              <b-badge pill variant="danger">Like : {{image.likes}}</b-badge>
            </h5>
            <span> {{image.description}} </span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button color="primary" type="gradient" v-on:click='like'>like</vs-button>
              <vs-button color="danger" type="gradient" v-on:click='dislike'>dislike</vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </b-row>
    <b-card-text>
    </b-card-text>
    <vs-list>
      <vs-list-header title="Comments" color="danger"></vs-list-header>
      <li v-for="(comment,index) in comments" v-bind:key="(comment,index)"
        style="list-style: none; padding-bottom: 10px; ">
        <Comment :comment="comment" :userID="comment.user._id">
        </Comment>
      </li>

    </vs-list>
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
        comments: [],
      }
    },
    methods: {
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
      ,
      randomIcon() {
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`

        this.$vs.notify({
          title: 'Icon mail',
          text: 'Lorem ipsum dolor sit amet, consectetur',
          color: color,
          icon: 'verified_user'
        })
      }
    }
  }

</script>
