<template>
  <div class="flex">
    <!-- Sidebar -->
    <aside class=" text-white w-48 h-screen">
      <nav class="p-5">
        <div>
          <a :class="{ 'active-link': isLinkActive('/') }" href="/"> Home </a>
        </div>
        <div>
          <a
            :class="{ 'active-link': isLinkActive('/list-employee') }"
            href="/list-employee"
          >
            List
          </a>
        </div>
      </nav>
    </aside>
    <div class="p-8 w-full overflow-scroll  h-screen max-h-screen main-content bg-gray-200">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

let isLinkActive = (routePath) => {
  return route.path === routePath;
};
</script>

<style>
.active-link {
  color: rgb(11, 138, 223);
}
nav div a {
  color: rgb(0, 0, 0);
}
/* Add any custom styles for your sidebar and main content here */
</style>
