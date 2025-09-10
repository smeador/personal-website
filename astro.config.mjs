import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [mdx(), react(), tailwind()],

  // TODO: Update with actual domain
  site: "https://meador.me",

  adapter: vercel(),
});
