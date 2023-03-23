<template>
    <!-- also need add v-if ="patient" such that only patient will display this after login -->
    <table key = "PatientNextAppoinment" style ="width:80%">
        <tr>
            <th>Appoinment Date</th>
            <th>Appointment Time</th>
            <th>Purpose of Visit</th>
            <th>Location</th>
        </tr>
        <!-- subsequent row are data shld collect from DB but for now put manually -->
        <tr style = "height: 50px">
            <td>25/03/2023</td>
            <td>10:00am</td>
            <td>Medication Collection</td>
            <td>Ang Mo Kio Clinic</td>
        </tr>
    </table>
</template>

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