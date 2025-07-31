"use client";

import React from "react";

const stack = {
  frontend: {
    framework: "Vike",
    uiFramework: "React",
    css: ["TailwindCSS", "Compiled"],
    uiComponents: ["shadcn/ui", "daisyUI"],
  },
  data: {
    auth: ["Auth.js", "Auth0"],
    dataFetching: ["Telefunc", "tRPC", "ts-rest"],
    server: ["Hono", "Express"],
    database: ["Drizzle", "SQLite", "Prisma"],
  },
  deployment: {
    hosting: ["Vercel", "Netlify", "AWS", "Cloudflare"],
  },
  utilities: {
    linter: ["ESLint", "Prettier", "Biome"],
    analytics: ["Plausible.io", "Google Analytics", "Segment"],
    errorTracking: ["Sentry", "Logrocket"],
  },
  meta: {
    projectName: "my-web-app",
    preset: "Next.js",
    typescript: true,
    cms: null,
    dateCreated: "2025-07-27T20:00:00Z",
  },
};


const page = () => {
  return <div>page</div>;
};

export default page;
