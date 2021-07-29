import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: {
      name: "Home",
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../components/customer/Create.vue"),
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: () => import("../components/customer/Edit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || "http://localhost:8080"),
  routes,
});

export default router;
