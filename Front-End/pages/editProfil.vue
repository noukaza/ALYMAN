<template>
    <div class="container" style= "width : 70% ; heitgh : 100% ;margin-top: 7%;">
        <b-card no-body>
            <b-tabs pills card vertical>
            <b-tab title="profile" active>
                <div class="Col" style= "align-items: center; width : 80% ; heitgh : 80% ">
                <div class="alert alert-danger" role="alert" v-if="show">
                {{messageError}}
                </div>
                <b-form @submit="onSubmit" @reset="onReset">

                <b-form-group id="input-group-2" label="Your firstName*:" label-for="input-2" class="Row">
                    <b-form-input id="input-2" v-model="form.firstName" required placeholder="Enter firstName"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Your lastName*:" label-for="input-2" class="Row">
                    <b-form-input id="input-2" v-model="form.lastName" required placeholder="Enter lastName"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-1" label="Email address*:" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>

           
            </div>
            </b-tab>
            <b-tab title="Edit Password">
                <b-card-text>
                    <div class="col">
                        <b-form-group id="input-group-2" label="old password*:" label-for="input-2" class="col">
                        <b-form-input id="input-2" v-model="form.oldPassword" type="password" required placeholder="Enter password">
                        </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Your password*:" label-for="input-2" class="col">
                        <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Enter password">
                        </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="confirm your password*:" label-for="input-2" class="col">
                        <b-form-input id="input-2" v-model="form.confirmPassword" type="password" required
                            placeholder="Enter password"></b-form-input>
                        </b-form-group>
                        <b-button v-on:click="submitPassword" variant="primary">Submit</b-button>
                    </div>
                </b-card-text>
            </b-tab>
             <b-tab title="Edit profil Image">
                <b-card-text>
                    <div class="col">
                          <b-form-file
                            v-model="form.file"
                            :state="Boolean(form.file)"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                          ></b-form-file>
                          <div class="mt-3">Selected file: {{ form.file ? form.file.name : '' }}

                          </div>

                        <b-button v-on:click="submitProfilImage" variant="primary">Submit</b-button>
                    </div>
                </b-card-text>
            </b-tab>
            </b-tabs>
        </b-card>
    </div>
            
        
     
        

</template>

<script>
export default {
    middleware : "auth",

  data() {
    return {
      form: {
        firstName: this.$auth.user.firstName,
        lastName: this.$auth.user.lastName,
        email: this.$auth.user.email,
        password: '',
        oldPassword: '',
        file : null ,
      },
      show: false,
      messageError: "",
    }
  },
  methods: {
    onSubmit(evt) {
     
        evt.preventDefault()
        const data = new FormData();
        data.append("firstName", this.form.firstName);
        data.append("lastName", this.form.lastName);
        data.append("email", this.form.email);

        this.$axios.put(`/users`, data)
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            this.messageError = e.response.data.message;
            this.show = true;
          })
      
    },
    submitPassword(){
         if (this.form.password != this.form.confirmPassword) {
        alert("password is not equal to confirmPassword")

      } else {
          const data = new FormData();
          data.append("oldPassword", this.form.oldPassword);
          data.append("password", this.form.password);

           this.$axios.put(`/users`, data)
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            this.messageError = e.response.data.message;
            this.show = true;
          })
      }
    },
     submitProfilImage(){
          const data = new FormData();
          data.append("profileImage", this.form.file);
          console.log("data",data)
           this.$axios.put(`/users`, data)
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            this.messageError = e.response.data.message;
            this.show = true;
          })
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.firstName = '',
        this.form.lastName = '',
        this.form.bio = '',
        this.form.email = ''
    },
    onCreate(evt) {
      evt.preventDefault()

    },
    changeEdit() {
      console.log("coucou")
    }
  }
}
</script>