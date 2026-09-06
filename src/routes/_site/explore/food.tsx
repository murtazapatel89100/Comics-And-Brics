import { createFileRoute } from "@tanstack/react-router";
import { Coffee } from "lucide-react";
import { useMemo, useState } from "react";
import { FilterChips } from "#/components/explore/FilterChips";
import { ListingHeader } from "#/components/explore/ListingHeader";
import { Reveal } from "#/components/Reveal";
import {
	dailySpecial,
	FOOD_FILTERS,
	type MenuItem,
	menuFixed,
} from "#/lib/explore-data";

export const Route = createFileRoute("/_site/explore/food")({
	component: Food,
});

type Tab = "fixed" | "specials";

function Food() {
	const [tab, setTab] = useState<Tab>("fixed");
	const [filter, setFilter] = useState<string>("All");

	const items = useMemo(
		() =>
			filter === "All" ? menuFixed : menuFixed.filter((m) => m.cat === filter),
		[filter],
	);

	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<ListingHeader
					title="The Menu"
					copy="Something good to eat while you read, play and hang out."
					accent="green"
				/>

				<div className="flex gap-4 border-b-4 border-foreground mb-8">
					<TabButton active={tab === "fixed"} onClick={() => setTab("fixed")}>
						Fixed Menu
					</TabButton>
					<TabButton
						active={tab === "specials"}
						onClick={() => setTab("specials")}
					>
						Daily Specials
					</TabButton>
				</div>

				{tab === "fixed" ? (
					<>
						<FilterChips
							options={FOOD_FILTERS}
							active={filter}
							onChange={setFilter}
						/>
						{filter === "All" && (
							<div className="mb-6">
								<DailySpecialCard />
							</div>
						)}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
							{items.map((item, i) => (
								<Reveal key={item.title} index={i % 2} className="h-full">
									<MenuCard item={item} />
								</Reveal>
							))}
						</div>
						{items.length === 0 && (
							<p className="font-sans text-muted-foreground py-16 text-center">
								Nothing in this category right now.
							</p>
						)}
					</>
				) : (
					<div className="mb-16">
						<DailySpecialCard />
					</div>
				)}
			</div>
		</div>
	);
}

function TabButton({
	active,
	onClick,
	children,
}: {
	active: boolean;
	onClick: () => void;
	children: string;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`font-display font-extrabold uppercase text-xl pb-3 transition-colors ${
				active
					? "border-b-4 border-foreground -mb-1 text-foreground"
					: "text-muted-foreground hover:text-foreground"
			}`}
		>
			{children}
		</button>
	);
}

function DailySpecialCard() {
	return (
		<div className="bg-green text-foreground rounded-2xl border-4 border-foreground p-8 comic-shadow flex flex-col md:flex-row items-center gap-8 transform -rotate-1">
			<div className="bg-white w-32 h-32 md:w-48 md:h-48 rounded-xl border-4 border-foreground flex-shrink-0 flex items-center justify-center transform rotate-3">
				<Coffee size={48} className="text-green opacity-50" />
			</div>
			<div className="flex-1 text-center md:text-left">
				<span className="inline-block bg-white text-foreground font-extrabold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase mb-3 transform -rotate-2">
					Today's Special
				</span>
				<h3 className="font-display font-extrabold text-3xl md:text-4xl uppercase mb-2">
					{dailySpecial.title}
				</h3>
				<p className="font-sans font-bold text-foreground/80 mb-4 text-lg">
					{dailySpecial.desc}
				</p>
				<div className="flex items-center justify-center md:justify-start gap-4">
					<span className="font-display font-extrabold text-2xl">
						{dailySpecial.price}
					</span>
					<span className="font-display font-bold text-sm uppercase bg-white border-2 border-foreground px-3 py-1 rounded-md">
						Available Today
					</span>
				</div>
			</div>
		</div>
	);
}

function MenuCard({ item }: { item: MenuItem }) {
	return (
		<div className="bg-white rounded-xl border-2 border-foreground p-6 comic-shadow flex items-start gap-4 h-full">
			<div className="w-20 h-20 bg-background border-2 border-foreground rounded-lg flex-shrink-0 flex items-center justify-center">
				<Coffee size={24} className="text-muted-foreground opacity-50" />
			</div>
			<div className="flex-1">
				<div className="flex justify-between items-start mb-1 gap-3">
					<h3 className="font-display font-bold text-xl uppercase">
						{item.title}
					</h3>
					<span className="font-display font-extrabold">{item.price}</span>
				</div>
				<p className="font-sans text-muted-foreground text-sm mb-3">
					{item.desc}
				</p>
				<span className="text-xs font-bold text-muted-foreground uppercase border border-muted-foreground/30 px-2 py-1 rounded-md">
					{item.cat}
				</span>
			</div>
		</div>
	);
}
