<template>
<div id="mybutton">

 <div>
    <b-button color="colorx" gradient-color-secondary="colorx2" type="gradient" v-b-modal.modal-prevent-closing style="width: 200px; height:50px"  variant="info"> <i class="material-icons">
post_add
</i>NEW POST</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Description"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-file v-model="file" class="mt-3" plain></b-form-file>
      </form>
    </b-modal>
  </div>
</div>
</template>

<style>
.feedback {
  background-color : #31B0D5;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border-color: #46b8da;
}

#mybutton {
  position: fixed;
  bottom: -4px;
  right: 10px;
  z-index:999;
}
</style>

<script>
 export default {
    data() {
      return {
        name: '',
        nameState: null,
        submittedNames: [],
        file : null,
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
        console.log("coucou",this.name)

        const data = new FormData();
        
         data.append("description",this.name);
         data.append("image",this.file);
         this.$axios.post(`/images`, data)
            .then(res => {
               // window.location.href = "/" //TODO change 
            })
            .catch(e => {
                 console.log("error",e )
          })
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      }
    }
  }
</script>