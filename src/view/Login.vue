<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import user from "../commands/user";
import validation from "../component/Validation.vue";

const users = user()
const router = useRouter();
const validationcurrent = ref("");

const login = reactive({
  email: "",
  password: "",
  check: ""
});

function logar() {
  users.forEach((item) => {
    if (item.email === login.email && item.password === login.password) {
      localStorage.setItem('login', JSON.stringify(login));
      router.push({ name: 'Home' });
    }
    else {
      validationcurrent.value = "error"
      setTimeout(() => {
        validationcurrent.value = ""
      }, 3000);
    }
  })
}

onMounted(() => {
  const localLogin = JSON.parse(localStorage.getItem('login'));
  if (localLogin) {
    if (localLogin.check) {
      login.check = localLogin.check;
      login.email = localLogin.email;
      login.password = localLogin.password;
    }
  }
})

</script>

<template>
  <div class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md mt-10 space-y-8">
      <div>
        <img class="w-auto h-12 mx-auto mt-10" src="../assets/t-tayui.png" alt="Workflow" />
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="logar">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label>E-mail </label>
            <input id="email-address" name="email" type="email" autocomplete="email" required v-model="login.email"
              class="relative block w-full px-3 py-2 my-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address" />
          </div>
          <div>
            <label>Password</label>
            <input v-model="login.password" id="password" name="password" type="password"
              autocomplete="current-password" required
              class="relative block w-full px-3 py-2 my-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" v-model="login.check"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
            <label for="remember-me" class="block ml-2 text-sm text-gray-900">
              Lembrar-me
            </label>
          </div>

          <div class="text-sm">
            <router-link to="/esqueceu-senha" class="font-medium text-indigo-600 hover:text-indigo-500">
              Esqueceu sua senha?
            </router-link>
          </div>
        </div>

        <div>
          <button type="submit"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Logar
          </button>
        </div>
      </form>
    </div>
  </div>
  <validation :validation="validationcurrent" label="Erro no login" />
</template>
