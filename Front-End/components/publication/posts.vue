<template>
  <!--<b-row class="justify-content-md-center m-5">-->
  <b-container class="bv-example-row">
    <b-row style="margin-top : 7%">
      <!--<b-col class="m-5" cols="10" md="7" >-->
      <b-col cols="8">
        <post :image="img" :images="images" v-for="(img,index) in images" v-bind:key="(img,index)"></post>
      </b-col>
      <!--<b-col cols="3"  class="m-5 "  md="3"> -->
      <b-col cols="4">
        <b-row class="ml-2 ">
          <b-img v-bind="mainProps" :src="this.$axios.defaults.baseURL + $auth.user.profileImage" rounded="circle"
            alt="Circle image"></b-img>
          <h5 class="m-4"> {{$auth.user.firstName}} {{$auth.user.lastName}} </h5>
        </b-row>
        <hr class="my-4">
        <b-row class="ml-2 w-100">
          <b-row class="w-100 pb-2">
            <b-col class="bg-light w-100 rounded border">
              <b-row>
                <b-col class="mt-1">Suggestions pour vous</b-col>
              </b-row>
              <hr class="my-2">
              <b-row>
                <b-col cols="9">
                  <b-img v-bind="nanoProps" src="https://picsum.photos/600/300/?image=25" rounded="circle"
                    alt="Circle image"></b-img>
                  <span class="m-4">AMRANE NOUREDDINE </span>
                </b-col>
                <b-col>follow</b-col>
              </b-row>
              <hr class="my-2">
              <b-row class="mb-2">
                <b-col cols="9">
                  <b-img v-bind="nanoProps" src="https://picsum.photos/600/300/?image=25" rounded="circle"
                    alt="Circle image"></b-img>
                  <span class="m-4">AMRANE NOUREDDINE </span>
                </b-col>
                <b-col class="align-middle">follow</b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-row>
      </b-col>
    </b-row>
    <vs-row
      vs-align="flex-start"
      vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
        <vs-button  type="gradient" v-on:click='showMore'>show more </vs-button>

      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
      </vs-col>
    </vs-row>
    <b-row  vs-justify="center"  >
    </b-row>

  </b-container>
</template>
<script>
  import post from '~/components/publication/post';
  export default {
    components: {
      post
    },
    created: async function () {
      //this.IDUSER = this.userId
      let allImages = await this.$axios.get(`/images?page=${this.page}&prePage=${this.prePage}`)
      this.images = allImages.data.data.docs
      this.page++;
    },
    methods:{
      async showMore(){
        let allImages = await this.$axios.get(`/images?page=${this.page}&prePage=${this.prePage}`)
        this.images = this.images.concat(allImages.data.data.docs)
        this.page++;
      }
    },
    data() {
      return {
        mainProps: {
          blank: false,
          blankColor: '#777',
          width: 80,
          height: 80,
          class: 'align-middle'
        },
        nanoProps: {
          blank: false,
          blankColor: '#777',
          width: 50,
          height: 50,
          class: 'align-middle'
        },
        images: [],
        prePage : 2,
        page:1
      }
    }
  }

</script>
