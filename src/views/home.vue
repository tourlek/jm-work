<script setup>
import { ref } from "vue";
import Form from "@/components/form-input.vue";

import { useEmployeeStore } from "@/stores/employee.js";
import Loading from "@/components/loading.vue";

const store = useEmployeeStore();
let formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  employeeType: "",
  employeeId: "",
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
      addressNo: "",
      road: "",
      district: "",
      subDistrict: "",
      provide: "",
      postalCode: "",
    },
  ],
});
let loading = ref(false);

let submit = async () => {
  loading.value = true;
  try {
    await store.postEmployee(formData.value);
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div v-if="loading"><Loading /></div>
  <Form :data="formData" @submit="submit" />
</template>
