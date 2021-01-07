import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Usuarios from "../views/Usuarios.vue";
import Usuario from "../views/Usuario.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/usuarios/:id",
    name: "usuario",
    component: Usuario,
    props: true
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: Usuarios
  }
  // {
  //   path: "/usuarios",
  //   name: "usuarios",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Usuarios.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
