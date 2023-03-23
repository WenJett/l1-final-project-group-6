<template>
    <table key = "ViewPatientMed" style ="width:80%">
        <tr>
            <th>Medicine Name</th>
            <th>Quantity Prescribed</th>
            <th>Date of Issue</th>
            <th>Next Collection Date</th>
            <th>Options</th>
        </tr>

        <tr style = "height: 50px">
            <td>
                Atorvastatin
                <!-- <button id ="bwt" v-on:click="addMedicine"> Add New Medicine </button> -->
            </td>
            <td>130/150</td>
            <td>01/01/2023</td>
            <td>02/06/2023</td>
            <td>
                <button id ="bwt2" v-on:click="updateDetails"> Update Details </button>
                <button id ="bwt3" v-on:click="deleteMedicine"> Delete Medicine </button>
            </td>
        </tr>
    </table>
</template>

<script>
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc,deleteDoc } from "firebase/firestore";
import DoctorUpdateDetail from '../components/DoctorUpdateDetail.vue';
import DoctorAddMedicine from '../components/DoctorAddMedicine.vue';

const db = getFirestore(firebaseApp);

export default {
     methods: {
        async deleteMedicine(medicineID) {
             alert("You are going to delete the medicine");
    //       await deleteDoc(doc(db, "patient", medicineID));
             console.log("Removing Medicine from Patient's Prescription");       
        },

        async updateDetails() {
             alert("You are going to update medicine details");
             this.$router.push({ name: "DoctorUpdateDetail" });     
        },

        async addMedicine() {
             alert("You are going to add new medicine");
             this.$router.push({ name: "DoctorAddMedicine" });
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