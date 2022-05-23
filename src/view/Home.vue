<script setup>
import TopHeader from "../component/TopHeader.vue";
import cards from "../commands/wellcome.js";
const card = cards();
</script>

<template>
  <div>
    <TopHeader />
    <div class="px-4 pt-4 mx-auto">
      <p class="font-bold border-b-2 text-lg mb-2">Bem-vindo ao TayUI!</p>
      <p>Estamos felizes em você usar novas sistema de gestão de atividades.</p>
      <div class="sm:flex">
        <div
          class="
            w-full
            p-4
            bg-write-600
            my-2
            rounded
            shadow-lg
            border-2
            sm:w-1/2
          "
          v-for="cards in card"
          :key="cards"
        >
          <p class="font-bold">{{ cards.titulo }}</p>
          <p>{{ cards.texto }}</p>
          <button class="btn bg-indigo-600 text-white px-2 py-1 rounded-md">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>