<script setup>
import { ref } from "vue";
import Download from "@/components/download.vue";
import Button from "@/components/button.vue";
import Modal from "@/components/modal.vue";
const props = defineProps({
  data: Array,
  employee: Array,
  employer: Boolean,
  id: String,
});
let downloadFile = ref([]);
let download = (id) => {
  downloadFile.value = props.data.find((item) => {
    return item.id === id;
  });
};
const emit = defineEmits(["deleteItem"]);

let deleteItem = (id) => {
  emit("deleteItem", id);
};
</script>
<template>
  <div
    class="bg-white p-10 rounded-md mt-5 h-full overflow-auto"
    :class="{ ' max-h-[650px]': employer }"
  >
    <h1 class="text-lg text-left font-semibold">นายจ้างทั้งหมด</h1>

    <div class="overflow-x-auto" v-if="!employer">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in data">
          <tr>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">{{ item.firstName }}</div>
                  <div class="text-sm opaprovide-50">{{ item.lastName }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ item.employerId }}
              <br />
              <span class="badge badge-ghost badge-sm">{{
                item.streetAddress
              }}</span>
            </td>
            <td>{{ item.phone }}</td>
            <th>
              <router-link
                :to="{
                  path: `/edit-employee/${item.id}`,
                }"
              >
                <Button msg="Edit" :type="'btn btn-ghost'" />
              </router-link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="" v-else>
      <table class="table">
        <thead>
          <tr>
            <!-- <th></th> -->
            <th>Name</th>
            <th>ID</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in data">
          <tr v-if="item.employeeId === id">
            <!-- <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th> -->
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">{{ item.firstName }}</div>
                  <div class="text-sm opaprovide-50">{{ item.lastName }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ item.employerId }}
            </td>
            <td>
              {{ item.nationality }}
            </td>
            <th>
              <router-link
                :to="{
                  name: 'edit-employer',
                  params: { id: item.id || '' },
                }"
              >
                <Button msg="view" :type="'btn btn-ghost'" />
              </router-link>
            </th>
            <th>
              <Download
                @click="download(item.id)"
                :data="downloadFile"
                :employee="employee"
              />
            </th>
            <th>
              <Modal
                :header="`Confirm Deletion of ${item.firstName} ${item.lastName}`"
                description="Once deleted, this data cannot be restored."
                :id="item.id"
                @click="deleteItem(item.id)"
              ></Modal>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
