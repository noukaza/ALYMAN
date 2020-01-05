<template>


  <div class="container">
    <div class="row profile">
      <div v-for="tab in tabs" class="col-md-3">
        <div class="profile-sidebar">
          <!-- SIDEBAR USERPIC -->
          <div class="profile-userpic">
            <b-img rounded="circle" alt="Circle image" :src="$axios.defaults.baseURL +tab.profileImage"
              style="width : 70px ; height : 70px;">
            </b-img>
          </div>
          <!-- END SIDEBAR USERPIC -->
          <!-- SIDEBAR USER TITLE -->
          <div class="profile-usertitle">
            <div class="profile-usertitle-name">
              {{tab.firstName}} {{tab.lastName}}
            </div>
          </div>
          <!-- END SIDEBAR USER TITLE -->
          <!-- SIDEBAR BUTTONS -->
          <b-row>
            <b-col>
              <button type="button" class="btn btn-success btn-sm" v-on:click="follow(tab._id)">Follow</button>
            </b-col>
            <b-col>
              <button type="button" class="btn btn-danger btn-sm" v-on:click="unFollow(tab._id)">Unfllow</button>
              <!--	<button type="button" class="btn btn-danger btn-sm">Message</button>-->
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
      middleware : "auth",

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
        })
      },
      unFollow(id) {
        this.$axios.delete("/followers/" + id).then(_ => {
        })
      },
    },
    created: function () {
      this.$axios.get("/q/users/" + this.$route.params.id).then(data => {
        this.tabs = data.data.data

      }).catch(_ => this.$router.push("/"))
    },

  }

</script>

<style scoped>
  body {
    background: #F1F3FA;
  }

  /* Profile container */
  .profile {
    margin: 20px 0;
  }

  /* Profile sidebar */
  .profile-sidebar {
    background: #fff;
    border: 1px solid gray;
    padding: 30px
  }

  .profile-userpic img {
    float: none;
    margin: 0 auto;
    width: 50%;
    height: 50%;
    -webkit-border-radius: 50% !important;
    -moz-border-radius: 50% !important;
    border-radius: 50% !important;
  }

  .profile-usertitle {
    text-align: center;
    margin-top: 20px;
  }

  .profile-usertitle-name {
    color: #5a7391;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 7px;
  }

  .profile-usertitle-job {
    text-transform: uppercase;
    color: #5b9bd1;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .profile-userbuttons {
    text-align: center;
    margin-top: 10px;
  }

  .profile-userbuttons .btn {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    padding: 6px 15px;
    margin-right: 5px;
  }

  .profile-userbuttons .btn:last-child {
    margin-right: 0px;
  }

  .profile-usermenu {
    margin-top: 30px;
  }

  .profile-usermenu ul li {
    border-bottom: 1px solid #f0f4f7;
  }

  .profile-usermenu ul li:last-child {
    border-bottom: none;
  }

  .profile-usermenu ul li a {
    color: #93a3b5;
    font-size: 14px;
    font-weight: 400;
  }

  .profile-usermenu ul li a i {
    margin-right: 8px;
    font-size: 14px;
  }

  .profile-usermenu ul li a:hover {
    background-color: #fafcfd;
    color: #5b9bd1;
  }

  .profile-usermenu ul li.active {
    border-bottom: none;
  }

  .profile-usermenu ul li.active a {
    color: #5b9bd1;
    background-color: #f6f9fb;
    border-left: 2px solid #5b9bd1;
    margin-left: -2px;
  }

  /* Profile Content */
  .profile-content {
    padding: 20px;
    background: #fff;
    min-height: 460px;
  }

</style>
