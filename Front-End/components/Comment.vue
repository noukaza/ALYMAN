<template>
<div>
<b-container v-if="show" class="clearfix" style="padding: 10px 0px 10px 0px">
  <b-row>
    <b-col cols="1">
        <b-img  v-bind="mainProps" v-bind:src="images" rounded="circle" alt="Circle image"></b-img>
    </b-col>
    <b-col ><b>{{this.username}}</b></b-col>
  </b-row>
  <b-row>
    <b-col cols="1"></b-col>
   <b-col cols="2" md="auto">{{ this.descriptions }}</b-col>
    <b-col cols="1"><font-awesome-icon icon="pencil-alt"/></b-col>
    <b-col cols="1"><font-awesome-icon icon="trash-alt" v-on:click="show = false"/></b-col>
  </b-row>
</b-container>
</div>
</template>

<script>

    export default {

      props:['images','username','descriptions'],

        data() {

    return {

       mainProps: { blank: false,
       blankColor: '#777',
       width: 30,
       height: 30,
       padding:"10px 0px 10px 0px",
       class: 'align-middle'
       },
       show:true



    }
}}

</script>
