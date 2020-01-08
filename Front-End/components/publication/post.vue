<template>
<div>
  <b-card class="mb-6 mb-4" v-show="show">
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
          <div slot="media" style=" position: relative; height: 400px; width: 100%;">
            <img style=" position: absolute; right: 0; bottom: 0 " :src="this.$axios.defaults.baseURL + image.image ">
          </div>
          <div>
            <h4>
              <i class="material-icons">
                favorite
              </i>
              {{image.likes}}
            </h4>
            <span> {{image.description}} </span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button class="m-1" color="primary" type="gradient" v-on:click='like' icon="thumb_up"></vs-button>
              <vs-button class="m-1" color="danger" type="gradient" v-on:click='dislike' icon="thumb_down"></vs-button>
              <!-- <vs-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)"  icon="edit" type="gradient"  class="m-1" v-if="image.user._id === $auth.user._id" v-on:click='editImage'></vs-button> -->

              <vs-button color="dark" color-text="rgb(50,50,50)" icon="delete_forever" type="gradient"  class="m-1" v-if="image.user._id === $auth.user._id" v-on:click='deleteImage'></vs-button>
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
<vs-divider color="dark" icon="watch_later"></vs-divider>
</div>
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
        show:true
      }
    },
    methods: {
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
      },
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
