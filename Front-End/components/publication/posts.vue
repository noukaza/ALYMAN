<template>
    <b-row class="justify-content-md-center m-5">
        <b-col class="m-5" cols="10" md="7" >
             <post></post>
             <post></post>
             <post></post>
             <post></post>
             <post></post>
                
        </b-col>
        <b-col cols="3"  class="m-5 "  md="3">
            <b-row class="ml-2 ">
                <b-img  v-bind="mainProps" src="https://picsum.photos/600/300/?image=25" rounded="circle" alt="Circle image"></b-img>
               <h5 class="m-4" >AMRANE NOUREDDINE  </h5>
            </b-row>
             <hr class="my-4">
               <b-row class="ml-2 w-100" >
                <b-row class="w-100 pb-2">
                    <b-col  class="bg-light w-100 rounded border">
                        <b-row>
                            <b-col class="mt-1" >Suggestions pour vous</b-col>
                        </b-row>
                        <hr class="my-2">
                        <b-row>
                            <b-col cols="9">
                                <b-img  v-bind="nanoProps" src="https://picsum.photos/600/300/?image=25" rounded="circle" alt="Circle image"></b-img>
                                <span class="m-4" >AMRANE NOUREDDINE  </span>
                            </b-col>
                            <b-col>follow</b-col>
                        </b-row>
                        <hr class="my-2">
                        <b-row class="mb-2">
                            <b-col cols="9">
                                <b-img  v-bind="nanoProps" src="https://picsum.photos/600/300/?image=25" rounded="circle" alt="Circle image"></b-img>
                                <span class="m-4" >AMRANE NOUREDDINE  </span>
                            </b-col>
                            <b-col class="align-middle">follow</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-row>
        </b-col>
    </b-row>
</template>
<script>

import post from '~/components/publication/post';
  export default {
    components:{
        post
    },
    data() {
      return {
        mainProps: { blank: false, blankColor: '#777', width: 100, height: 100, class: 'align-middle' },
        nanoProps: { blank: false, blankColor: '#777', width: 50, height: 50, class: 'align-middle' }
      }
    }
  }
</script>