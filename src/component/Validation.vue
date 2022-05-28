<script setup>
import { ref } from "vue";

const validation = ref("");
</script>

<template>
  <div>
    <div
      class="w-[180px] p-2 bg-indigo-700 rounded shadow"
      v-if="validation === 'wellcome'"
    >
      <div class="flex justify-center text-center text-white">
        <span class="mr-2 material-icons">celebration</span>
        <p>Bem-vindo</p>
      </div>
    </div>
    <div
      class="w-[180px] p-2 bg-red-500 rounded shadow"
      v-if="validation === 'error'"
    >
      <div class="flex justify-center text-center text-white">
        <span class="mr-2 material-icons">error</span>
        <p>Falha</p>
      </div>
    </div>
  </div>
</template>
