import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ConsultaIdView from "@/views/ConsultaIdView.vue";
import GuardarView from "@/views/GuardarView.vue";
import ActualizarView from "@/views/ActualizarView.vue";
import ActualizarParcialView from "@/views/ActualizarParcialView.vue";
import BorrarView from "@/views/BorrarView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/consid",
    name: "consid",
    component: ConsultaIdView,
  },
  { path: "/guardar", name: "guardar", component: GuardarView },
  { path: "/actualizar", name: "actualizar", component: ActualizarView },
  { path: "/patch", name: "patch", component: ActualizarParcialView },
  { path: "/borrar", name: "borrar", component: BorrarView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
