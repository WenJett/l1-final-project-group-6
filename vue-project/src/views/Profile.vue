<template>
    <div style="text-align: center;">
        <NavBar/>
        <h1 id="mainHead">this is the Profile page</h1>
        <Logout />
    </div>
</template>

<script>
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";
import NavBar from '@/components/NavBar.vue';
import Logout from '@/components/Logout.vue';

export default {
    name: "Profile",

    components:{
    NavBar,
    Logout
  },
}
</script>