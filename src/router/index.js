import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogueView from "../views/CatalogueView.vue";
import ContactView from "../views/ContactView.vue";
import TermsView from "../views/TermsView.vue";
import PolicyView from "../views/PolicyView.vue";

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
    {
      path: "/terms",
      name: "terms",
      component: TermsView,
    },
    {
      path: "/policy",
      name: "policy",
      component: PolicyView,
    },
    {
      path: "/:catchAll(.*)",
      name: "404",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  next();
});

export default router;
