<template>
  <div>
      <li v-for="(comment,index) in comments" v-bind:key="(comment,index)" style="list-style: none; padding-bottom: 10px; ">
        <Comment
          :image="image.user.profileImage"
          :lastName="image.user.lastName" :firstName=" image.user.firstName" :descriptions="comment.descriptions">
        </Comment>
    </li>
  </div>
</template>

 <script>
 import Comment from '~/components/publication/Comment';
 export default{
    props:["imageId"],
    created:async function(){
        let comment = await this.$axios.get('/')
    }
 }
 </script>