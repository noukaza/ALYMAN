<template>
<div>
<b-container v-if="show" class="clearfix" style="padding: 10px 0px 10px 0px">
  <b-row>
    <b-col cols="1">
        <b-img class="comment" v-bind:src="images" rounded="circle" alt="Circle image"></b-img>
    </b-col>
    <b-col ><b>{{this.username}}</b></b-col>
  </b-row>
  <b-row>
    <b-col cols="1"></b-col>
     <b-col v-if="modifier" cols="2" md="auto">{{ this.descriptions }}</b-col>
    <input  v-else type="text" v-model="editText">
    <b-col cols="1"><font-awesome-icon icon="pencil-alt" v-on:click="modifier=false"/></b-col>
    <b-col cols="1"><font-awesome-icon icon="trash-alt" v-on:click="show = false"/></b-col>
  </b-row>
</b-container>
</div>
</template>
<style>
  .comment{
    blank: false;
    blankColor: '#777';
    width: 40px;
    height: 40px;
    padding: 10px 0px 10px 0px;
  }
</style>
<script>

    export default {

      props:['images','username','descriptions'],

        data() {

    return {
       show:true,
      modifier:true



    }
}}

</script>
