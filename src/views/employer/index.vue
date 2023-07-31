<script setup>
import { ref, computed, onMounted } from "vue";
import Form from "@/components/form-input.vue";
import Loading from "@/components/loading.vue";

import { useRoute, useRouter } from "vue-router";
import { useEmployerStore } from "@/stores/employer.js";
const store = useEmployerStore();
const route = useRoute();
const router = useRouter();
let loading = ref(true);
let id = route?.params?.id;
let data = computed(() => store.employer);
let employeeId = computed(() => data.value.employeeId);
let patch = async () => {
  loading.value = true;
  try {
    await store.patchEmployer(id, data.value);
    await store.fetchEmployerId(id);
    router.push({
      name: `edit-list-employee`,
      params: {
        id: employeeId.value,
      },
    });
    loading.value = false;
  } catch (error) {}
};
onMounted(async () => {
  try {
    await store.fetchEmployerId(id);
    loading.value = false;
  } catch (error) {
    console.error("No employee ID found in route params.", error);
  }
});
</script>
<template>
  <div v-if="loading"><Loading /></div>
  <div>
    <Form :data="data" @submit="patch" employer edit />
  </div>
</template>
