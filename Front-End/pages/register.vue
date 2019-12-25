<template>
<div class="container">
  
  <div class="Col">
      <div class="row justify-content-md-center">
       <div class="Col Center">
             <b-img src="~/assets/Logo/logo.png" style="width :50%; height :auto"></b-img>
       </div>
      </div>
      <div class="alert alert-danger" role="alert"  v-if="show">
        {{messageError}}  
    </div>
      <b-form @submit="onSubmit" @reset="onReset">

        <b-form-group id="input-group-2" label="Your firstName*:" label-for="input-2" class="Row">
          <b-form-input
            id="input-2"
            v-model="form.firstName"
            required
            placeholder="Enter firstName"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your lastName*:" label-for="input-2" class="Row">
          <b-form-input
            id="input-2"
            v-model="form.lastName"
            required
            placeholder="Enter lastName"
          ></b-form-input>
        </b-form-group>
      
        <b-form-group id="input-group-1" label="Email address*:" label-for="input-1">
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <div  class="row">
        <b-form-group id="input-group-2" label="Your password*:" label-for="input-2" class="col">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
       
        <b-form-group id="input-group-2" label="confirm your password*:" label-for="input-2" class="col">
          <b-form-input
            id="input-2"
            v-model="form.confirmPassword"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
         </div>
        

      <b-form-group id="input-group-2" label="Your profileImage:" label-for="input-2" class="Row">
           <b-form-file v-model="form.file" class="mt-3" plain></b-form-file>
      </b-form-group>   

      <b-button type="submit" variant="primary" >Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>   
       </b-form>

  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          firstName:'',
          lastName:'',
          email: '',
          password:'',
          confirmPassword:'',
          file: null,
        },
        show: false,
        messageError : ""
      }
    },
    methods: {
      onSubmit(evt) {
        if(this.form.password != this.form.confirmPassword){
          alert("password is not equal to confirmPassword")

        }else{
        evt.preventDefault()
         const data = new FormData();
         data.append("firstName",this.form.firstName);
         data.append("lastName",this.form.lastName);
         data.append("email",this.form.email);
         data.append("password",this.form.password);
         data.append("profileImage",this.form.file);
         this.$axios.post(`http://5484d604.ngrok.io/users`, data)

            .then(res => {
                window.location.href = "/"
            })
            .catch(e => {
                 this.messageError = e.response.data.message;
                 this.show = true;
          })
        }
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.firstName = '',
        this.form.lastName = '',
        this.form.bio = '',
        this.form.email = '',
        this.password = '',
        this.confirmPassword = ''
      },
      onCreate(evt) {
        evt.preventDefault()
        
    }
  }
  }
</script>