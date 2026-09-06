import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "#/components/site/Footer";
import { Nav } from "#/components/site/Nav";

export const Route = createFileRoute("/_site")({ component: SiteLayout });

function SiteLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-accent selection:text-foreground">
			<Nav />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
