import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/list-employee",
    name: "list-employee",
    component: () => import("../views/employee/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/edit-employee/:id",
    name: "edit-list-employee",
    component: () => import("../views/employee/edit/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/edit-employer/:id",
    name: "edit-employer",
    component: () => import("../views/employer/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile/index.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/home",
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const authStore = useAuthStore();
  if (requiresAuth && !authStore.accessToken) {
    next("/login");
  } else if (to.path === "/login" && authStore.accessToken) {
    next("/home");
  } else {
    next();
  }
});
export default router;
