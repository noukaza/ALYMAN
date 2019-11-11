<template>
  <div>
<b-container>
  <b-row>
    <b-col col lg="2">
        <b-img  v-bind="mainProps" src="https://picsum.photos/id/1005/5760/3840" rounded="circle" alt="Circle image"></b-img>
      </b-col>
    <b-col cols="12" md="auto">user</b-col>
    <b-col col lg="1">modifier</b-col>
  </b-row>
  <b-row>
    <b-col col lg="2"></b-col>
    <b-col cols="12" md="auto">Commente</b-col>
    <b-col col lg="1"><v-icon>{{ svgPath }}</v-icon></b-col>
    
    
  </b-row>
</b-container>
  </div>
</template>

<script>
    export default {
         

        components:{
            mdbIcon
        },
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
