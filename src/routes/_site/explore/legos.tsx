import { createFileRoute } from "@tanstack/react-router";
import { Package } from "lucide-react";
import { useMemo, useState } from "react";
import { FilterChips } from "#/components/explore/FilterChips";
import { ListingHeader } from "#/components/explore/ListingHeader";
import { SearchField } from "#/components/explore/SearchField";
import { Reveal } from "#/components/Reveal";
import { LEGO_FILTERS, type LegoSet, legoSets } from "#/lib/explore-data";

export const Route = createFileRoute("/_site/explore/legos")({
	component: Legos,
});

function Legos() {
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState<string>("All");

	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		return legoSets.filter((s) => {
			const matchesFilter =
				filter === "All" ||
				(filter === "Complete Sets" && s.badge === "COMPLETE SET") ||
				(filter === "New Additions" && s.badge === "NEW") ||
				(filter === "Available" && s.status === "Available");
			const matchesQuery =
				!q ||
				s.title.toLowerCase().includes(q) ||
				s.theme.toLowerCase().includes(q);
			return matchesFilter && matchesQuery;
		});
	}, [query, filter]);

	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<ListingHeader
					title="The Lego Collection"
					copy="Explore complete sets and new additions."
					accent="blue"
					right={
						<SearchField
							value={query}
							onChange={setQuery}
							placeholder="Search LEGO sets..."
						/>
					}
				/>
				<FilterChips
					options={LEGO_FILTERS}
					active={filter}
					onChange={setFilter}
				/>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
					{results.map((lego, i) => (
						<Reveal key={lego.title} index={i % 4} className="h-full">
							<LegoCard lego={lego} />
						</Reveal>
					))}
				</div>

				{results.length === 0 && (
					<p className="font-sans text-muted-foreground py-16 text-center">
						No sets match those filters.
					</p>
				)}
			</div>
		</div>
	);
}

function LegoCard({ lego }: { lego: LegoSet }) {
	const [reserved, setReserved] = useState(false);
	return (
		<div className="bg-white rounded-xl border-2 border-foreground overflow-hidden comic-shadow flex flex-col h-full group relative">
			{lego.badge && (
				<div className="absolute top-3 right-3 bg-accent text-foreground font-display font-extrabold text-[10px] uppercase px-2 py-1 rounded border-2 border-foreground comic-shadow-sm transform rotate-3 z-20">
					{lego.badge}
				</div>
			)}
			<div className="h-48 bg-blue/10 border-b-2 border-foreground flex items-center justify-center p-6 relative">
				<Package
					size={64}
					className="text-blue opacity-50 group-hover:scale-110 transition-transform"
				/>
			</div>
			<div className="p-5 flex flex-col flex-1">
				<span className="text-xs font-bold text-muted-foreground uppercase mb-1">
					{lego.theme}
				</span>
				<h3 className="font-display font-bold text-xl uppercase mb-4">
					{lego.title}
				</h3>
				<div className="mt-auto flex justify-between items-center">
					<span className="font-display font-bold text-xs uppercase flex items-center gap-1">
						<span
							className={`w-2 h-2 rounded-full border border-foreground ${reserved ? "bg-coral" : lego.dot}`}
						/>{" "}
						{reserved ? "Reserved" : lego.status}
					</span>
					{lego.status === "Available" && (
						<button
							type="button"
							onClick={() => setReserved((r) => !r)}
							className={`font-bold uppercase text-xs px-3 py-1 border-2 border-foreground rounded-md spring-press transition-colors ${
								reserved
									? "bg-blue text-white"
									: "bg-white text-foreground hover:bg-blue hover:text-white"
							}`}
						>
							{reserved ? "Undo" : "Reserve"}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
