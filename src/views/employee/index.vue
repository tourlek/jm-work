<script setup>
import { ref, computed, onMounted } from "vue";
import Table from "@/components/table.vue";
import { useEmployeeStore } from "@/stores/employee.js";
import Loading from "@/components/loading.vue";
import Paginate from "@/components/pagination.vue";
let pageRef = ref(1);
let loading = ref(true);
let store = useEmployeeStore();
let data = computed(() => store.employee);
const changePage = async (page) => {
  await store.fetchEmployees(page, 4);
};
onMounted(async () => {
  await store.fetchEmployees(pageRef.value, 4);
  loading.value = false;
});
</script>
<template>
  <div v-if="loading"><Loading /></div>
  <Table :data="data" />
  <!-- <Paginate @click="changePage" /> -->
</template>
