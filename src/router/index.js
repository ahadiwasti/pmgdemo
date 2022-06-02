import Vue from "vue";
import Router from "vue-router";
import { constantRouterMap } from "@/router/router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

Vue.use(Router);
const router = new Router({
  mode: "hash",
  routes: constantRouterMap,
  scrollBehavior: () => ({
    y: 0,
  }),
});

NProgress.configure({
  showSpinner: false,
}); // NProgress Configuration

// const whiteList = ["/films", "/starships", "/404"]; // no redirect whitelist
router.beforeEach((to, from, next) => {
  if (to.matched.length > 0) {
    NProgress.start();
    next();
    NProgress.done();
  } else {
    next({
      path: "/404",
      replace: true,
    });
  }

  //   // start progress bar
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next();
  //   } else {
  //     next();
  //     // if current page is not trigger afterEach hook, so manually handle it
  //   }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});

export default router;
