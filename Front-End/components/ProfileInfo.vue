<template style="background-color: lightgoldenrodyellow;">
  <b-container class="bv-example-row mt-5">
    <b-row class="justify-content-md-center">
      <b-col col lg="2">
                    <b-img rounded="circle" alt="Circle image" v-bind:src= "'http://b601fad9.ngrok.io/'+$auth.user.profileImage" style = "width : 100% ; heitgh : 100%"></b-img>

      </b-col>
      <b-col>
        <b-row>
          <b-col sm="8">
            <h2>{{$auth.user.firstName}} {{$auth.user.lastName}}</h2>
          </b-col>
          <b-col sm="4">
            <b-button v-b-modal.modal-1>Edit profile</b-button>
            <div class="container">
              <b-modal id="modal-1" title="EditProfil">
                <EditProfil></EditProfil>
              </b-modal>
            </div>
          </b-col>
        </b-row>
        <p>Azul fellawen nekk dachikour nwen marra merci bisous au revoir, m3adnouss tikerkass tidak nni akk ouhh dizzan yawdii mais wichqa</p>
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
            <Label style="font-weight:bold; display:inline; margin-right:120px">Followers</Label>
          </b-col>
          <b-col>
            <Label style="font-weight:bold; display:inline;">Following</Label>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr class="my-5" />
  </b-container>
</template>

<script>
import EditProfil from '~/components/EditProfil.vue'

export default {
  components: {
    EditProfil
  },
  
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 100,
        height: 100,
        class: 'm1'
      }
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
         this.$axios.put(`http://localhost:3000/users`, data,configHeader)
            .then(response => {
              console.log(response)
            })
            .catch(e => {
                
          })
      },
}
}
</script>