import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./routes/index";
import firebase from "firebase/compat/app"; // Use compat module
import "firebase/compat/firestore"; // Import Firestore module if you plan to use Firestore

import Cookies from "js-cookie";

import "./style.css";
import "vue3-toastify/dist/index.css";

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
const app = createApp(App);

app.use(pinia);
import { useAuthStore } from "./stores/auth.js";
const accessToken = Cookies.get("access_token");
const uid = Cookies.get("uid");
const name = Cookies.get("displayName");
const email = Cookies.get("email");
const image = Cookies.get("photoURL");
if (accessToken) {
  const store = useAuthStore();
  store.setAccessToken(accessToken, uid, name, email, image);
}

app.use(router);

app.mount("#app");
