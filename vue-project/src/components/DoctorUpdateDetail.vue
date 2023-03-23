<template>
    <div class="container">
        <form id="myform">
            <h2> Update Medicine Details </h2>

            <div class = "formli">
                <label for="medicineName">Medicine Name: </label>
                <input type="text" id="name1" required="" placeholder="Enter Full Name"> <br><br>

                <label for="collectionDate">Next Collection Date: </label>
                <input type="date" id="date1" required="" placeholder="Enter Date in dd/mm/yyyy format"> <br><br>

                <div class = "confirm">
                    <button id = "confirmChanges" type = "button" v-on:click = "savetofs"> Confirm Changes </button><br><br>
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
const db = getFirestore(firebaseApp);

export default {
    methods: {
        async savetofs() {

            let medicineName = document.getElementById("name1").value;
            let collectionDate = document.getElementById("date1").value;

            alert(" Updating details for " + medicineName );
        }
    }
}
</script>

<style scoped>
h2 {
    background-color: gray;
}

.formli {
    display: inline-block;
    text-align: right;
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

.confirm{
    text-align: center;
}

#name1, #date1 {
    width: 400px;
}
</style>