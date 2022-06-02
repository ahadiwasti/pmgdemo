export const constantRouterMap = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/Index"),
  },
  {
    path: "/films",
    name: "films",
    component: () => import("@/views/Films"),
  },
  {
    path: "/films/:slug",
    name: "singlefilms",
    component: () => import("@/components/films/view"),
  },
  {
    path: "/starships",
    name: "starships",
    component: () => import("@/views/Starships"),
  },
  {
    path: "/starship/:slug",
    name: "starship",
    component: () => import("@/components/starships/view"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
  },
];
