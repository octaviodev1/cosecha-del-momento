import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogueView from "../views/CatalogueView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalogue",
      name: "catalogue",
      component: CatalogueView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
