<script setup>
defineProps({
  validation: String,
  label: String,
})
</script>

<template>
  <div class="relative flex justify-center h-full bottom-2">
    <div
      class="p-2 bg-indigo-700 rounded shadow"
      v-if="validation === 'wellcome'"
    >
      <div class="flex justify-center text-center text-white">
        <span class="mr-2 material-icons">celebration</span>
        <p>{{label}}</p>
      </div>
    </div>
    <div
      class="w-[180px] p-2 bg-red-700 rounded shadow"
      v-if="validation === 'error'"
    >
      <div class="flex justify-center text-center text-white">
        <span class="mr-2 material-icons">error</span>
        <p>{{label}}</p>
      </div>
    </div>
  </div>
</template>
