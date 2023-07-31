<script setup>
import { computed } from "vue";
import Auth from "@/components/auth.vue";
import Sidebar from "@/components/sidebar.vue";
import { useAuthStore } from "@/stores/auth.js";
const store = useAuthStore();
let accessToken = computed(() => store.accessToken);
</script>

<template>
  <Sidebar v-if="accessToken" />
  <Auth v-if="!accessToken" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
