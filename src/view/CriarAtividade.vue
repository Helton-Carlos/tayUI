<script setup>
import TopHeader from "../component/TopHeader.vue";
import { reactive,ref } from "vue";

const form = reactive({
  title: "",
  type: "",
  priority:"",
  initial:"",
  end:"",
  picked:""
});

const arrayForm =ref([])

function shippmentForm() {
  arrayForm.value.push(form)
  /*form.title= "",
  form.type= "",
  form.priority="",
  form.initial="",
  form.end="",
  form.picked=""*/
}
</script>

<template>
  <TopHeader />
  <div class="px-4 pt-4 mx-auto">
    <p class="mb-2 text-lg font-bold border-b-2">Criar atividade!</p>
  </div>
  <form class="flex flex-col gap-4 m-4" @submit.prevent="shippmentForm">
    <div class="w-full p-4 my-2 border-2 rounded shadow-lg bg-write-600">
      <h2 class="font-bold">Descrição:</h2>
      <div>
        <label class="font-semibold">Nome da atividade:</label>
        <input
        required 
          type="text"
          placeholder="ex: comer laranja"
          class="w-full px-2 border-2"
          v-model="form.title"
        />
      </div>
      <div>
        <label class="font-semibold">Tipo de atividade:</label>
        <select class="w-full px-2 border-2" v-model="form.type">
          <option disabled value="">Selecione um tipo</option>
          <option>Front-End</option>
          <option>Back-end</option>
          <option>Projetos</option>
        </select>
      </div>
      <div>
        <label class="font-semibold">Nivel de prioriadade:</label>
        <select class="w-full px-2 border-2" v-model="form.priority">
          <option disabled value="">Selecione a prioridade</option>
          <option>Normal</option>
          <option>Prioridade-1</option>
          <option>Prioridade-2</option>
          <option>Urgente</option>
        </select>
      </div>
    </div>

    <div class="flex-col p-4 my-2 border-2 rounded shadow-lg felx bg-write-600">
      <h2 class="font-bold">Prazos:</h2>
      <div>
        <label class="font-semibold">Data inicial:</label>
        <input type="date" class="w-full px-2 border-2" required  v-model="form.initial" />
      </div>
      <div>
        <label class="font-semibold">Data final:</label>
        <input type="date" class="w-full px-2 border-2" required  v-model="form.end" />
      </div>
      <label class="font-semibold">Possivel mudanças?</label>
      <div>
        <input
          type="radio"
          id="sim"
          value="sim"
          v-model="form.picked"
          class="px-1"
        />
        <label for="sim" class="px-2">Sim</label>

        <input
          type="radio"
          id="nao"
          value="nao"
          v-model="form.picked"
          class="px-2"
        />
        <label for="nao" class="px-1">Não</label>
      </div>
      
      <input
        type="submit"
        value="Criar atividade"
        class="px-2 py-1 mt-2 text-white bg-indigo-700 rounded btn hover:bg-indigo-900"
      />
    </div>
  </form>
</template>

