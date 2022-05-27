import { createRouter, createWebHistory } from "vue-router";
import Login from '../view/Login.vue'
import Home from '../view/Home.vue'
import Projetos from '../view/Projetos.vue'
import CriarAtividade from '../view/CriarAtividade.vue'
import ListaAtividades from '../view/ListaAtividades.vue'

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
    },
    {
        path: '/criar-atividade',
        name: 'criar-atividade',
        component: CriarAtividade
    },
    {
        path: '/lista-atividades',
        name: 'lista-atividades',
        component: ListaAtividades
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