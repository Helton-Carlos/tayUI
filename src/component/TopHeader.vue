<script setup>
import { reactive } from "vue";

const rotas = reactive([
  { rota: "/", nome: "Home" },
  { rota: "/projetos", nome: "Projetos" },
]);
</script>

<template>
  <div class="min-h-full">
    <header class="text-white bg-indigo-600">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div><router-link to="/" class="font-bold">TayUI</router-link></div>
          <nav class="flex items-center">
            <ul v-for="rots in rotas" :key="rots">
              <router-link :to="rots.rota" class="px-2 font-medium hover:text-yellow-500">{{
                rots.nome
              }}</router-link>
            </ul>
            <button
              class="px-3 py-1 ml-3 font-medium text-indigo-600 bg-yellow-300 rounded-lg btn hover:bg-yellow-500"
            >
              <router-link to="/login">login</router-link>
            </button>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>