import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "test_canvas",
    component: () => import("../views/TestCanvas.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;