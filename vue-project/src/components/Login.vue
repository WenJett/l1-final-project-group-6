<template>
    <CommonHeader />
    <br>
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
import CommonHeader from '@/components/CommonHeader.vue';

export default {
    name:"Login",
    
    components:{
        CommonHeader
    },

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
    }
}



</script>

<style scoped>
#firebaseui-auth-container{
    margin-top: 50px;
    margin-bottom: 50px;
}


</style>