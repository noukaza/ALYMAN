<template>
    <b-container class="clearfix" style="padding: 10px 0px 10px 0px">
      <b-row>
        <b-col cols="2">
          <b-img class="comment" v-bind:src="this.$axios.defaults.baseURL + $auth.user.profileImage" rounded="circle" alt="Circle image"></b-img>
        </b-col>
       <!-- <input type="text" class="saisir" v-model="comment" placeholder="Votre commentaire ...">-->
        <b-col cols="8" >
       <b-form-input v-model="comment" placeholder="Enter your comment" v-on:keyup.enter="submit"></b-form-input>
       </b-col>
       <b-col cols="2">
         <b-button pill variant="primary" v-on:click='like'>like</b-button>
       </b-col>

      </b-row>
    </b-container>
</template>
<style>
  .comment{
    blank: false;
    blankColor: '#777';
    width: 50px;
    height: 50px;
    padding: 10px 0px 10px 0px;
  }
  .saisir{
    display: inline-block;
    padding:  15px 25px;
    border-radius: 30px;
    width: 50vh;
  }
</style>

<script>
export default {
  name: "CommentSaisie.vue",
  props: ['images', 'username',"imageId", 'comments'],
  methods:{
    submit(){
      this.$axios.post("/comments",{
        "comment": this.comment,
        "image": this.imageId
      }).then(data =>{
        console.log(data.data)
        let test = {
          comment : this.comment,
          user:{
            lastName : this.$auth.user.lastName,
            firstName :this.$auth.user.firstName,
            profileImage :this.$auth.user.profileImage
          }
        }
        this.comments.push(test)
         //console.log("images",this.images)
          //console.log("comments",this.comments)

        this.comment = ""} ).catch(e=>console.log(e))
    },
    like(){
      this.$axios.post("/likes",{
        "image": this.imageId
      }).then(_ =>this.comment = "" ).catch(e=>console.log(e))
    }
  },
  data: () => {
    return {
      comment: ""
    }
  }
}
</script>

