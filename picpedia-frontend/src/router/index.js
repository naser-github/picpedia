import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/homePage",
  },

  //login page
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/index.vue"),
  },

  //homepage
  {
    path: "/homePage",
    name: "homePage",
    component: () => import("../views/homePage/index.vue"),
  },

  //add image
  {
    path: "/add-image",
    name: "addImage",
    component: () => import("../views/addImage/index.vue"),
  },

  //incase no url found
  { path: "/:notFound(.*)", redirect: "/homePage" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
