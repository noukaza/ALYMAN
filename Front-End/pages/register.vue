<template>
<div class="container">

  <div class="Col">
      <div class="row justify-content-md-center">
       <div class="Col Center">
             <b-img src="~/assets/Logo/logo.png" style="width :50%; height :auto"></b-img>
       </div>
      </div>
      <b-form-group id="input-group-2" label="Your firstName:" label-for="input-2" class="Row">
        <b-form-input
          id="input-2"
          v-model="form.firstName"
          required
          placeholder="Enter firstName"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your lastName:" label-for="input-2" class="Row">
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          required
          placeholder="Enter lastName"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your bio:" label-for="input-2" class="Row">
        <b-form-input
          id="input-2"
          v-model="form.bio"
          required
          placeholder="Enter bio"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your email:" label-for="input-2" class="Row">
       <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2" class="Row">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary"  v-on:click="onCreate">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    data() {
      return {
        form: {
          firstName:'',
          lastName:'',
          bio:'',
          email: '',
          password:'',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.firstName = '',
        this.form.lastName = '',
        this.form.bio = '',
        this.form.email = '',
        this.password = ''
      },
      onCreate(evt) {
        evt.preventDefault()
         axios.post(`https://localhost:3000/users`, {
            body: this.form,
          })
            .then(response => {})
            .catch(e => {
                this.errors.push(e)
          })
    }
  }
  }
</script>