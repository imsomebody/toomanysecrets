import FullPageLayout from "./FullPageLayout.vue";
import MainLayout from "./MainLayout.vue";

export type LayoutName = "full-page" | "main";
export type LayoutDictionary = {
  [key in LayoutName]: any;
};

export const layouts: LayoutDictionary = {
  "full-page": FullPageLayout,
  main: MainLayout,
};
