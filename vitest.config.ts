import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// Standalone test config: skips the Start/Nitro/devtools plugins from
// vite.config.ts so pages can be rendered in-process with the app router.
export default defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [viteReact()],
	test: {
		environment: "node",
		include: ["src/**/*.test.{ts,tsx}"],
	},
});
