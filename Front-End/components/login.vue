
<template>
  
  <div class="container">
    <div class="Row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
    <img style="width: 500px" src="~/assets/Logo/logo.png">
      </div>
      <div class="alert alert-danger" role="alert"  v-if="show" >
        {{messageError}}  
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

export default {


  data() {
    return {
      email: "",
      password: "",
      token: "",
      show: false,
      messageError: ""
    }
  },
  methods: {
    login(e) {
      e.preventDefault();
      try {
        this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.$router.push("/profile")
      }catch(e){
          console.log("hi")
      }


    }
  },

}

</script>

