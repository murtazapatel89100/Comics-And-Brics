import {
	createRequestHandler,
	defaultRenderHandler,
} from "@tanstack/react-router/ssr/server";
import { describe, expect, it } from "vitest";
import { getRouter } from "#/router";

// Every page on the site and a piece of text that proves it rendered.
// A new route without an entry here fails the "covers every route" test.
const PAGES: Record<string, string> = {
	"/": "Read.",
	"/explore": "Explore Comics &amp; Brics.",
	"/explore/comics": "The Comics",
	"/explore/events": "What&#x27;s Happening.",
	"/explore/food": "The Menu",
	"/explore/legos": "The Lego Collection",
	"/games": "Game Night Starts Here.",
	"/visit": "COME HANG OUT.",
	"/contact": "Let&#x27;s Talk.",
	"/privacy": "Privacy Policy",
	"/terms": "Terms &amp; Conditions",
	"/cookies": "Cookie Policy",
	"/admin": "Good morning, Comics &amp; Brics.",
};

async function render(path: string) {
	const request = new Request(`http://localhost${path}`);
	const handler = createRequestHandler({ request, createRouter: getRouter });
	const response = await handler(defaultRenderHandler);
	return { status: response.status, html: await response.text() };
}

describe("pages", () => {
	it("covers every route", () => {
		const routes = Object.keys(getRouter().routesByPath).map(
			(p) => p.replace(/\/$/, "") || "/",
		);
		expect(Object.keys(PAGES).sort()).toEqual([...new Set(routes)].sort());
	});

	it.each(Object.entries(PAGES))("%s loads", async (path, text) => {
		const { status, html } = await render(path);
		expect(status).toBe(200);
		// Public pages render inside the site layout; /admin has its own shell.
		if (path !== "/admin") expect(html).toContain("<main");
		expect(html).toContain(text);
	});

	it("unknown paths render a 404", async () => {
		const { status } = await render("/definitely-not-a-page");
		expect(status).toBe(404);
	});
});
