<template>
  <div class="container">
     <b-modal id="modal-1" title="follower">
      <li v-for="(dataFollower,index) in dataFollowers">
        <b-row>
          <b-col>
              <b-img rounded="circle" alt="Circle image" v-bind:src= "dataFollower.images" style = "width : 100% ; heitgh : 100%"></b-img>
          </b-col>
          <b-col cols="8">
            <span style= "font-size: 16px;">{{dataFollower.lastName + " " +dataFollower.firstName}}</span>
          </b-col>
          <b-col>
            <a v-on:click="onDelete(index)">
              <font-awesome-icon icon="trash-alt"/>
            </a>
          </b-col>
        </b-row>
        </li>
       </b-modal>
  </div>
</template>

<script>

  export default {
    props:['type'],
    data() {
      return {

        dataFollowers : [{
          lastName : "messaoui",
          firstName : "mohand",
          images : "https://picsum.photos/125/125/?image=58"
        },
        {
          lastName : "messaoui",
          firstName : "mohand",
          images : "https://picsum.photos/125/125/?image=58"
        },
        {
          lastName : "messaoui",
          firstName : "mohand",
          images : "https://picsum.photos/125/125/?image=58"
        }
        ],
      }
    },
   // mounted () {
     // this.$axios.get('http://localhost:3000/users/')
     // .then(response => (console.log(response.data)))
  //},
    methods: {
      onSubmit(evt) {
        },
    onDelete(index) {
       this.$delete(this.dataFollowers,index)
        alert(this.dataFollowers[index].lastName)
        
        
    }
      }
      
  }
</script>