import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/blog/:id",
    name: "blogDetails",
    component: () => import("@/views/blog/DetailsPage.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy",
    component: () => import("@/views/PrivacyPage.vue"),
  },
  {
    path: "/terms-conditions",
    name: "terms",
    component: () => import("@/views/TermsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
