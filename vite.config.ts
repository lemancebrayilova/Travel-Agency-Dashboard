import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "leman73",
  project: "travel-agency-dashboard",
  authToken: "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"
};

export default defineConfig(config =>{
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/],
    }
  };
});