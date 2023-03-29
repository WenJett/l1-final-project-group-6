<template>
    <img src="@/assets/logo.png" alt="fail!!">
    <NavBar />
    <PatientMedDetailsDisplay />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import PatientMedDetailsDisplay from '../components/PatientMedDetailsDisplay.vue';

export default {
    name: "PatientMedicineUpdateDetails",

    components: {
        PatientMedDetailsDisplay,
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