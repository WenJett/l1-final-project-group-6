<template>
    <img src="@/assets/logo.png" alt="fail!!">
    <NavBar />
    <PatientAllAppointment />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import PatientAllAppointment from '../components/PatientAllAppointment.vue';

export default {
    name: "PatientAllAppointments",

    components: {
        PatientAllAppointment,
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
