import { MetaInfo } from "./meta";

declare module "vue-router" {
  export interface RouteMeta {
    metaInfo?: MetaInfo;
  }
}
