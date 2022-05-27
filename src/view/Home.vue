<script setup>
import TopHeader from "../component/TopHeader.vue";
import Cards from "../component/Cards.vue";
</script>

<template>
  <div>
    <TopHeader />
    <div class="px-4 pt-4 mx-auto">
      <p class="mb-2 text-lg font-bold border-b-2">Bem-vindo ao TayUI!</p>
      <p>Estamos felizes em você usar novas sistema de gestão de atividades.</p>
      <div class="gap-4 sm:flex ">
       <Cards />
      </div>
    </div>
  </div>
</template>