<template>
   <b-container>
     <div class="row">
       <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
             <img style="width: 250px" src="~/assets/logo.png">
       </div>
     </div>
 <form class="flex flex-col" @submit="submitRegister">
   <div class="row">
     <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
   <label>First Name</label>
   <input
     id="nom"
     v-model="nom"
     type="text"
     name="nom"
     placeholder="Nom"
   >
     </div>
   </div>


   <div class="row">
     <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
   <label>Last Name</label>
   <input
     id="prenom"
     v-model="prenom"
     type="text"
     name="prenom"
     placeholder="Prénom"
   >
     </div>
   </div>

   <div class="row">
     <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
   <label>E-mail adress</label>
   <input
     id="email"
     v-model="email"
     type="text"
     name="email"
     placeholder="xxx@exemple.com"
   >
     </div>
   </div>

   <div class="row">
     <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
   <label>Password</label>
   <input
     id="password"
     v-model="password"
     type="password"
     name="password"
   >
     </div>
   </div>
   <div class="row">
     <div class="col-sm-9 col-md-4 col-lg-5 mx-auto">
      <button type="submit" class="-border rounded py-4"> Envoyer</button>
       <button type="submit" class="-border rounded py-4"> Annuler</button>
     </div>
   </div>
 </form>
   </b-container>
</template>

<script>
  export default {
      data(){
          return {
              nom: '',
              prenom: '',
              email:'',
          }

      },
      methods:{
          submitRegister(){
             console.log("cliquer sur le boutton")
          }
      }
  }
</script>
