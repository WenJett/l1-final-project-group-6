import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import MainLanding from '@/views/MainLanding.vue'
import PatientAppointment from '@/views/PatientAppointment.vue'
import PatientBookAppointment from '@/views/PatientBookAppointment.vue'

const routes = [
    {
        path: "/",
        name: "MainLanding",
        component: MainLanding,
    },

    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/resetpassword',
        name: 'ResetPassword',
        component: ResetPassword
    },
    {
        path: '/patientappointment',
        name: 'PatientAppointment',
        component: PatientAppointment
    },
    {
        path: '/patientbookappointment',
        name: 'PatientBookAppointment',
        component: PatientBookAppointment
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router