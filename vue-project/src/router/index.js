import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'

const routes = [
    {
        path: "/",
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router