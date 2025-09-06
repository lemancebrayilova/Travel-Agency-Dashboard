import * as Sentry from "@sentry/react-router";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
    dsn: "https://fec2be7d9dc938f219756c2aac6e47db@o4509887008604160.ingest.us.sentry.io/4509887013388288",

    sendDefaultPii: true,

    integrations: [nodeProfilingIntegration()],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
});