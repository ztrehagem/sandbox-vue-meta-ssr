import { routeMatcher } from "./router/main";

const resolved = routeMatcher.resolve(
  { path: "/" },
  { matched: [], path: "/", params: {}, name: null, meta: {} },
);

console.log(resolved);
