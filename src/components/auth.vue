<template>
  <div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="label">
            <span class="text-base label-text">Email</span>
          </label>
          <input
            v-model="email"
            type="text"
            placeholder="Email Address"
            class="w-full input input-bordered input-primary"
          />
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">Password</span>
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter Password"
            class="w-full input input-bordered input-primary"
          />
        </div>
        <a
          href="#"
          class="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >Forget Password?</a
        >
        <div>
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
const router = useRouter();
const store = useAuthStore();
const email = ref("");
const password = ref("");
const isAuthenticated = ref(false);

const login = async () => {
  // console.log(email.value, password);
  await store.authUser(email.value, password.value);
};
</script>
