<script setup>
import { ref } from "vue";
const props = defineProps({
  data: Array,
  msg: String,
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
let disabledIndex = ref(-1);
let check = (index) => {
  if (disabledIndex.value === index) {
    disabledIndex.value = -1;
  } else {
    disabledIndex.value = index;
  }
  emit("update:modelValue", props.data[index].text);
};
</script>

<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">{{ msg }}</span>
    </label>
    <div class="flex gap-3">
      <div v-for="(item, index) in data" :key="index" class="flex gap-2">
        <input
          :checked="modelValue === item.text"
          :disabled="disabledIndex !== -1 && disabledIndex !== index"
          :value="item.text"
          @change="() => check(index)"
          type="checkbox"
          class="checkbox"
        />
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
