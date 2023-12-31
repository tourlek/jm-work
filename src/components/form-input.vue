<script setup>
import { watchEffect, ref, computed } from "vue";
import Input from "@/components/input.vue";
import Dropdown from "@/components/dropdown.vue";
import Button from "@/components/button.vue";
import Checkbox from "@/components/checkbox.vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import { parse, format } from "date-fns";

const props = defineProps({
  data: Object,
  modelValue: String,
  edit: Boolean,
  employer: Boolean,
});
const formatter = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});

let employeeType = ref(true);
let options = ref(["ชาย", "หญิง"]);
let marital = ref([
  { text: "โสด" },
  { text: "แต่งงาน" },
  { text: "หย่า" },
  { text: "อื่นๆ" },
]);
const emit = defineEmits(["update:modelValue", "submit"]);
const calculateAge = (date) => {
  const parsedDate = parse(date, "dd MMM yyyy", new Date());
  const currentDate = new Date();
  let age = currentDate.getFullYear() - parsedDate.getFullYear();
  if (
    currentDate.getMonth() < parsedDate.getMonth() ||
    (currentDate.getMonth() === parsedDate.getMonth() &&
      currentDate.getDate() < parsedDate.getDate())
  ) {
    age--;
  }

  return (props.data.age = age);
};

let submit = (data) => {
  emit("submit", data);
};
watchEffect(() => {
  if (props.data.date) {
    calculateAge(props.data?.date);
  }
});
</script>
<template>
  <template v-if="!employer">
    <div class="bg-white p-10 rounded-md mt-5">
      <div class="tabs mb-5 font-bold">
        <a
          class="tab tab-lifted text-lg"
          :class="{ 'tab-active': employeeType }"
          @click="employeeType = true"
          >นายจ้างบุคคล</a
        >
        <a
          class="tab tab-lifted text-lg"
          :class="{ 'tab-active': !employeeType }"
          @click="employeeType = false"
          >นายจ้างนิติบุคคล</a
        >
      </div>
      <div v-if="employeeType">
        <div class="flex gap-3 w-full">
          <Input msg="ชื่อ / Name" v-model="data.firstName" />
          <Input msg="นามสกุล / Last Name" v-model="data.lastName" />
        </div>
        <div class="flex gap-3 w-full">
          <Input msg="เลขบัตรประชาชน / Employee Id" v-model="data.employeeId" />
        </div>
        <div class="flex gap-3 w-full">
          <Input msg="E-mail" v-model="data.email" />
          <Input msg="เบอร์โทร / Phone" v-model="data.phone" />
        </div>
        <div class="flex gap-3 w-full">
          <Input msg="ที่อยู่ / Address" v-model="data.streetAddress" />
          <Input msg="เขต / District" v-model="data.district" />
          <Input msg="แขวง / Sub District" v-model="data.subDistrict" />
        </div>
        <div class="flex gap-3 w-full">
          <Input msg="จัวหวัด / Provide" v-model="data.provide" />
          <Input msg="เลขไปรษณีย์ / Postal code" v-model="data.postalCode" />
        </div>
      </div>
      <div v-else>
        <div class="flex gap-3 w-full">
          <Input msg="ชื่อ / Name" v-model="data.firstName" />
          <!-- <Input msg="นามสกุล / Last Name" v-model="data.lastName" /> -->
        </div>
        <div class="flex gap-3 w-full">
          <Input msg="เลขบัตรประชาชน / Employee Id" v-model="data.employeeId" />
        </div>
        <div class="flex gap-3 w-full">
          <Input msg="E-mail" v-model="data.email" />
          <Input msg="เบอร์โทร / Phone" v-model="data.phone" />
        </div>
        <div class="flex gap-3 w-full">
          <Input msg="ที่อยู่ / Address" v-model="data.streetAddress" />
          <Input msg="เขต / District" v-model="data.district" />
          <Input msg="แขวง / Sub District" v-model="data.subDistrict" />
        </div>
        <div class="flex gap-3 w-full">
          <Input msg="จัวหวัด / Provide" v-model="data.provide" />
          <Input msg="เลขไปรษณีย์ / Postal code" v-model="data.postalCode" />
        </div>
      </div>
    </div>
    <div class="bg-white p-10 rounded-md mt-5">
      <div class="text-lg font-semibold mt-5">ผู้รับมอบ</div>

      <div class="flex-row gap-3 w-full" v-for="item in data.attorney">
        <div class="flex gap-3">
          <Input msg="จัวหวัด / Provide" v-model="item.firstName" />
          <Input msg="เลขไปรษณีย์ / Postal code" v-model="item.lastName" />
        </div>
        <div>
          <div class="flex gap-3 w-full">
            <Input msg="เลขที่ / Address No." v-model="item.addressNo" />
            <Input msg="ที่อยู่ / Address" v-model="item.streetAddress" />
            <Input msg="ถนน / Road" v-model="item.road" />
            <Input msg="เขต / District" v-model="item.district" />
            <Input msg="แขวง / Sub District" v-model="item.subDistrict" />
          </div>
          <div class="flex gap-3 w-full">
            <Input msg="จัวหวัด / Provide" v-model="item.provide" />
            <Input msg="เลขไปรษณีย์ / Postal code" v-model="item.postalCode" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-3 w-full justify-end mt-5">
      <Button
        type="btn-primary"
        :msg="edit ? 'Edit' : 'Submit'"
        @click="submit(data)"
      />
    </div>
  </template>
  <template v-else>
    <div class="bg-white p-10 rounded-md mt-5">
      <div class="flex gap-3 w-full">
        <Input msg="ชื่อ / Name" v-model="data.firstName" />
        <Input msg="นามสกุล / Last Name" v-model="data.lastName" />
      </div>
      <div class="flex gap-3 w-full">
        <Input msg="เลขประจำตัว / Employer ID" v-model="data.employerId" />
      </div>
      <div class="flex gap-3 w-full">
        <div class="flex flex-col w-full" v-if="data.date">
          <label class="label">วัน/เดือน/ปี / Date of birth</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.date"
          />
        </div>
        <div class="flex flex-col w-full" v-else>
          <label class="label">วัน/เดือน/ปี / Date of birth</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.date"
          />
        </div>
        <Input msg="สถานที่เกิด/ Place of birth" v-model="data.placeOfBirth" />
        <Input msg=" อายุ / Age" v-model="data.age" age disabled />
      </div>
      <div class="flex gap-3 w-full">
        <Checkbox
          :data="marital"
          msg="สถาณะ / Marital Status"
          v-model="data.marital"
        />
      </div>
      <div class="flex gap-3 w-full">
        <Input msg="สัญชาติ / Nationality" v-model="data.nationality" />
        <Input msg="ประเภทงาน / Type of work" v-model="data.workType" />
        <Dropdown
          msg="เพศ / Gender"
          :options="options"
          v-model="data.gender"
          :modelValue="data.gender"
        />
      </div>
      <div class="flex gap-3 w-full">
        <Input msg="PASSPORT" v-model="data.passportId" />
        <Input msg="ออกให้ที่ / Issued At" v-model="data.issuedAt" />
        <Input msg="ประเภท visa" v-model="data.visaType" />
      </div>
      <div class="flex gap-3 w-full">
        <div class="flex flex-col w-full" v-if="data.start">
          <label class="label">วันที่ออกให้</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.start"
          />
        </div>
        <div class="flex flex-col w-full" v-else>
          <label class="label">วันที่ออกให้</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.start"
          />
        </div>
        <div class="flex flex-col w-full" v-if="data.end">
          <label class="label">วันหมดอายุ</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.end"
          />
        </div>
        <div class="flex flex-col w-full" v-else>
          <label class="label">วันหมดอายุ</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.end"
          />
        </div>
      </div>
    </div>

    <div class="bg-white p-10 rounded-md mt-5">
      <h1 class="text-lg text-left font-semibold">Visa OLD</h1>
      <div class="flex gap-3 w-full">
        <Input msg="PASSPORT" v-model="data.passportIdOld" />
        <Input msg="ออกให้ที่ / Issued At" v-model="data.issuedAtOld" />
        <Input msg="ประเภท visa" v-model="data.visaTypeOld" />
      </div>
      <div class="flex gap-3 w-full">
        <div class="flex flex-col w-full" v-if="data.startOld">
          <label class="label">วันที่ออกให้</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.startOld"
          />
        </div>
        <div class="flex flex-col w-full" v-else>
          <label class="label">วันที่ออกให้</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.startOld"
          />
        </div>
        <div class="flex flex-col w-full" v-if="data.endOld">
          <label class="label">วันหมดอายุ</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.endOld"
          />
        </div>
        <div class="flex flex-col w-full" v-else>
          <label class="label">วันหมดอายุ</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.endOld"
          />
        </div>
      </div>
    </div>
    <div class="bg-white p-10 rounded-md mt-5">
      <div class="flex gap-3 w-full">
        <Input msg="tm6" v-model="data.tm6" />
        <Input msg="สถานที่ออก" v-model="data.checkpoint" />
        <Input msg="เข้าทางด่าน" v-model="data.port" />
        <div class="flex flex-col w-full" v-if="data.portDate">
          <label class="label">วันที่เข้า</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.portDate"
          />
        </div>
        <div class="flex flex-col w-full" v-else>
          <label class="label">วันที่เข้า</label>
          <vue-tailwind-datepicker
            as-single
            :formatter="formatter"
            v-model="data.portDate"
          />
        </div>
      </div>
      <div class="flex gap-3 w-full">
        <Input msg="รถโดยสาร" v-model="data.transportation" />
        <Input msg="จาก" v-model="data.form" />
        <Input msg="เหตุผลที่อยู่ต่อ" v-model="data.reason" />
      </div>
    </div>

    <div class="flex gap-3 w-full justify-end mt-5">
      <Button
        type="btn-primary"
        :msg="edit ? 'Edit' : 'Submit'"
        @click="submit(data)"
      />
    </div>
  </template>
</template>
