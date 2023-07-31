<script setup>
import { ref, computed, onMounted } from "vue";
import Table from "@/components/table.vue";
import { useEmployeeStore } from "@/stores/employee.js";
import Loading from "@/components/loading.vue";

let store = useEmployeeStore();
let data = computed(() => store.employee);
let loading = ref(true);

onMounted(async () => {
  console.log('work?');
  await store.fetchEmployees();
  loading.value = false;
});
</script>
<template>
  <div v-if="loading"><Loading /></div>
  <Table :data="data" />
</template>
