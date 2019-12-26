<template>
  <div class="container">
     
      <li v-for="(dataFollower,index) in dataFollowers">
        <b-row >
          <b-col v-on:click="redirect(index)">
              <b-img rounded="circle" alt="Circle image" v-bind:src= "dataFollower.images" style = "width : 100% ; heitgh : 100%"></b-img>
          </b-col>
          <b-col cols="8"  v-on:click="redirect(index)">
             <span style= "font-size: 16px;">{{dataFollower.lastName + " " +dataFollower.firstName}}</span>
          </b-col>
          <b-col>
            <a v-on:click="onDelete(index)">
              <font-awesome-icon icon="trash-alt"/>
            </a>
          </b-col>
        </b-row>
        </li>
       
  </div>
</template>

<script>
export default {
  props: ['type'],
  data() {
    return {

      dataFollowers: [{
          id: "5e03a64b98f0cc23e95620b9",
          lastName: "messaoui",
          firstName: "mohand",
          images: "https://picsum.photos/125/125/?image=58"
        },
        {
          id: "5e03a64b98f0cc23e95620b9",
          lastName: "messaoui",
          firstName: "mohand",
          images: "https://picsum.photos/125/125/?image=58"
        },
        {
          id: "5e03a64b98f0cc23e95620b9",
          lastName: "messaoui",
          firstName: "mohand",
          images: "https://picsum.photos/125/125/?image=58"
        }
      ],
    }
  },
  methods: {
    onSubmit(evt) {},
    onDelete(index) {
      alert(this.type)
      this.$delete(this.dataFollowers, index)
    },
    redirect(index) {
      this.$router.push("/profile/" + this.dataFollowers[index].id)
    }
  }
}
</script>