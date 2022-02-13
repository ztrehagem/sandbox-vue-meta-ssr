import { createRouterMatcher } from "vue-router";
import { routes } from "./routes";

export const routeMatcher = createRouterMatcher(routes, {})
