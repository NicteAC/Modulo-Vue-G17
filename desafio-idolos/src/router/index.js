import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BuscadorId from "../views/BuscadorId.vue";
import DatosPeleador from "../views/DatosPeleador.vue";
import ListaPeleadores from "../views/ListaPeleadores.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/buscador",
    name: "buscador",
    component: BuscadorId,
  },
  {
    path: "/peleadores",
    name: "peleadores",
    component: ListaPeleadores,
  },
  {
    path: "/peleadores/:id",
    component: DatosPeleador,
  },
  {
    path: "/*",
    name: "notfound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
