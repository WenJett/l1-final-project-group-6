<template>
    <img src="@/assets/logo.png" alt="fail!!">
    <NavBar />
    <PatientBookAppointment />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import PatientBookAppointment from '../components/PatientBookAppointment.vue';

export default {
    name: "PatientBookAppointments",

    components: {
        PatientBookAppointment,
        NavBar
    }
}
</script>


<style scoped>
img {
  display: block;
  margin: 0 auto;
  width: 30vw;
}
</style>