<template>
    <div class="container">
        <form id="myform">
            <h2> Add New Appointment for Patient </h2>

            <div class = "formli">
                <label for="patientname">Patient Name: </label>
                <input type="text" id="name1" required="" placeholder="Enter Full Name"> <br><br>

                <label for="appointmentdate">Appointment Date: </label>
                <input type="date" id="date1" required="" placeholder="Enter Date in dd/mm/yyyy format"> <br><br>

                <label for="appointmenttime">Appointment Time: </label>
                <input type="time" id="time1" required="" placeholder="Enter Time in 00:00 hrs format"> <br><br>

                <label for="purposeofvisit">Purpose of Visit: </label>
                <input type="text" id="purpose1" required="" list = "purposes"> <br><br>
                <datalist id="purposes">
                    <option> Consultation </option>
                    <option> Collection of Medicine </option>
                    <option> Others </option> 
                </datalist>

                <label for="location">Location: </label>
                <input type="text" id="location1" required="" list = "locations"> <br><br>
                <datalist id="locations">
                    <option> Ang Mo Kio</option>
                    <option> Seng Kang</option>
                </datalist>

                <div class = "schedule">
                    <button id = "scheduleAppointment" type = "button" v-on:click = "savetofs"> Schedule Appointment </button><br><br>
                </div> 
            </div>
        </form>
    </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
    methods: {
        async savetofs() {

            let name = document.getElementById("name1").value;
            let date = document.getElementById("date1").value;
            let time = document.getElementById("time1").value;
            let location = document.getElementById("location1").value;
            let purpose = document.getElementById("purpose1").value;

            alert(" Adding new Appointment for " + name + " on " + date + " at " + time );
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

.schedule{
    text-align: center;
}

#name1, #date1, #time1, #purpose1, #location1 {
    width: 400px;
}
</style>