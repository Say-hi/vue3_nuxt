import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";



const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/home.vue')
    }
]

export default createRouter({
    routes,
    history: createWebHashHistory()
})