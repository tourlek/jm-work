<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import Input from "@/components/input.vue";
import Button from "@/components/button.vue";
let store = useAuthStore();
let profile = computed(() => store.profile);
let accessToken = computed(() => store.accessToken);
let displayName = ref("");
let updateProfile = () => {
  store.update(profile.value.name, profile.value.image);
};
// onMounted(async () => {
//   try {
//     await store.fetchEmployerId(id);
//     loading.value = false;
//   } catch (error) {
//     console.error("No employee ID found in route params.", error);
//   }
// });
</script>
<template>
  <div v-if="loading"><Loading /></div>
  <div>
    {{ profile }}
  </div>
  <div>
    <div>
      <Input v-model="profile.name" />
      <Input v-model="profile.image" />
    </div>
    <Button msg="update" @click="updateProfile" />
  </div>
</template>
