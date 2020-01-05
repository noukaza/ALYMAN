<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">LYMAN</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item :to="'/profile/'+$auth.user._id" v-if="$auth.loggedIn">{{$auth.user.firstName}} {{$auth.user.lastName}}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="$auth.loggedIn">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" v-model="q"  placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" v-on:click ="search">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-else>

          <b-navbar-nav>
            <b-nav-item to="/register">Register</b-nav-item>
          </b-navbar-nav>


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  data(){
    return{
      q: ""
    }
  },
  methods: {
    search(e) {
          e.preventDefault();
          this.$router.push("/q/"+this.q)
      //console.log("hi")
      //this.$axios.post(`/q/`).then(data => console.log(data))
    },
  }
}
</script>
