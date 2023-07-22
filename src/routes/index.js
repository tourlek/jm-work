import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/list-employee",
      name: "list-employee",
      component: () => import("../views/employee/index.vue"),
    },
    {
      path: "/edit-employee/:id",
      name: "edit-list-employee",
      component: () => import("../views/employee/edit/index.vue"),
    },
    {
      path: "/edit-employer/:id",
      name: "edit-employer",
      component: () => import("../views/employer/index.vue"),
    },
  ],
});

export default router;
