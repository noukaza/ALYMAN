<template>
  <div class="container mt-5">
    <vs-breadcrumb align="left">Home / Search</vs-breadcrumb>
    <vs-alert class="mt-3" title="Sorry" active="true" color="danger" v-if="tabs.length == 0">
      no users found </vs-alert>
    <b-container class="mt-4 p-3 bg-dark text-center" v-else>
      <vs-row vs-justify="center">
        <div v-for="tab in tabs" class="col-3" v-bind:key="tab">
          <vs-card class="cardx " actionable>

              <div slot="media">
                <img :src="$axios.defaults.baseURL +tab.profileImage" style="width:100%; height: 300px;">
              </div>
            <b-link :to="'/profile/'+tab._id">

              <div>
                <span>
                  <h5>
                    {{tab.firstName}} {{tab.lastName}}
                  </h5>
                </span>
              </div>
            </b-link>

            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button type="gradient" color="primary" icon="person_add" v-on:click="follow(tab._id)"></vs-button>
                <vs-button color="danger" icon="person_add_disabled" v-on:click="unFollow(tab._id)"></vs-button>
              </vs-row>
            </div>
          </vs-card>
        </div>

      </vs-row>
    </b-container>
  </div>
</template>

<style>
  .cardx {
    margin: 15px;
  }

</style>



<script>
  export default {
    middleware: "auth",

    props: ['user', 'iduser', "nbrpost"],
    data() {
      return {
        tabs: [],

      }
    },
    methods: {
      follow(id) {
        this.$axios.post("/followers", {
          following: id
        }).then(data => {
          this.$vs.notify({
            title: ':D',
            text: data.data.message + ' :D',
            color: 'success',
            icon: 'favorite'
          })
        }).catch(e => {
          this.$vs.notify({
            title: ':/',
            text: e.response.data.message + ' :/',
            color: 'danger',
            icon: 'favorite'
          })
        })
      },
      unFollow(id) {
        this.$axios.delete("/followers/" + id).then(data => {
          this.$vs.notify({
            title: ':D',
            text: data.data.message + ' :D',
            color: 'success',
            icon: 'favorite'
          })
        }).catch(e => {
          this.$vs.notify({
            title: ':/',
            text: e.response.data.message + ' :/',
            color: 'danger',
            icon: 'favorite'
          })
        })
      },
    },
    created: function () {
      if (this.$route.params.id) {
        this.$axios.get("/q/users/" + this.$route.params.id).then(data => {
          this.tabs = data.data.data

        }).catch(_ => this.$router.push("/"))

      } else {
        this.$router.push("/")
      }
    },

  }

</script>

<style scoped>
  body {
    background: #F1F3FA;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
  }

  .title {
    color: grey;
    font-size: 18px;
  }

  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }

  button:hover,
  a:hover {
    opacity: 0.7;
  }

</style>
