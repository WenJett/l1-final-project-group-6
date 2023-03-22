<template>
    <div class = "resetpw">
        <form id = "myForm">

            <div class = "form">
                <label for="email">Email: </label>
                <input type="text" id="email" placeholder="Enter email"> <br><br>
                <!-- <input type="text" id="email" required ="" placeholder="Enter email"> <br><br> -->

                <div class = "save">
                    <button id="savebutton" type="button" v-on:click="sendResetPwEmail"> Save </button>
                </div>
            </div>
        </form>
    </div>
</template>


<script>

import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
    methods: {
        async sendResetPwEmail() {
            let userEmail = document.getElementById("email").value
            const auth = getAuth();
            sendPasswordResetEmail(auth, userEmail)
                .then(() => {
                    alert("Reset password email sent to: " + userEmail)
                }).catch((error) => {
                    alert(error)
                })
  
        }
    }
}
</script>