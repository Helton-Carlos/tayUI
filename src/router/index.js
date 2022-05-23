import { createRouter, createWebHistory } from "vue-router";
import Login from '../view/Login.vue'
import Home from '../view/Home.vue'
import Projetos from '../view/Projetos.vue'
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let login = JSON.parse(localStorage.getItem("login"));
    if (to.fullPath !== "/login" && login === null) {
        next({ name: "login" });
    }
    next();
})

export default router;