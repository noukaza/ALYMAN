<template style="background-color: lightgoldenrodyellow;">
  <b-container class="bv-example-row mt-5">
    <b-row class="justify-content-md-center">
      <b-col col lg="2">
        <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
      </b-col>
      <b-col>
        <b-row>
          <b-col sm="8">
            <h2>Yanis King</h2>
          </b-col>
          <b-col sm="4">
            <h5>
              <b-badge class="badge" href="#">Edit profile</b-badge>
            </h5>
          </b-col>
        </b-row>
        <p>Azul fellawen nekk dachikour nwen marra merci bisous au revoir, m3adnouss tikerkass tidak nni akk ouhh dizzan yawdii mais wichqa</p>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col lg="2"></b-col>
      <b-col>
        <b-row>
          <b-col>
            <Label style="font-weight:bold; display:inline; margin-right:120px">Posts</Label>
          </b-col>
          <b-col>
            <Label style="font-weight:bold; display:inline; margin-right:120px">Followers</Label>
          </b-col>
          <b-col>
            <Label style="font-weight:bold; display:inline;">Following</Label>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr class="my-5" />
    <b-img style="margin-right: 15px; margin-left: 60px; margin-bottom: 10px" v-for="img in images" v-bind:src="img" thumbnail fluid></b-img>
      

      <!--<b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
      </b-col>-->
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 100,
        height: 100,
        class: 'm1'
      },
      images: [
        'https://picsum.photos/250/250/?image=54',
        'https://picsum.photos/250/250/?image=54',
        'https://picsum.photos/250/250/?image=54',
        'https://picsum.photos/250/250/?image=54',
                'https://picsum.photos/250/250/?image=54',

        'https://picsum.photos/250/250/?image=54',

        'https://picsum.photos/250/250/?image=54',

        'https://picsum.photos/250/250/?image=54'
      ]
    }
  }
}
</script>