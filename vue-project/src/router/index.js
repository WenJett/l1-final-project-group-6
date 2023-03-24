import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import AccountType from '@/views/AccountType.vue'


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
    },
    {
        path: '/resetpassword',
        name: 'ResetPassword',
        component: ResetPassword
    },
    {
        path: '/accounttype',
        name: 'AccountType',
        component: AccountType
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

