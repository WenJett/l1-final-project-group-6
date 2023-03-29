<template>
    <div class="container">
        <form id="myform">
            <h2> Update Details for Medicine </h2>

            <div class = "formli">
                <label for="med1">Medicine Name: </label>
                <input type="text" id="med1" required="" placeholder="Enter medicine name"> <br><br>

                <label for="freq1">Frequency </label>
                <input type="text" id="freq1" required="" placeholder="Enter frequency"> <br><br>

                <label for="time1">Timing to Remind: </label>
                <input type="time" id="time1" required="" placeholder="Enter Time"> <br><br>

                <label for="reminder1">Opt in for Reminder: </label>
                <input type="text" id="reminder1" required="" list = "yesNo"> <br><br>
                <datalist id="yesNo">
                    <option> Yes </option>
                    <option> No</option>
                </datalist>

                <div class = "confirm">
                    <button id = "confirmButton" type = "button" v-on:click = "savetofs"> Confirm Changes </button><br><br>
                </div> 
            </div>
        </form>
    </div>
</template>

<script>
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import router from "../router";
const db = getFirestore(firebaseApp);


export default {
    methods: {
        async savetofs() {
            alert("updating details")
        }
    }
}
</script>


<style scoped>
h2 {
    background-color: lightblue;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.formli {
    display: inline-block;
    text-align: left;
}

form {
    text-align: center;
    align-items: center;
    margin: auto;
    background-color: white;
    border: 2px solid black;
}

input:hover {
    box-shadow: 5px 5px black;
    border-radius:7px;
}

.save{
    text-align: center;
}

#date1, #location1, #time1, #purpose1 {
    width: 400px;
}

</style>
