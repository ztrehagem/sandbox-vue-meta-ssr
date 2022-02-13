import { createSSRApp } from "vue";
import { routeMatcher } from "./router/main";
import { renderToStringWithMeta, createMetaManager, defaultConfig, deepestResolver, useMeta } from "vue-meta";
import App from "./EmptyComponent"

const resolved = routeMatcher.resolve(
  { path: "/" },
  { matched: [], path: "/", params: {}, name: null, meta: {} },
);

const metaInfo = resolved.meta.metaInfo

console.log(resolved);

const metaManager = createMetaManager(defaultConfig, deepestResolver.resolve)
const app = createSSRApp(App)
app.use(metaManager)
useMeta(metaInfo ?? {}, metaManager)
renderToStringWithMeta(app).then(([rendered, context]) => {
  console.log("renderToStringWithMeta")
  console.log("teleports", context.teleports)
})
