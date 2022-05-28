<script setup>
import "material-icons/iconfont/material-icons.css";
import cards from "../commands/card-home.js";
const card = cards();
</script>

<template>
  <div
    class="w-full p-4 my-2 border-2 rounded shadow-lg bg-write-600 sm:w-1/2"
    v-for="cards in card"
    :key="cards"
  >
    <div class="flex">
      <span class="material-icons text-cyan-700">{{ cards.icon }}</span>
      <p class="font-bold uppercase text-cyan-700">{{ cards.title }}</p>
    </div>
    <p class="mt-2 font-semibold">{{ cards.text }}</p>
    <router-link :to="cards.path">
      <button
        class="flex items-center py-1 pl-2 mt-2 text-white bg-indigo-600 rounded-md btn hover:bg-indigo-800"
      >
        <p class="font-semibold">Veja mais</p>
        <span class="text-white material-icons">chevron_right</span>
      </button>
    </router-link>
  </div>
</template>
