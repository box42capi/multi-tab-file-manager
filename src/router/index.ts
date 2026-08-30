import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

/**
 * 内部页面路由，对应 ufm:// 内部地址（如 ufm://home、ufm://settings）。
 * 内部页面与文件目录一样，都以标签页形式打开。
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", name: "home", component: HomePage }],
});

export default router;
