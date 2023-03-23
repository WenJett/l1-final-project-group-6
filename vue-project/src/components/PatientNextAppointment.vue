<template>
    <!-- also need add v-if ="patient" such that only patient will display this after login -->
    <table v-if = "showTable" id = "nextAppointmentTable" style ="width:80%">
        <tr>
            <th style = "width:10%">S.No</th>
            <th style = "width:30%">Appoinment Date</th>
            <th style = "width:30%">Location</th>
            <th style = "width:30%">Purpose of Visit</th>
            <th>Appointment Time</th>
            <th>Option</th>
        </tr>
    </table>
</template>

<script>
import firebaseApp from "../firebase.js";
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
                if (index == 1) {
                    let appointmentData = appointment.data();
                    let date = (appointmentData.Date);
                    let location = (appointmentData.Location);
                    let purpose = (appointmentData.Purpose);
                    let time = (appointmentData.Time);
                    let docID = String(date) + String(time);

                    let table = document.getElementById("nextAppointmentTable");
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
                    index += 1
                }
            })
        }
        display()

        async function deleteAppointment(docID) {
            alert("You are going to delete the appoinment");
            await deleteDoc(doc(db, "patient", docID));
            console.log("deleting appointment now");    
            let tb = document.getElementById("nextAppointmentTable")
            while (tb.rows.length > 1){
                tb.deleteRow(1)
            } 
            display();
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

</style>