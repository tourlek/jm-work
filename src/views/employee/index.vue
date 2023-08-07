<script setup>
import { ref, computed, onMounted } from "vue";
import Table from "@/components/table.vue";
import { useEmployeeStore } from "@/stores/employee.js";
import Loading from "@/components/loading.vue";

let loading = ref(true);
let store = useEmployeeStore();
let data = computed(() => store.employee);

onMounted(async () => {
  await store.fetchEmployees();
  loading.value = false;
});
</script>
<template>
  <div v-if="loading"><Loading /></div>
  <Table :data="data" />
</template>
