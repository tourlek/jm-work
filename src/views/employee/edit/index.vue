<script setup>
import { ref, computed, onMounted } from "vue";
import Form from "@/components/form-input.vue";
import Table from "@/components/table.vue";
import Button from "@/components/button.vue";
import Loading from "@/components/loading.vue";

import { useEmployeeStore } from "@/stores/employee.js";
import { useEmployerStore } from "@/stores/employer.js";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";

const store = useEmployeeStore();
const employer = useEmployerStore();
const route = useRoute();
let id = route?.params?.id;
let employerForm = ref(false);
let employeeForm = ref(false);
let loading = ref(true);
let data = computed(() => store.employee);
let dataEmployer = computed(() => employer.employer);
let formData = ref({
  firstName: "",
  lastName: "",
  date: "",
  placeOfBirth: "",
  age: "",
  marital: "",
  employerId: "",
  nationality: "",
  gender: "",
  workType: "",
  tm6: "",
  checkpoint: "",
  passportId: "",
  issuedAt: "",
  start: "",
  end: "",
  visaType: "",
  passportIdOld: "",
  issuedAtOld: "",
  startOld: "",
  endOld: "",
  visaTypeOld: "",
  port: "",
  portDate: "",
  transportation: "",
  form: "",
  reason: "",
  employeeId: id,
});
let patch = async () => {
  loading.value = true;
  try {
    await store.patchEmployee(id, data.value);
    await employer.fetchEmployer(id);
    await store.fetchEmployeeId(id);
    loading.value = false;

    toast("Success", {
      autoClose: 5000,
      type: "success",
    });
  } catch (error) {
    loading.value = false;
    toast(error.message, {
      autoClose: 5000,
      type: "error",
    });
  }
};
let deleteItem = async (id) => {
  loading.value = true;
  try {
    await employer.deleteEmployer(id);
    await employer.fetchEmployer(id);
    await store.fetchEmployeeId(id);
    loading.value = false;
    toast("Success", {
      autoClose: 5000,
      type: "success",
    });
  } catch (error) {
    loading.value = false;
    toast(error.message, {
      autoClose: 5000,
      type: "error",
    });
  }
};
let submit = async () => {
  loading.value = true;
  try {
    await employer.postEmployer(formData.value);
    await employer.fetchEmployer(id);
    await store.fetchEmployeeId(id);
    employerForm.value = false;
    loading.value = false;
    toast("Success", {
      autoClose: 5000,
      type: "success",
    });
  } catch (error) {
    employerForm.value = false;
    loading.value = false;
    toast(error.message, {
      autoClose: 5000,
      type: "error",
    });
  }
};
onMounted(async () => {
  try {
    await store.fetchEmployeeId(id);
    await employer.fetchEmployer(id);
    loading.value = false;
  } catch (error) {
    loading.value = false;
    toast(error.message, {
      autoClose: 5000,
      type: "error",
    });
  }
});
</script>
<template>
  <div v-if="loading"><Loading /></div>
  <div class="mb-5">
    <Button
      type="primary"
      msg="แก้ไขข้อมูล / Edit employee"
      @click="
        employeeForm === false ? (employeeForm = true) : (employeeForm = false)
      "
    />
    <div v-if="employeeForm">
      <Form :data="data" @submit="patch" edit />
    </div>
  </div>

  <Button
    type="primary-line"
    msg="เพิ่มลูกจ้าง / Add employer"
    @click="
      employerForm === false ? (employerForm = true) : (employerForm = false)
    "
  />
  <div v-if="employerForm">
    <Form :data="formData" @submit="submit" employer />
  </div>
  <Table
    :data="dataEmployer"
    @deleteItem="deleteItem"
    :employee="data"
    :id="id"
    employer
  />
</template>
