import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FilterChips } from "#/components/explore/FilterChips";
import { ListingHeader } from "#/components/explore/ListingHeader";
import { SearchField } from "#/components/explore/SearchField";
import { Reveal } from "#/components/Reveal";
import { SafeImg } from "#/components/SafeImg";
import { COMIC_FILTERS, comics } from "#/lib/explore-data";

export const Route = createFileRoute("/_site/explore/comics")({
	component: Comics,
});

function Comics() {
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState<string>("All");

	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		return comics.filter((c) => {
			const matchesFilter =
				filter === "All" ||
				(filter === "New Additions" ? c.isNew : c.category === filter);
			const matchesQuery =
				!q ||
				c.title.toLowerCase().includes(q) ||
				c.publisher.toLowerCase().includes(q);
			return matchesFilter && matchesQuery;
		});
	}, [query, filter]);

	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<ListingHeader
					title="The Comics"
					copy="Pick a story. Start exploring."
					accent="yellow"
					right={
						<SearchField
							value={query}
							onChange={setQuery}
							placeholder="Search the collection..."
						/>
					}
				/>
				<FilterChips
					options={COMIC_FILTERS}
					active={filter}
					onChange={setFilter}
				/>

				{results.length === 0 ? (
					<p className="font-sans text-muted-foreground py-16 text-center">
						No titles match your search. Try another shelf.
					</p>
				) : (
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
						{results.map((comic, i) => (
							<Reveal key={comic.title} index={i % 4} className="h-full">
								<div className="bg-white rounded-xl border-2 border-foreground overflow-hidden comic-shadow-sm flex flex-col h-full group cursor-pointer relative">
									{comic.isNew && (
										<div className="absolute top-3 right-3 bg-accent text-foreground font-display font-extrabold text-[10px] uppercase px-2 py-1 rounded border-2 border-foreground comic-shadow-sm transform rotate-3 z-20">
											NEW
										</div>
									)}
									<div className="border-b-2 border-foreground overflow-hidden h-[300px] flex-shrink-0 relative">
										<SafeImg
											src={comic.img}
											alt={comic.title}
											className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
										/>
									</div>
									<div className="p-3 flex flex-1 flex-col">
										<h3 className="font-display font-bold uppercase leading-tight">
											{comic.title}
										</h3>
										<div className="flex justify-between items-center mt-auto pt-2">
											<span className="text-xs font-medium text-muted-foreground uppercase">
												{comic.publisher}
											</span>
											<span className="w-2 h-2 rounded-full bg-green border border-foreground" />
										</div>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
