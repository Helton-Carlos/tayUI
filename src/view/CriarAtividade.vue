<script setup>
import TopHeader from "../component/TopHeader.vue";
import { ref } from "vue";

const name = ref("");
const type = ref("Please select one");
const picked = ref("");
</script>

<template>
  <TopHeader />
  <div class="px-4 pt-4 mx-auto">
    <p class="mb-2 text-lg font-bold border-b-2">Criar atividade!</p>
  </div>
  <div class="flex gap-4 m-4">
    <div class="w-full p-4 my-2 border-2 rounded shadow-lg bg-write-600">
      <h2 class="font-bold">Descrição:</h2>
      <div>
        <label class="font-semibold">Nome da atividade:</label>
        <input
          type="text"
          placeholder="ex: comer laranja"
          class="w-full border-2 px-2"
          v-model="name"
        />
      </div>
      <div>
        <label class="font-semibold">Tipo de atividade:</label>
        <select class="w-full border-2 px-2" v-model="type">
          <option disabled value="">Selecione um tipo</option>
          <option>Front-End</option>
          <option>Back-end</option>
          <option>Projetos</option>
        </select>
      </div>
      <div>
        <label class="font-semibold">Nivel de prioriadade:</label>
        <select class="w-full border-2 px-2" v-model="type">
          <option disabled value="">Selecione a prioridade</option>
          <option>Normal</option>
          <option>Prioridade-1</option>
          <option>Prioridade-2</option>
          <option>Urgente</option>
        </select>
      </div>
      <div>
        <label class="font-semibold">Nivel de prioriadade:</label>
        <select class="w-full border-2 px-2" v-model="type">
          <option disabled value="">Selecione a prioridade</option>
          <option>Normal</option>
          <option>Prioridade-1</option>
          <option>Prioridade-2</option>
          <option>Urgente</option>
        </select>
      </div>
    </div>

    <div class="p-4 my-2 border-2 rounded shadow-lg bg-write-600">
      <h2 class="font-bold">Prazos:</h2>
      <div>
        <label class="font-semibold">Data inicial:</label>
        <input type="date" class="w-full border-2 px-2" v-model="initial" />
      </div>
      <div>
        <label class="font-semibold">Data final:</label>
        <input type="date" class="w-full border-2 px-2" v-model="end" />
      </div>
      <div>
        <label class="font-semibold">Possivel mudanças?</label>
        <div>
          <input
            type="radio"
            id="sim"
            value="sim"
            v-model="picked"
            class="px-1"
          />
          <label for="sim" class="px-2">Sim</label>

          <input
            type="radio"
            id="nao"
            value="nao"
            v-model="picked"
            class="px-2"
          />
          <label for="nao" class="px-1">Não</label>
        </div>
      </div>
    </div>
  </div>
</template>

