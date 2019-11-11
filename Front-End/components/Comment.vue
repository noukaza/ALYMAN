<template>
  <div>
<b-container>
  <b-row>
    <b-col col lg="2">
        <b-img  v-bind="mainProps" src="https://picsum.photos/id/1005/5760/3840" rounded="circle" alt="Circle image"></b-img>
      </b-col>
    <b-col cols="7" md="auto"><b>username</b></b-col>
    <b-col cols ="2"></b-col>
    <b-col cols="2"></b-col> 
  </b-row>
  <b-row>
    <b-col col lg="2"></b-col>
    <b-col cols="7" md="auto">Commentedhbhdbhbdhbdhb</b-col>
    <b-col cols ="2"><font-awesome-icon icon="trash-alt"/></b-col>
    <b-col cols="2"><font-awesome-icon icon="pencil-alt"/></b-col> 
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
       
    }
}
    }
</script>
