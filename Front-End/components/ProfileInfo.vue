<template style="background-color: lightgoldenrodyellow;">
  <b-container class="bv-example-row mt-5">
  {{this.user}}
    <b-row class="justify-content-md-center">
      <b-col col lg="2">
        <b-img rounded="circle" alt="Circle image" :src= "this.urlPicProfil" style = "width : 100% ; heitgh : 100%"></b-img>
      </b-col>
      <b-col>
        <b-row>
          <b-col sm="8">
            <h2>{{ username }}</h2>
          </b-col>
          <b-col sm="4">
            <font-awesome-icon icon="user-edit" v-b-modal.modal-1 style = "width :50% ; height : 50%"/>
            <div class="container">
              <b-modal id="modal-1" title="EditProfil">
                <EditProfil  type = "follower"></EditProfil>
              </b-modal>
            </div>
          </b-col>
        </b-row>
        <p></p>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col lg="2"></b-col>
      <b-col>
        <b-row>
          <b-col>
            <Label style="font-weight:bold; display:inline; margin-right:120px">Posts</Label>
          </b-col>
          <b-col>
             <Label v-b-modal.modal-2 style="font-weight:bold; display:inline; margin-right:120px">Follower</Label>
            <div class="container">
              <b-modal id="modal-2" title="Follower">
                <Follower  type = "follower"></Follower>
              </b-modal>
            </div>
          </b-col>
          <b-col>
            <Label v-b-modal.modal-3 style="font-weight:bold; display:inline; margin-right:120px">Following</Label>
            <div class="container">
              <b-modal id="modal-3" title="Following">
                <Follower></Follower>
              </b-modal>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr class="my-5" />
  </b-container>
</template>

<script>
import EditProfil from '~/components/EditProfil.vue'
import Follower from '~/components/Follower.vue'

export default {
  components: {
    EditProfil,
    Follower
  },
  props: ['user', 'iduser'],
  data() {
    return {
      username: "",
      urlPicProfil : "",
      bio :""
    }
  },
  methods: {
    onSubmit(evt) {
      var configHeader = {
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vaG1vaEBnbWFpbC5jb20iLCJfaWQiOiI1ZGMzMGMxODVlYTVjYjAzMDhjMTY5OGYiLCJpYXQiOjE1NzMyOTcyMTAsImV4cCI6MTU3MzM4MzYxMH0.tfwFHmoxxC6qqlZ2aJTokW2UJq5beMQsRJzxOPubf4s"
        }
      }
      this.$axios.put(`http://localhost:3000/users`, data, configHeader)
        .then(response => {
          console.log(response)
        })
        .catch(e => {

        })
    },
  },
  created: async function (){
    if(this.user){
      this.username = `${this.user.firstName} ${this.user.lastName}`;
      this.urlPicProfil = `http://41584f23.ngrok.io/${this.user.profileImage}`;
      this.bio = this.user.bio;

    }else{
      let userProfile = await this.$axios.get(`/users/${this.iduser}`)
      .catch(e=>this.$router.push("/")) // TODO change url
      this.username = `${userProfile.data.data.firstName} ${userProfile.data.data.lastName}`;
      this.urlPicProfil = `http://41584f23.ngrok.io/${userProfile.data.data.profileImage}`;
      this.bio = userProfile.data.data.bio;
    }

  }
}
</script>