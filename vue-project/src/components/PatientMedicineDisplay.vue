<template>
    <!-- also need add v-if ="patient" such that only patient will display this after login -->
    <table v-if = "showTable" id = "medTable" class = "auto-index">
        <tr>
            <th style = "width:10%">S.No</th>
            <th style = "width:20%">Medicine Name</th>
            <th style = "width:25%">Quantity Prescribed</th>
            <th style = "width:20%">Date of Issue</th>
            <th style = "width:25%">Next Collection Date</th>
            <th>Options</th>
        </tr>
    </table>
    <br><br>
</template>

<script>
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc,deleteDoc, getDocs, collection } from "firebase/firestore";
import router from "../router";


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
            let allMedicine = await getDocs(collection(db, "patient"));
            let index = 1;

            allMedicine.forEach((medicine) => {
                let medicineData = medicine.data();
                let name = (medicineData.name);
                let quantity = (medicineData.quantity);
                let dateOfIssue = (medicineData.dateOfIssue);
                let nextCollection = (medicineData.nextCollection);
                let docID = String(name)

                let table = document.getElementById("medTable");
                let row = table.insertRow(index);

                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);

                cell1.innerHTML = index;
                cell2.innerHTML = name;
                cell3.innerHTML = quantity;
                cell4.innerHTML = dateOfIssue;
                cell5.innerHTML = nextCollection;

                let consumeButton = document.createElement("button");

                consumeButton.id = String(docID);
                consumeButton.className = "bwt";
                consumeButton.innerHTML = "Consumed";

                cell6.appendChild(consumeButton)
                consumeButton.onclick = function() {
                    consumeMedicine(docID)
                }
                let updateDetailButton = document.createElement("button");

                updateDetailButton.id = String(docID);
                updateDetailButton.className = "bwt";
                updateDetailButton.innerHTML = "Update Details";

                cell6.appendChild(updateDetailButton)
                updateDetailButton.onclick = function() {
                    updateDetailMedicine(docID)
                }
                index += 1;
            })
        }
        display();

        async function consumeMedicine(docID) {
            alert("medicine consumed")
        }
        async function updateDetailMedicine(docID) {
            alert("going to updateDetailMedicine page")
            router.push({ path: '/patientmeddetails' });
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
