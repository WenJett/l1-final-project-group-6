<template>
  <img src="@/assets/logo.png" alt="fail!!">
  <NavBar/>
  <br><br>
  <AccountTypeDisplay />
  <PatientNextAppointment />
  <br><br>
  <Logout />
</template>


<script>
//import Login from '@/components/Login.vue'
import PatientNextAppointment from '../components/PatientNextAppointment.vue';
import NavBar from '@/components/NavBar.vue';
import Logout from '@/components/Logout.vue';
import AccountTypeDisplay from '../components/AccountTypeDisplay.vue';


export default {
  name:"Home",
  
  components:{
    NavBar,
    AccountTypeDisplay,
    PatientNextAppointment,
    Logout
  }

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
