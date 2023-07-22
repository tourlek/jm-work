<script setup>
import { ref } from "vue";
import Form from "@/components/form-input.vue";

import { useEmployeeStore } from "@/stores/employee.js";

const store = useEmployeeStore();
let formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  employerId: "",
  streetAddress: "",
  provide: "",
  district: "",
  subDistrict: "",
  postalCode: "",
  attorney: [
    {
      firstName: "",
      lastName: "",
      streetAddress: "",
      district: "",
      subDistrict: "",
      provide: "",
      postalCode: "",
    },
  ],
});
let submit = async () => {
  await store.postEmployee(formData.value);
};
</script>
<template>
  <Form :data="formData" @submit="submit" />
</template>
