import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FilterChips } from "#/components/explore/FilterChips";
import { ListingHeader } from "#/components/explore/ListingHeader";
import { Reveal } from "#/components/Reveal";
import { type CafeEvent, EVENT_FILTERS, events } from "#/lib/explore-data";

export const Route = createFileRoute("/_site/explore/events")({
	component: Events,
});

function Events() {
	const [filter, setFilter] = useState<string>("All");

	const results = useMemo(
		() => (filter === "All" ? events : events.filter((e) => e.cat === filter)),
		[filter],
	);

	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<ListingHeader
					title="What's Happening"
					copy="There's always something happening at Comics & Brics."
					accent="coral"
				/>
				<FilterChips
					options={EVENT_FILTERS}
					active={filter}
					onChange={setFilter}
				/>

				<div className="space-y-6 mb-16">
					{results.map((event, i) => (
						<Reveal key={event.title} index={i % 4}>
							<EventRow event={event} />
						</Reveal>
					))}
				</div>

				{results.length === 0 && (
					<p className="font-sans text-muted-foreground py-16 text-center">
						No events in that category yet.
					</p>
				)}
			</div>
		</div>
	);
}

function EventRow({ event }: { event: CafeEvent }) {
	const [registered, setRegistered] = useState(false);
	const isFull = event.status === "Full";

	return (
		<div className="bg-white rounded-xl border-2 border-foreground p-6 md:p-8 comic-shadow flex flex-col md:flex-row md:items-center justify-between gap-6 hover:comic-shadow-hover hover:-translate-y-1 transition-all group">
			<div className="flex-1">
				<div className="flex flex-wrap items-center gap-3 mb-3">
					<span className="font-display font-bold text-sm uppercase bg-coral text-white border-2 border-foreground px-3 py-1 rounded-full">
						{event.date}
					</span>
					<span className="font-display font-bold text-xs uppercase text-muted-foreground border border-muted-foreground/30 px-2 py-1 rounded-md">
						{event.cat}
					</span>
				</div>
				<h3 className="font-display font-extrabold text-3xl uppercase mb-2 group-hover:text-coral transition-colors">
					{event.title}
				</h3>
				<p className="font-sans font-medium text-muted-foreground">
					{event.desc}
				</p>
			</div>
			<div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0 border-t-2 border-dashed border-foreground/20 md:border-none pt-4 md:pt-0">
				<div className="flex items-center gap-2">
					<span
						className={`w-3 h-3 rounded-full border-2 border-foreground ${registered ? "bg-green" : event.dot}`}
					/>
					<span className="font-display font-bold text-sm uppercase">
						{registered ? "Registered" : event.status}
					</span>
				</div>
				<button
					type="button"
					disabled={isFull}
					onClick={() => setRegistered((r) => !r)}
					className={`w-full md:w-auto font-display font-extrabold uppercase px-6 py-3 rounded-lg border-2 border-foreground comic-shadow-sm transition-all ${
						isFull
							? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
							: registered
								? "bg-green text-foreground active:translate-y-1"
								: "bg-white hover:bg-foreground hover:text-white active:translate-y-1"
					}`}
				>
					{isFull ? "Full" : registered ? "Registered ✓" : "RSVP"}
				</button>
			</div>
		</div>
	);
}
