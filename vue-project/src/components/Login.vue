<template>
    <div style="text-align: center;">
        <h1 id="mainHead">Welcome to Healthfirst</h1>
        <div id="firebaseui-auth-container"></div>
        <div id="pageContent">
            Testting testing 123
        </div>
    </div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

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

    }
}
</script>

<style scoped>
#firebaseui-auth-container{
    margin-top: 50px;
    margin-bottom: 50px;
}


</style>