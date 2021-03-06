import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Joke from '../views/Joke'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/joke',
        name: "Joke",
        component: Joke
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router