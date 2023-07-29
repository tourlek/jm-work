import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;
