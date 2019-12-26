<template>
  <div>
    <b-container class="clearfix" style="padding: 10px 0px 10px 0px">
      <b-row>
        <b-col cols="1">
          <b-img class="comment" v-bind:src="images" rounded="circle" alt="Circle image"></b-img>
        </b-col>
        <input type="text" class="saisir" v-model="comment" placeholder="Votre commentaire ...">
      </b-row>
    </b-container>
  </div>
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
      props: ['images', 'username'],
      data: () => {
        return {
          comment: ""
        }
      }
    }
</script>

