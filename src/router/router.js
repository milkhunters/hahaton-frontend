
import {createRouter, createWebHistory} from "vue-router";


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
  ]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})

export default router;