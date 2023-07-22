<script setup>
defineProps({
  msg: String,
  type: String,
});
const emit = defineEmits(["click"]);

let submit = (data) => {
  emit("click", data);
};
</script>
<template>
  <button @click="submit" class="btn btn-primary" v-if="type === 'primary'">
    {{ msg }}
  </button>
  <button
    @click="submit"
    class="btn btn-outline btn-primary"
    v-if="type === 'primary-line'"
  >
    {{ msg }}
  </button>
</template>
