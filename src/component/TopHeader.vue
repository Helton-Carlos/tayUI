<script setup>
import { reactive } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const path = reactive([
  { rota: "/", nome: "Home" },
  { rota: "/projetos", nome: "Projetos" },
]);

function clearStorage() {
  router.push({ name: 'login' });
  localStorage.clear();
}
</script>

<template>
  <header class="w-full text-white bg-indigo-600">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div>
          <router-link to="/" class="font-bold">TayUI</router-link>
        </div>
        <nav class="flex items-center">
          <ul v-for="roters in path" :key="roters">
            <router-link :to="roters.rota" class="px-2 font-medium hover:text-yellow-500">{{
                roters.nome
            }}</router-link>
          </ul>
          <button class="px-3 py-1 ml-3 font-medium text-indigo-600 bg-yellow-300 rounded-lg btn hover:bg-yellow-500"
            @click="clearStorage()">
            login
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>