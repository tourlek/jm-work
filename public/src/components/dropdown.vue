<template>
  <div class="form-control w-full max-w-xs">
    <label class="label" v-if="msg">
      <span class="label-text">{{ msg }} </span>
    </label>
    <select
      class="select select-bordered"
      @change="emitSelectedValue"
    >
      <option disabled selected>Please select</option>

      <template v-for="item in options" :key="item">
        <option :selected="modelValue === item">{{ item }}</option>
      </template>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  msg: String,
  data: Object,
  options: Array,
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
console.log(props);
// Emit the updated value when the dropdown selection changes
const emitSelectedValue = (event) => {
  console.log(event.target.value);
  emit("update:modelValue", event.target.value);
};
</script>
