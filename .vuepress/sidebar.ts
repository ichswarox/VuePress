import { SidebarConfig4Multiple } from "vuepress/config";
import carPartsSideBar from "./sidebars/carPartsSideBar";
// @ts-ignore
export default {
  "/auto-parts/": carPartsSideBar,
  "/author/": ["", "personal-experience"],
  "/关于我们/": ["", "个人经历"],
  // 降级，默认根据文章标题渲染侧边栏
  "/": "auto",
} as SidebarConfig4Multiple;
