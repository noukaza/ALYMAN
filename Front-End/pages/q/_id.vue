<template>
   <!-- <b-container class="bv-example-row mt-5">
    <b-row v-for="(tab,index) in tabs" class="justify-content-md-center" style="margin-top: 20px;">
    <b-col col lg="2" >
        <b-img  rounded="circle" alt="Circle image" :src="tab.urlPicProfil"  style = "width : 70px ; height : 70px">
        </b-img>
    </b-col>
    <b-col>
        <h5 style="margin-top: 20px">{{tab.username}}</h5>
    </b-col>    
    <b-col sm>
        <div style="margin-top: 10px">
            <div >
                <b-badge href="#" variant="primary" style = "width : 70px"><h6>Follow</h6></b-badge>
            </div>
            <div >
                <b-badge href="#" variant="danger"  style = "width : 70px "><h6>Unfollow</h6></b-badge>
            </div>
        </div>

    </b-col>
    <hr class="my-2" />  
    </b-row>
 
</b-container>-->

<div class="container">
    <div class="row profile">
		<div class="col-md-3">
			<div   class="profile-sidebar">
                test
				<!-- SIDEBAR USERPIC -->
				<div class="profile-userpic">
					<b-img  rounded="circle" alt="Circle image" src="tab.urlPicProfil"  style = "width : 70px ; height : 70px; margin-left: 55px">
                    </b-img>
				</div>
				<!-- END SIDEBAR USERPIC -->
				<!-- SIDEBAR USER TITLE -->
				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
				
					</div>
					<div class="profile-usertitle-job">
						Developer
					</div>
				</div>
				<!-- END SIDEBAR USER TITLE -->
				<!-- SIDEBAR BUTTONS -->
				<div class="profile-userbuttons">
					<button type="button" class="btn btn-success btn-sm">Follow</button>
				<!--	<button type="button" class="btn btn-danger btn-sm">Message</button>-->
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<style scoped>
body {
  background: #F1F3FA;
}

/* Profile container */
.profile {
  margin: 20px 0;
}

/* Profile sidebar */
.profile-sidebar {
  background: #fff;
  border: 1px solid gray;
  padding: 30px
}

.profile-userpic img {
  float: none;
  margin: 0 auto;
  width: 50%;
  height: 50%;
  -webkit-border-radius: 50% !important;
  -moz-border-radius: 50% !important;
  border-radius: 50% !important;
}

.profile-usertitle {
  text-align: center;
  margin-top: 20px;
}

.profile-usertitle-name {
  color: #5a7391;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 7px;
}

.profile-usertitle-job {
  text-transform: uppercase;
  color: #5b9bd1;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}

.profile-userbuttons {
  text-align: center;
  margin-top: 10px;
}

.profile-userbuttons .btn {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  padding: 6px 15px;
  margin-right: 5px;
}

.profile-userbuttons .btn:last-child {
  margin-right: 0px;
}
    
.profile-usermenu {
  margin-top: 30px;
}

.profile-usermenu ul li {
  border-bottom: 1px solid #f0f4f7;
}

.profile-usermenu ul li:last-child {
  border-bottom: none;
}

.profile-usermenu ul li a {
  color: #93a3b5;
  font-size: 14px;
  font-weight: 400;
}

.profile-usermenu ul li a i {
  margin-right: 8px;
  font-size: 14px;
}

.profile-usermenu ul li a:hover {
  background-color: #fafcfd;
  color: #5b9bd1;
}

.profile-usermenu ul li.active {
  border-bottom: none;
}

.profile-usermenu ul li.active a {
  color: #5b9bd1;
  background-color: #f6f9fb;
  border-left: 2px solid #5b9bd1;
  margin-left: -2px;
}

/* Profile Content */
.profile-content {
  padding: 20px;
  background: #fff;
  min-height: 460px;
}
</style>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<script>
export default {
  props: ['user', 'iduser', "nbrpost"],
  data() {
    return {
      tabs:[{
          username: "zher",
          urlPicProfil: "https://picsum.photos/1024/400/?image=41",
          followdsss: false,
      },{
          username: "sdhsdsh",
          urlPicProfil: "https://picsum.photos/1024/400/?image=41",
          followdsss: false,
      }],

    }
  },
 /* methods: {
    follow(e) {
      console.log("hi")
      this.$axios.post("/followers", {
        following: this.iduser
      })
    },
    unFollow(e) {
      this.$axios.delete("/followers/" + this.iduser).then(_ => {
        console.log("hi")
})
    },
  },
  created: async function () {
    if (this.user) {
      this.username = `${this.user.firstName} ${this.user.lastName}`;
      this.urlPicProfil = this.$axios.defaults.baseURL + `${this.user.profileImage}`;
      this.bio = this.user.bio;

    } else {
      let userProfile = await this.$axios.get(`/users/${this.iduser}`)
        .catch(e => this.$router.push("/"))
      this.username = `${userProfile.data.data.firstName} ${userProfile.data.data.lastName}`;
      this.urlPicProfil = this.$axios.defaults.baseURL + `${userProfile.data.data.profileImage}`;
      this.bio = userProfile.data.data.bio;
    }

  },
  computed: {
    isFollowed: function () {
      // TODO check if is followed by the user or not

      return true;
    },
    isNotMyProfile: function () {
      return this.user ? this.user._id !== this.$auth.user._id : this.iduser !== this.$auth.user._id;
    }
  },
  mounted: function () {
    let isFoll = false;
    let follows = this.$axios.get(`/users/${this.iduser}/followings`).then(e => {
      e.data.data.forEach(element => {
        if (element.follower._id === this.$auth.user._id) {
          isFoll = true
        }
      });
      this.followdsss = isFoll;
    })

  } */
}
</script>