<template>
    <!-- also need add v-if ="patient" such that only patient will display this after login -->
    <table v-if = "showTable" id = "table" class = "auto-index">
        <tr>
            <th style = "width:10%">S.No</th>
            <th style = "width:25%">Appoinment Date</th>
            <th style = "width:20%">Location</th>
            <th style = "width:25%">Purpose of Visit</th>
            <th style = "width:25%">Appointment Time</th>
            <th>Option</th>
        </tr>
    </table>
    <br><br>
    <button @click="$router.push('patientbookappointment')">Click to Book New Appointment</button>
</template>

<script>
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc,deleteDoc, getDocs, collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    data() {
        return {
            showTable:false,
        }
    },
    mounted(){
        this.showTable = true;
        async function display() {
            let allAppointment = await getDocs(collection(db, "patient"));
            let index = 1;

            allAppointment.forEach((appointment) => {
                let appointmentData = appointment.data();
                let date = (appointmentData.Date);
                let location = (appointmentData.Location);
                let purpose = (appointmentData.Purpose);
                let time = (appointmentData.Time);
                let docID = String(date) + String(time)

                let table = document.getElementById("table");
                let row = table.insertRow(index);

                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);

                cell1.innerHTML = index;
                cell2.innerHTML = date;
                cell3.innerHTML = location;
                cell4.innerHTML = purpose;
                cell5.innerHTML = time;

                let deleteButton = document.createElement("button");

                deleteButton.id = String(docID);
                deleteButton.className = "bwt";
                deleteButton.innerHTML = "Delete";

                cell6.appendChild(deleteButton)
                deleteButton.onclick = function() {
                    deleteAppointment(docID)
                }
                index += 1;
            })
        }
        display();

        async function deleteAppointment(docID) {
            alert("You are going to delete the appoinment");
            await deleteDoc(doc(db, "patient", docID));
            console.log("deleting appointment now");    
            let tb = document.getElementById("allAppointmentTable")
            while (tb.rows.length > 1){
                tb.deleteRow(1)
            } 
            display();
        }
     }
}
</script>


<style scoped>
table {
    border-collapse: collapse;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background: white;
}

th,td {
    border: 2px solid black;
    text-align: center;
}



</style>