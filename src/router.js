import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/intro',
            name: 'intro',
            component: () => import( './views/Intro.vue')
        },
        {
            path: '/forum',
            name: 'forum',
            component: () => import( './views/Forum.vue')
        },
        {
            path: '/tutorial',
            name: 'tutorial',
            component: () => import( './views/Tutorial.vue')
        },
        {
            path: '*',
            name: 'not_found',
            component: () => import( './views/NotFound.vue')
        }
    ]
})
