import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
    },
    {
        path: '/audit',
        name: 'Audit',
        component: () => import(/* webpackChunkName: "Audit" */ '@/views/Audit.vue')
    },
    {
        path: '/login',
        name: 'Login',

        component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
    },
    {
        path: '/schedule',
        name: 'Schedule',

        component: () => import(/* webpackChunkName: "Schedule" */ '@/views/Schedule.vue')
    },
    {
        path: '/subject',
        name: 'Subject',

        component: () => import(/* webpackChunkName: "Subject" */ '@/views/Subject.vue')
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
