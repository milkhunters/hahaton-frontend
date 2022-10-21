
import {createRouter, createWebHistory} from "vue-router";
import axios from "axios";


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/home/home'),
        // redirect: { name: 'login' }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login/login')
    },
    {
        path: '/registration',
        name: 'registration',
        // component: () => import('@/components/registration/registration')
        redirect: { name: 'login' }
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('@/components/account/account')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/components/dashboard/dashboard'),
    }


]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})

export default router;