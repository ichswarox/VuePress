import { SidebarConfig4Multiple } from "vuepress/config";
import roadmapSideBar from "./sidebars/roadmapSideBar";
import productSideBar from "./sidebars/productSideBar";
import bugFixManual from "./sidebars/bugFixManual";
import carPartsSideBar from "./sidebars/carPartsSideBar";
// @ts-ignore
export default {
  "/学习路线/": roadmapSideBar,
  "/产品服务/": productSideBar,
  "/Bug手册/": bugFixManual,
  "/关于我们/": ["", "个人经历"],
  // 降级，默认根据文章标题渲染侧边栏
  "/": "auto",
} as SidebarConfig4Multiple;
