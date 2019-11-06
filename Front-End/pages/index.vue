
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
    <img style="width: 500px" src="~/assets/logo.png">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="email"  class="form-control" v-model="email" placeholder="Email address" required autofocus>
              </div>

              <div class="form-label-group mt-3">
                <input type="password"  v-model="password" class="form-control" placeholder="Password" required>
              </div>
              <hr class="my-4">
              <button class="btn btn-lg btn-primary btn-block text-uppercase" @click="login($event)" >Sign in</button>
            </form>
          </div>
        </div>
        <hr class="my-4">
        {{token}}
      </div>
    </div>
  </div>
</template>

<script>

// import axios from "@nuxtjs/axios";
import BootstrapVue from "bootstrap-vue";
export default {


  data() {
    return {
      email:"",
      password : "",
      token : ""
    }
  },
  methods: {
    login(e){
      e.preventDefault();
      this.$axios.post("http://localhost:3000/users/login",
      {
        email : this.email,
        password :  this.password
      }
      ).then(e => {
        this.token = e.data.token;
        this.email = "",
        this.password =""
      })

    }
  },

}

</script>

