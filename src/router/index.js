import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
        children: [
            {
                path: 'subject',
                name: 'Subject',
                component: () => import(/* webpackChunkName: "Subject" */ '@/views/Subject.vue')
            },
            {
                path: 'audit',
                name: 'Audit',
                component: () => import(/* webpackChunkName: "Audit" */ '@/views/Audit.vue')
            },
            {
                path: 'schedule',
                name: 'Schedule',
                component: () => import(/* webpackChunkName: "Schedule" */ '@/views/Schedule.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Register" */ '@/views/Register.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    next()
})

export default router
