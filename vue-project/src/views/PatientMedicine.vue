<template>
    <img src="@/assets/logo.png" alt="fail!!">
    <NavBar />
    <PatientMedicineDisplay />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import PatientMedicineDisplay from '../components/PatientMedicineDisplay.vue';

export default {
    name: "PatientAllMedicine",

    components: {
        PatientMedicineDisplay,
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
