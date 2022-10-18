import login from "@/components/login/login";
import registration from "@/components/registration/registration";
import {createRouter, createWebHistory} from "vue-router";
import home from "@/components/home/home";
const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/registration',
        name: 'registration',
        component: registration
    },
    {

    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})

export default router;