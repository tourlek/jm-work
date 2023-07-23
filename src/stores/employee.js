import { ref } from "vue";
import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const db = firebase.firestore();

export const useEmployeeStore = defineStore("employees", () => {
  const employee = ref([]);

  let postEmployee = async (data) => {
    await db.collection("employees").add(data);
  };

  let patchEmployee = async (id, data) => {
    try {
      const employerRef = db.collection("employees").doc(id);
      await employerRef.update(data);
    } catch (error) {
      console.error("Error updating employer:", error);
    }
  };

  let fetchEmployees = async () => {
    try {
      const snapshot = await db.collection("employees").get();
      const fetchedData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
        };
      });
      employee.value = fetchedData;

      loading.value = false;
    } catch (error) {}
  };

  let fetchEmployeeId = async (employeeId) => {
    try {
      const employerRef = db.collection("employees").doc(employeeId);
      const snapshot = await employerRef.get();

      if (snapshot.exists) {
        const fetchedData = snapshot.data();
        employee.value = fetchedData;
      } else {
        console.log("employer not found");
      }
    } catch (error) {
      // Handle any errors that might occur during the database retrieval.
      console.error("Error fetching employer:", error);
    }
  };

  let deleteEmployee = async (id) => {
    await db.collection("employees").doc(id).delete();
  };

  return {
    employee,
    fetchEmployeeId,
    fetchEmployees,
    postEmployee,
    patchEmployee,
    deleteEmployee,
  };
});
