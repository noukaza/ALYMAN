<template>
<div>
<b-container v-show="istrue">
  <b-row>
    <b-col cols="1">
        <b-img  v-bind="mainProps" src="https://picsum.photos/id/1005/5760/3840" rounded="circle" alt="Circle image"></b-img> <!-- // TODO : change url img  -->
    </b-col>
    <b-col ><b>username</b></b-col>
  </b-row>
  <b-row>
    <b-col cols="1"></b-col>
   <b-col cols="2" md="auto">Commentedhbhdbhbdhbdhbcommenter</b-col> <!-- // TODO : remove Commentedhbhdbhbdhbdhbcommenter -->
    <b-col cols="1"><font-awesome-icon icon="pencil-alt"/></b-col> 
    <b-col cols="1"><font-awesome-icon icon="trash-alt" v-on:click="istrue = !istrue"/></b-col>
  </b-row>
</b-container>
</div>
</template>

<script>
    export default {
        data() {
    return {
       mainProps: { blank: false, 
       blankColor: '#777', 
       width: 30, 
       height: 30, 
       class: 'align-middle' }, 
      //TODO :  we don't use date to set css pram 
       istrue:true // TODO : isTrue !! for what  !! 

     
       
    }
}}
    
</script>
