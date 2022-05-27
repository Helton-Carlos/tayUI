<script setup>
import cards from "../commands/wellcome.js";
const card = cards();
</script>

<template>
  <div
    class="w-full p-4 my-2 border-2 rounded shadow-lg bg-write-600 sm:w-1/2"
    v-for="cards in card"
    :key="cards"
  >
    <p class="font-bold">{{ cards.titulo }}</p>
    <p>{{ cards.texto }}</p>
    <router-link :to="cards.rota">
      <button class="px-2 py-1 text-white bg-indigo-600 rounded-md btn">
        Veja mais
      </button>
    </router-link>
  </div>
</template>
