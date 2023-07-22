<script setup>
import { ref } from "vue";
const props = defineProps({
  msg: String,
  modelValue: String,
  placeholder: String,
  type: String,
  disabled: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const formattedDate = ref(props.modelValue);

let restrictInput = (event) => {
  if (props.type === "dateHandle") {
    const allowedChars = /[0-9/]/;
    console.log(props.modelValue.length);
    if (!allowedChars.test(event.key) || props.modelValue.length === 10) {
      console.log(formattedDate.value);
      event.preventDefault();
    }
  }
};
let handleInput = (event) => {
  let rawValue = event.target.value;
  let sanitizedValue = rawValue.replace(/\D/g, "").slice(0, 8);

  if (props.type === "dateHandle") {
    let formattedValue = "";
    if (sanitizedValue.length > 4) {
      formattedValue += sanitizedValue.slice(0, 2) + "/";
      formattedValue += sanitizedValue.slice(2, 4) + "/";
      formattedValue += sanitizedValue.slice(4);
    } else if (sanitizedValue.length > 2) {
      formattedValue += sanitizedValue.slice(0, 2) + "/";
      formattedValue += sanitizedValue.slice(2);
    } else {
      formattedValue = sanitizedValue;
    }

    formattedDate.value = formattedValue;
  } else {
    formattedDate.value = rawValue;
  }
  emit("update:modelValue", formattedDate.value);
};
</script>
<template>
  <div class="m-auto w-full">
    <div class="form-control w-full">
      <label class="label" v-if="msg">
        <span class="label-text">{{ msg }}</span>
      </label>
      <input
        :disabled="disabled"
        :type="type ? type : 'text'"
        :placeholder="placeholder ? placeholder : 'Type here'"
        :value="modelValue"
        @input="handleInput"
        @keypress="restrictInput"
        class="input input-bordered w-full"
      />
    </div>
  </div>
</template>
