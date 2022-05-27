<script setup>
import cards from "../commands/wellcome.js";
const card = cards();
</script>

<template>
  <div
    class="w-full p-4 bg-write-600 my-2 rounded shadow-lg border-2 sm:w-1/2"
    v-for="cards in card"
    :key="cards"
  >
    <p class="font-bold">{{ cards.titulo }}</p>
    <p>{{ cards.texto }}</p>
    <router-link :to="cards.rota">
      <button class="btn bg-indigo-600 text-white px-2 py-1 rounded-md">
        Enviar
      </button>
    </router-link>
  </div>
</template>
