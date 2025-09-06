import * as Sentry from "@sentry/react-router";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

Sentry.init({
    dsn: "https://fec2be7d9dc938f219756c2aac6e47db@o4509887008604160.ingest.us.sentry.io/4509887013388288",

    sendDefaultPii: true,

    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],

    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});


startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
