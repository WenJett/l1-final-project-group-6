<template>
    <table key = "ViewPatientList" style ="width:80%">
        <tr>
            <th>Patient's Name</th>
            <th>Check Appointments</th>
            <th>Check Medicine</th>
        </tr>

        <tr style = "height: 50px">
            <td>James Tan Seng Ann</td>
            <td>
                <button id ="bwt" v-on:click="viewAppointment"> View Appointment </button>
                <button id ="bwt2" v-on:click="addAppointment"> Add Appointment </button>
            </td>
            <td><button id ="bwt3" v-on:click="viewMedicine"> View Medicine </button></td>
        </tr>
    </table>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc,deleteDoc } from "firebase/firestore";
import DoctorViewPatientAppt from '../components/DoctorViewPatientAppt.vue';
import DoctorAddAppointment from '../components/DoctorAddAppointment.vue';
import DoctorViewPatientMed from '../components/DoctorViewPatientMed.vue';

const db = getFirestore(firebaseApp);

export default {
     methods: {
        async viewAppointment() {
             alert("You are going to view Patient's appointment");
             this.$router.push({ name: "DoctorViewPatientAppt" });   
        },

        async addAppointment() {
             alert("You are going to add new appointment");
             this.$router.push({ name: "DoctorAddAppointment" });   
        },

        async viewMedicine() {
             alert("You are going to view Patient's Medicine Prescriptions");
             this.$router.push({ name: "DoctorViewPatientMed" });   
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