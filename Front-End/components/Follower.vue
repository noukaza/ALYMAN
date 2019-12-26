<template>
  <div class="container">
    <li v-for="(dataFollower,index) in dataFollowers" v-bind:key="(dataFollower,index)">
      <b-row>
        <b-col v-on:click="redirect(index)" v-if="type === 'followers'">
          <b-img rounded="circle" alt="Circle image"
            v-bind:src="'http://41584f23.ngrok.io/'+dataFollower.following.profileImage"
            style="width : 100% ; heitgh : 100%"></b-img>
        </b-col>
        <b-col v-on:click="redirect(index)" v-else>
          <b-img rounded="circle" alt="Circle image"
            v-bind:src="'http://41584f23.ngrok.io/'+dataFollower.follower.profileImage"
            style="width : 100% ; heitgh : 100%"></b-img>
        </b-col>
        <b-col cols="8" v-on:click="redirect(index)">
          <span style="font-size: 16px;" v-if="type === 'followers'">

            {{dataFollower.following.lastName + " " +dataFollower.following.firstName}}

          </span>
          <span style="font-size: 16px;" v-else>

            {{dataFollower.follower.lastName + " " +dataFollower.follower.firstName}}

          </span>
        </b-col>
        <b-col>
          <a v-on:click="onDelete(index)">
            <font-awesome-icon icon="trash-alt" />
          </a>
        </b-col>
      </b-row>
    </li>

  </div>
</template>

<script>
export default {
  props: ['type', "userId"],
  data() {
    return {

      dataFollowers: [],
      IDUSER: ""
    }
  },
  methods: {
    onSubmit(evt) {},
    onDelete(index) {
      alert(this.type)
      this.$axios.delete("/" + $this.type + "/" + this.dataFollowers[index]._id).then(_ => {
        this.$delete(this.dataFollowers, index)
      })

    },
    redirect(index) {
      this.type === "followers" ?
        this.$router.push("/profile/" + this.dataFollowers[index].following._id) :
        this.$router.push("/profile/" + this.dataFollowers[index].follower._id)

    }

  },
  created: async function () {
    this.IDUSER = this.userId
    let follower = await this.$axios.get(`/users/${this.IDUSER}/${this.type}/`)
    this.dataFollowers = follower.data.data
  }
}
</script>