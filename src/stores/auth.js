import { ref } from "vue";
import { defineStore } from "pinia";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile as firebaseUpdateProfile, // Rename the function to avoid conflict with the variable name
} from "firebase/auth";
import { toast } from "vue3-toastify";

import Cookies from "js-cookie";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const auth = getAuth();
  const router = useRouter();

  let user = ref([]);
  let accessToken = ref("");
  let id = ref();
  let profile = ref("");

  let authUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        user.value = userCredential.user;
        if (!user.value.displayName) {
          user.value.displayName = email;
        }
        Cookies.set("access_token", user.value.accessToken, { expires: 7 });
        Cookies.set("uid", user.value.uid, { expires: 7 });
        Cookies.set("displayName", user.value.displayName, { expires: 7 });
        Cookies.set("email", user.value.email, { expires: 7 });
        Cookies.set("photoURL", user.value.photoURL, { expires: 7 });
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 5000,
          type: "error",
        });
      });
  };

  let setAccessToken = (token, uid, name, email, image) => {
    accessToken.value = token;
    id.value = uid;
    profile.value = {
      name,
      email,
      image,
    };
  };

  let logout = () => {
    signOut(auth)
      .then(() => {
        Cookies.remove("access_token");
        Cookies.remove("profile");
        accessToken.value = "";
        profile.value = "";
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 5000,
          type: "error",
        });
      });
  };

  let update = async (name, image) => {
    try {
      await firebaseUpdateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
      Cookies.set("displayName", auth.currentUser.displayName, { expires: 7 });
      Cookies.set("email", auth.currentUser.email, { expires: 7 });
      Cookies.set("photoURL", auth.currentUser.photoURL, { expires: 7 });
      console.log("Profile updated successfully!", auth.currentUser);
    } catch (error) {
      toast(error.message, {
        autoClose: 5000,
        type: "error",
      });
    }
  };

  return {
    setAccessToken,
    authUser,
    update,
    logout,
    user,
    profile,
    accessToken,
  };
});
