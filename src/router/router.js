
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
        component: () => import('@/components/registration/registration'),
    },
    {
        path: '/registration-success',
        name: 'registration-success',
        component: () => import('@/components/registration/registration-success.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/components/admin/admin'),
        redirect: '/admin/exhibitors',
        children: [
            {
                path: 'exhibitors',
                name: 'exhibitors',
                component: () => import('@/components/admin/adminPages/adminExhibitors.vue')
            },
            {
                path: 'cases',
                name: 'cases',
                component: () => import('@/components/admin/adminPages/adminCase.vue')
            },
            {
                path: 'products',
                name: 'products',
                component: () => import('@/components/admin/adminPages/adminProduct.vue')
            },
            {
                path: 'partners',
                name: 'partners',
                component: () => import('@/components/admin/adminPages/adminPartner.vue')
            },
            {
                path: 'reviews',
                name: 'reviews',
                component: () => import('@/components/admin/adminPages/adminReviews.vue')
            },
            {
                path: 'locations',
                name: 'locations',
                component: () => import('@/components/admin/adminPages/adminLocations.vue')
            },
        ]
    },
    {
        path: '/company',
        name: 'company',
        component: () => import('@/components/company/company')
    },
    {
        path: '/lk',
        name: 'lk',
        component: () => import('@/components/lk/lk')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@/components/home/ContactPage.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/components/home/AboutPage.vue')
    },
    {
        path: '/how-to',
        name: 'how-to',
        component: () => import('@/components/home/HowtoPage.vue')
    }

  ]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})

export default router;