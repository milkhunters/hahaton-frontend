
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/components/home/home')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login/login')
    },
    {
        path: '/registration',
        name: 'registration',
        component: () => import('@/components/registration/registration')
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('@/components/account/account'),
        // beforeEnter: (to, from, next) => {
        //     if (localStorage.getItem('isAuth')) next({ name: 'account' })
        //     else next()
        // }
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})

export default router;