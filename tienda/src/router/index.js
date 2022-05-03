import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AddProducts from "../views/AddProducts.vue";
import ProductsList from "../views/ProductsList.vue";
import ShoppingCart from "../views/ShoppingCart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/admin",
    name: "AddProducts",
    component: AddProducts,
  },
  {
    path: "/products",
    name: "ProductsList",
    component: ProductsList,
  },
  {
    path: "/shoppingcart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
