<template>
    <div class="container">
        <form id="myform">
            <h2> Book New Appointment </h2>

            <div class = "formli">
                <label for="coin1">Date of Appointment: </label>
                <input type="date" id="date1" required="" placeholder="Enter Date"> <br><br>

                <label for="ticker1">Time of Appointment: </label>
                <input type="time" id="time1" required="" placeholder="Enter Time"> <br><br>

                <label for="buy1">Location: </label>
                <input type="text" id="location1" required="" list = "locations"> <br><br>
                <datalist id="locations">
                    <option> Ang Mo Kio</option>
                    <option> Seng Kang</option>
                </datalist>

                <label for="quantity1">Purpose of Visit: </label>
                <input type="text" id="purpose1" required="" list = "purposes"> <br><br>
                <datalist id="purposes">
                    <option> Consultation </option>
                    <option> Collection of Medicine </option>
                    <option> Others </option> 
                </datalist>


                <div class = "save">
                    <button id = "saveButton" type = "button" v-on:click = "savetofs"> Save </button><br><br>
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

const current = new Date();
const todaydate = String(`${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`);
console.log(todaydate);

export default {
    methods: {
        async savetofs() {
            console.log("IN SAVING TO FS");

            let date = document.getElementById("date1").value;
            let time = document.getElementById("time1").value;
            let location = document.getElementById("location1").value;
            let purpose = document.getElementById("purpose1").value;
            // let appointmentID = useremail + date????
            // maybe need something unique to keep track of appointment for patient eg patientemail after implementing user

            alert(" Booking new Appointment on " + date + " at " + time );


            try {
                if(date < todaydate) {
                    throw new Error("Invalid date chosen, please select again");
                } else if (String(time) < "09:00" || String(time) > "13:00" && String(time) < "14:00" || String(time) > "18:00") {
                    throw new Error("Invalid time chosen, please select again");
                }
                // need to change "app1" to  something unique eg patientemail n tag with date maybe
                const docRef = await setDoc(doc(db, "patient" , "app1"), {
                    Date : date, Time : time, Location: location, Purpose : purpose
                })
                console.log(docRef);
                document.getElementById("myform").reset();
                this.$emit("added");
            }
            catch(error) {
                console.error("Error adding document: ", error);
                alert(error)
            }
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

.save{
    text-align: center;
}

#date1, #location1, #time1, #purpose1 {
    width: 400px;
}
</style>
