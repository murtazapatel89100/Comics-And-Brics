import { createFileRoute } from "@tanstack/react-router";
import { CategoryCard } from "#/components/explore/CategoryCard";
import { Reveal } from "#/components/Reveal";
import { categories } from "#/lib/explore-data";

export const Route = createFileRoute("/_site/explore/")({
	component: ExploreHub,
});

function ExploreHub() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase mb-6 tracking-tighter">
						Explore Comics &amp; Brics.
					</h1>
					<p className="font-sans text-xl font-bold text-muted-foreground">
						Comics, collectibles, food, events, and plenty of things to
						discover.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{categories.map((category, i) => (
						<Reveal key={category.key} index={i} className="h-full">
							<CategoryCard category={category} index={i} />
						</Reveal>
					))}
				</div>
			</div>
		</div>
	);
}
