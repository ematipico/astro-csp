// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    experimental: {
        // These are the defaults when you set csp: true
        csp: {
            algorithm: "SHA-256",
            directives: [],
            scriptDirective: {
                hashes: [],
                resources: [],
                strictDynamic: true,
            },
            styleDirective: {
                hashes: [],
                resources: [],
            },
        },
    },
    integrations: [react()],
    // To be used later
    adapter: node({
        mode: "standalone",
    }),
});
