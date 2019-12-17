<template>
  <div class="container">
   
        <b-row>
          <b-col>
              <b-img v-bind="mainProps" rounded="circle" src="~/assets/Logo/logo.png" style = "width : 100% ; heitgh : 100%"></b-img>
          </b-col>
          <b-col cols="8">
            <span>{{this.dataUser[0].lastName + " " +this.dataUser[0].firstName}}</span>
          </b-col>
          <b-col>
            <a v-on:click="onCreate">
              <font-awesome-icon icon="trash-alt"/>
            </a>
          </b-col>
        </b-row>
      
  </div>
</template>

<script>

  export default {
    data() {
      return {

        dataUser : [{
          lastName : "messaoui",
          firstName : "mohand"
        }],
      }
    },
   // mounted () {
     // this.$axios.get('http://localhost:3000/users/')
     // .then(response => (console.log(response.data)))
  //},
    methods: {
      onSubmit(evt) {
        },
        onCreate(evt) {
        evt.preventDefault()
        alert("coucou")
        
    }
      }
      
  }
</script>