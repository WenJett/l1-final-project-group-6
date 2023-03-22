<script setup>
import Login from '@/components/Login.vue'
// import PatientNextAppointment from '../components/PatientNextAppointment.vue';
// import PatientAllAppointment from "../components/PatientAllAppointment.vue";
import PatientBookAppointment from '../components/PatientBookAppointment.vue';
import firebaseApp from "@/firebase.js";
import {getAuth} from "firebase/auth";
</script>

<template>
  <img src="@/assets/logo.png" alt="fail!!">
  <Login/>
  <!-- <PatientNextAppointment /> -->
  <!-- <PatientAllAppointment /> -->
  <PatientBookAppointment />
</template>

<style scoped>
img {
  display: block;
  margin: 0 auto;
  width: 30vw;
}
</style>
