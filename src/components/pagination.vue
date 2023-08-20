<script setup>
import { ref } from "vue";
defineProps({
  msg: String,
  type: String,
  deleteBtn: Boolean,
  modal: Boolean,
});

const emit = defineEmits(["click"]);

const limit = ref(10);
const page = ref(1);
const totalPages = ref(3); // This will be updated when data is fetched

const changePage = (pageNumber) => {
  page.value = pageNumber;
  console.log(pageNumber);
  emit("click", pageNumber);
};
</script>
<template>
  <div class="join">
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="['join-item btn', page === pageNumber ? 'btn-active' : '']"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>
