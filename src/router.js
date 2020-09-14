import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/bounce",
      name: "bounce",
      component: () =>
        import(/* webpackChunkName: "bounce" */ "./views/bounce"),
    },
    {
      path: "/mobile",
      name: "mobile",
      component: () =>
        import(/* webpackChunkName: "mobile" */ "./views/mobile"),
    },
    {
      path: "/hospital",
      name: "hospital",
      component: () =>
        import(/* webpackChunkName: "hospital" */ "./views/hospital"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import(/* webpackChunkName: "blog" */ "./views/blog"),
    },
    {
      path: "/course",
      name: "course",
      component: () =>
        import(/* webpackChunkName: "course" */ "./views/course"),
    },
    {
      path: "/slider",
      name: "slider",
      component: () =>
        import(/* webpackChunkName: "slider" */ "./views/slider"),
    },
  ],
});
