<script setup>
import TopHeader from "../component/TopHeader.vue";
import Cards from "../component/Cards.vue";
import Validation from "../component/Validation.vue";
</script>

<template>
  <div>
    <TopHeader />
    <div class="px-4 pt-4 mx-auto">
      <p class="mb-2 text-lg font-bold border-b-2">Bem-vindo ao TayUI!</p>
      <p class="mb-4 italic">Estamos felizes em você usar novas sistema de gestão de atividades.</p>
      <div class="gap-4 sm:flex">
        <Cards />
      </div>
      <Validation />
    </div>
  </div>
</template>