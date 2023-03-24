<template>
    <div style="text-align: center;">
        <h1 id="mainHead">Welcome to Healthfirst</h1>
        <img src="@/assets/round_logo.png" alt="logo" width="250">
        <div id="firebaseui-auth-container"></div>
        <div id="pageContent">
            <div class = "forgetPassword">
                    <!-- <button id="forgetPassword" type="button"  v-on:click="redirectResetPW"> Forget Password </button> -->
                    <router-link to="/resetpassword" tag="button">Forget Password</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { getStorage, ref, getMetadata } from "firebase/storage";
import { getAuth, getRedirectResult, onAuthStateChanged } from "firebase/auth";


export default {
    name:"Login",

    mounted() {

        //CAlling the ui instance
        var ui = firebaseui.auth.AuthUI.getInstance();
        if(!ui) {
            //We need to create the instance only one time
            //Initialize the FirebaseUI Widget using Firebase.
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        
        var uiConfig = {
            signInSuccessUrl: '/home',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
        };

        ui.start("#firebaseui-auth-container", uiConfig)  

        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                if (user.metadata.creationTime == user.metadata.lastSignInTime) {
                    this.firstTime(user)
                }
            }
        })

    },

    methods: {
        
        firstTime(user) {
            console.log("first time user")
            signInSuccess: () => false
            this.$router.push({ name: "AccountType" }); 
        }
    }
}


</script>

<style scoped>
#firebaseui-auth-container{
    margin-top: 50px;
    margin-bottom: 50px;
}


</style>