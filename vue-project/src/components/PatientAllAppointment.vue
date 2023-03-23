<template>
    <!-- also need add v-if ="patient" such that only patient will display this after login -->
    <table key = "PatientNextAppoinment" style ="width:80%">
        <tr>
            <th>Appoinment Date</th>
            <th>Appointment Time</th>
            <th>Purpose of Visit</th>
            <th>Location</th>
            <th>Option</th>
        </tr>
        <!-- subsequent rows are data shld collect from DB but for now put manually -->
        <tr style = "height: 50px">
            <td>25/03/2023</td>
            <td>10:00am</td>
            <td>Medication Collection</td>
            <td>Ang Mo Kio Clinic</td>
            <td><button id ="bwt" v-on:click="deleteAppointment"> Cancel </button></td>
        </tr>
    </table>
</template>

<script>
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc,deleteDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
     methods: {
         async deleteAppointment(appoitnmentID) {
             alert("You are going to delete the appoinment");
    //        await deleteDoc(doc(db, "patient", appointmentID));
             console.log("deleting appointment now");        

        }
     }
}

// async function deleteInstrument(coin, useremail){
//             alert("You are going to delete " + coin)
//             await deleteDoc(doc(db, useremail, coin))
//             console.log("Doucment successfully deleted!" + coin);
//             let tb = document.getElementById("table")
//             while (tb.rows.length > 1){
//                 tb.deleteRow(1)
//             }
//             document.getElementById("totalProfit").innerHTML=""
//             display()
//         }

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