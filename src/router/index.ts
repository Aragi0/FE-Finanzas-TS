import { createRouter, createWebHistory } from "vue-router";
import MasterLayout from "../layouts/Master.vue";

const routes = [
  {
    path: "/",
    component: MasterLayout,
    children: [
      {
        path: "/Home",
        component: () => import("@views/Home.vue"),
      },
      {
        path: "/Test",
        component: () => import("@views/Test.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
