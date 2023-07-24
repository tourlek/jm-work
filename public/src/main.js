import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./routes/index";
import firebase from "firebase/compat/app"; // Use compat module
import "firebase/compat/firestore"; // Import Firestore module if you plan to use Firestore


import "./style.css";
const pinia = createPinia();
// Import Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
createApp(App)
  .use(router)
  .use(pinia)
  .mount("#app");
