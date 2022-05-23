<script setup>
import { reactive } from "vue";

const rotas = reactive([
  { rota: "/", nome: "Home" },
  { rota: "/projetos", nome: "Projetos" },
  { rota: "/login", nome: "login" },
]);
</script>

<template>
  <div class="min-h-full">
    <nav class="text-white bg-indigo-600">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div><router-link to="/" class="font-bold">Tayui</router-link></div>
          <nav class="flex">
            <ul v-for="rots in rotas" :key="rots">
              <router-link :to="rots.rota" class="px-2 hover:text-cyan-200">{{
                rots.nome
              }}</router-link>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  </div>
</template>