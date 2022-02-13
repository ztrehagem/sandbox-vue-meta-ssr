import { RouteRecordRaw } from "vue-router";
import { MetaSource } from "vue-meta";

declare module "vue-router" {
  export interface RouteMeta {
    metaInfo?: MetaSource
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../pages/index.vue"),
    meta: {
      metaInfo: {
        htmlAttrs: { lang: "ja" },
        // meta: [
        //   { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
        // ],
      },
    },
  }
]
