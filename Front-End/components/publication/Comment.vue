<template>
  <div>
    <b-container v-if="show" class="clearfix" style="padding: 10px 0px 10px 0px">
      <div class="media">
        <b-img class="img-pofil" v-bind="mainProps" :src="images" rounded="circle" alt="Circle image"></b-img>
        <div class="media-body">
          <h5 class="mt-0">{{username}}</h5>
          {{ descriptions }}
        </div>
      </div>
    </b-container>
  </div>
</template>
<style>
.img-pofil {
  margin: 10px;
}

.comment {
  blank: false;
  blankColor: '#777';
  width: 40px;
  height: 40px;
  padding: 10px 0px 10px 0px;
}
</style>
<script>

    export default {

      props: ['images', 'username', 'descriptions'],

      data() {

        return {
          show: true,
          modifier: true,
          mainProps: {
            blank: false,
            blankColor: '#777',
            width: 50,
            height: 50,
            class: 'align-middle'
          },
          nanoProps: {
            blank: false,
            blankColor: '#777',
            width: 50,
            height: 50,
            class: 'align-middle'
          }
        }

      }
    }

</script>
