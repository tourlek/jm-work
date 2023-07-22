<script setup>
import { computed, onMounted } from "vue";
import Table from "@/components/table.vue";
import { useEmployeeStore } from "@/stores/employee.js";

let store = useEmployeeStore();
let data = computed(() => store.employee);
onMounted(async () => {
  await store.fetchEmployees();
});
</script>
<template>
  <h1 class="text-lg text-center">นายจ้างทั้งหมด</h1>
  <Table :data="data" />
</template>
