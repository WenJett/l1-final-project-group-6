<template>
    <table key = "ViewPatientAppt" style ="width:80%">
        <tr>
            <th>Location of Appointment</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Purpose of Visit</th>
            <th>Options</th>
        </tr>

        <tr style = "height: 50px">
            <td>
                Ang Mo Kio Clinic
                <!-- <button id ="bwt" v-on:click="addAppointment"> Add Appointment </button> -->
            </td>
            <td>25/03/2023</td>
            <td>13:00 hrs</td>
            <td>Collection of Medicine</td>
            <td><button id ="bwt2" v-on:click="cancelAppointment"> Cancel </button></td>
        </tr>
    </table>
</template>

<script>
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc,deleteDoc } from "firebase/firestore";
import DoctorAddAppointment from '../components/DoctorAddAppointment.vue';

const db = getFirestore(firebaseApp);

export default {
     methods: {
        async cancelAppointment(appointmentID) {
             alert("You are going to cancel the appoinment");
    //       await deleteDoc(doc(db, "patient", appointmentID));
             console.log("Cancelling Appointment");        
        },

        async addAppointment() {
             alert("You are going to add new appointment");
             this.$router.push({ name: "DoctorAddAppointment" });   
        }
     }
}

</script>

<style scoped>
table, th, td {
    border: 2px inset #96D4D4;
    margin-left: auto;
    margin-right: auto;
}
th, td {
    background-color: white;
}

tr:nth-child(even) {
  background-color: #96D4D4;
}

</style>