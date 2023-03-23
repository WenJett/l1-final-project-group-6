<template>
  <NavBar/>
  <img src="@/assets/logo.png" alt="fail!!">
  <br><br>
  <Logout />
</template>


<script>
//import Login from '@/components/Login.vue'
// import PatientNextAppointment from '../components/PatientNextAppointment.vue';
// import PatientAllAppointment from "../components/PatientAllAppointment.vue";
import NavBar from '@/components/NavBar.vue';
import Logout from '@/components/Logout.vue';
import PatientBookAppointment from '../components/PatientBookAppointment.vue';

export default {
  name:"Home",
  
  components:{
    NavBar,
    Logout
  },

  // data() {
  //       return {
  //           user:false,
  //       }
  //   },

  //   mounted() {
  //       const auth = getAuth();
  //       onAuthStateChanged(auth, (user) => {
  //           if(user) {
  //               this.user = user;
  //           }
  //       })
  //   },
}

</script>


<style scoped>
img {
  display: block;
  margin: 0 auto;
  width: 30vw;
}
</style>
