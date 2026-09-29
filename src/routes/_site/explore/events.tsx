import { CalendarBlank } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { EventsCalendar } from "#/components/calendar/EventsCalendar";
import { Starburst } from "#/components/calendar/Starburst";
import { ListingHeader } from "#/components/explore/ListingHeader";

export const Route = createFileRoute("/_site/explore/events")({
	component: Events,
});

function Events() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<ListingHeader
					title="What's Happening."
					copy="See what's coming up at Comics & Brics."
					accent="coral"
					right={<HeadingSticker />}
				/>

				<div className="mb-16">
					<EventsCalendar />
				</div>
			</div>
		</div>
	);
}

// Subtle comic accent beside the section heading.
function HeadingSticker() {
	return (
		<div aria-hidden="true" className="relative hidden size-24 md:block">
			<div className="absolute -inset-4 rounded-full halftone-bg" />
			<Starburst className="absolute inset-0 size-full rotate-6 animate-float" />
			<CalendarBlank
				size={34}
				weight="bold"
				className="absolute inset-0 m-auto -rotate-6"
			/>
		</div>
	);
}
