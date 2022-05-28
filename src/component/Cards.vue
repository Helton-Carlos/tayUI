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
      <span class="material-icons">{{ cards.icon }}</span>
      <p class="font-bold">{{ cards.title }}</p>
    </div>
    <p>{{ cards.text }}</p>
    <router-link :to="cards.path">
      <button class="px-2 py-1 mt-2 text-white bg-indigo-600 rounded-md btn">
        Veja mais
      </button>
    </router-link>
  </div>
</template>
