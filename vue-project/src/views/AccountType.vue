<template>
    <NavBar/>
    
    <h1> Welcome to HealthFirst</h1>

    <Logout/>
</template>


<script>
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";
import NavBar from '@/components/NavBar.vue';
import Logout from '@/components/Logout.vue';
import AccountTypeDisplay from '@/components/AccountTypeDisplay.vue'

export default {
    name: "AccountType",

    components:{
    NavBar,
    AccountTypeDisplay,
    Logout
  },
}

</script>

<style> 
</style>
