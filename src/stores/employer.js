import { ref } from "vue";
import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const db = firebase.firestore();

export const useEmployerStore = defineStore("employer", () => {
  const employer = ref([]);
  let postEmployer = async (data) => {
    await db.collection("employer").add(data);
  };

  let patchEmployer = async (employerId, data) => {
    try {
      const employerRef = db.collection("employer").doc(employerId);
      await employerRef.update(data);
    } catch (error) {
      console.error("Error updating employer:", error);
    }
  };

  let fetchEmployer = async () => {
    try {
      const snapshot = await db.collection("employer").get();
      const fetchedData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
        };
      });
      employer.value = fetchedData;
    } catch (error) {
      console.log(error);
    }
  };
  let fetchEmployerId = async (employerId) => {
    try {
      const employerRef = db.collection("employer").doc(employerId);
      const snapshot = await employerRef.get();

      if (snapshot.exists) {
        const fetchedData = snapshot.data();
        employer.value = fetchedData;
      } else {
        console.log("employer not found");
      }
    } catch (error) {
      // Handle any errors that might occur during the database retrieval.
      console.error("Error fetching employer:", error);
    }
  };

  let deleteEmployer = async (id) => {
    await db.collection("employers").doc(id).delete();
  };

  return {
    employer,
    fetchEmployerId,
    fetchEmployer,
    postEmployer,
    patchEmployer,
    deleteEmployer,
  };
});
