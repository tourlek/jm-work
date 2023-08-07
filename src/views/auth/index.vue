<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import Input from "@/components/input.vue";
const router = useRouter();
const store = useAuthStore();
const email = ref("");
const password = ref("");
let required = ref(false);
const login = async () => {
  required.value = true;
  await store.authUser(email.value, password.value);
};
</script>
<template>
  <div
    class="relative flex flex-col justify-center h-screen overflow-hidden bg-gray-200"
  >
    <div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
      <div>
        <Input
          v-model="email"
          msg="Email"
          placeholder="Email Address"
          :required="required"
        />
      </div>
      <div>
        <Input
          v-model="password"
          type="password"
          msg="Password"
          placeholder="Enter Password"
          :required="required"
        />
      </div>
      <br />
      <div>
        <button type="submit" class="btn btn-primary" @click="login">
          Login
        </button>
      </div>
    </div>
  </div>
</template>
