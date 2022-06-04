<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import validation from "../component/Validation.vue";
const router = useRouter();
const check = ref(false);
const validationcurrent = ref("");
const login = reactive({
  name:"",
  email: "",
  password: "",
});

const arrayForm =ref([])

function salveForm() {
    arrayForm.value.push(login)
    console.log(arrayForm.value)
}

</script>

<template>
  <div
    class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md mt-10 space-y-8">
      <div>
        <img
          class="w-auto h-12 mx-auto mt-10"
          src="../assets/t-tayui.png"
          alt="Workflow"
        />
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="salveForm">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label>Nome completo</label>
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              v-model="login.name"
              class="relative block w-full px-3 py-2 my-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="ex: João Batista Souza"
            />
          </div>
            <div>
            <label>E-mail</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="login.email"
              class="relative block w-full px-3 py-2 my-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="ex: joaobatitsa@gmail.com"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              v-model="login.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="relative block w-full px-3 py-2 my-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
           
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
  <validation :validation="validationcurrent" label="Erro no login"/>
</template>
