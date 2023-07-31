<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

const store = useAuthStore();

const router = useRouter();
const route = useRoute();

let profile = computed(() => store.profile);
let isLinkActive = (routePath) => {
  return route.path === routePath;
};
const routePage = (page) => {
  router.push({
    name: page,
  });
};
const logout = async () => {
  await store.logout();
  router.push({ path: "/" });
};
</script>
<template>
  <div class="flex">
    <aside class="w-48 h-screen">
      <nav class="p-5 h-screen flex flex-col">
        <ul class="menu rounded-box p-0">
          <li><router-link to="/home">Home</router-link></li>
          <li>
            <router-link to="/list-employee">List</router-link>
          </li>
        </ul>
        <ul class="mt-auto">
          <div class="flex items-center">
            <div
              class="avatar hover:opacity-80"
              v-if="profile.image !== null && profile.image !== undefined"
            >
              <div class="w-10 rounded">
                <router-link to="/profile">
                  <img :src="profile.image" />
                </router-link>
              </div>
            </div>
            <li class="ml-3 p-4 hover:bg-gray-200 rounded-box">
              <a @click="logout">Logout</a>
            </li>
          </div>
        </ul>
      </nav>
    </aside>
    <div
      class="p-8 w-full overflow-scroll h-screen max-h-screen main-content bg-gray-200"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<!-- <script>


const logout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("User logged out.");
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
};
</script> -->

<style>
.router-link-exact-active {
  background-color: black;
  color: white;
}

nav div a {
  color: rgb(0, 0, 0);
}

img {
  cursor: pointer;
}

/* Your other existing styles for the sidebar and main content */
/* ... */
</style>
