import { ArrowRight, MapPin, User } from "@phosphor-icons/react";
import {
	accentBorderL,
	accentIcon,
	eventStart,
	formatEventTime,
	groupByDay,
	isSameDay,
	TYPE_STYLE,
} from "#/components/calendar/calendar-utils";
import { EmptyDay } from "#/components/calendar/EventDetails";
import type { CalendarEvent } from "#/lib/calendar-data";

export function ListView({
	events,
	today,
	selectedEventId,
	onSelectEvent,
	nextLabel,
	onNext,
}: {
	events: CalendarEvent[];
	today: Date;
	selectedEventId: string | null;
	onSelectEvent: (event: CalendarEvent) => void;
	nextLabel: string;
	onNext: () => void;
}) {
	const groups = [...groupByDay(events).values()];

	return (
		<div className="flex flex-col gap-6">
			{groups.length === 0 && <EmptyDay />}
			{groups.map((dayEvents) => {
				const date = eventStart(dayEvents[0]);
				const isToday = isSameDay(date, today);
				return (
					<section
						key={dayEvents[0].id}
						className="grid gap-3 sm:grid-cols-[5.5rem_1fr] sm:gap-5"
					>
						<header className="flex items-baseline gap-2 sm:flex-col sm:gap-0 sm:pt-3">
							<span className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
								{date.toLocaleDateString("en-GB", { month: "short" })}
							</span>
							<span className="font-display text-3xl font-extrabold leading-none">
								{date.getDate()}
							</span>
							<span className="font-display text-xs font-bold uppercase text-muted-foreground">
								{date.toLocaleDateString("en-GB", { weekday: "short" })}
							</span>
							{isToday && (
								<span className="mt-1 w-max rounded-full border border-foreground bg-accent px-2 py-0.5 font-display text-[10px] font-bold uppercase">
									Today
								</span>
							)}
						</header>
						<div className="flex flex-col gap-3">
							{dayEvents.map((e) => (
								<ListCard
									key={e.id}
									event={e}
									selected={e.id === selectedEventId}
									onSelect={onSelectEvent}
								/>
							))}
						</div>
					</section>
				);
			})}
			<button
				type="button"
				onClick={onNext}
				className="group mx-auto inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-white px-5 py-2.5 font-display text-sm font-bold uppercase spring-press transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
			>
				{nextLabel}
				<ArrowRight
					size={16}
					weight="bold"
					className="transition-transform group-hover:translate-x-1"
				/>
			</button>
		</div>
	);
}

function ListCard({
	event,
	selected,
	onSelect,
}: {
	event: CalendarEvent;
	selected: boolean;
	onSelect: (event: CalendarEvent) => void;
}) {
	const style = TYPE_STYLE[event.type];
	const Icon = style.icon;
	return (
		<button
			type="button"
			aria-pressed={selected}
			onClick={() => onSelect(event)}
			className={`group w-full rounded-xl border-2 border-l-[6px] border-foreground bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:comic-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${accentBorderL[style.accent]} ${
				selected ? "comic-shadow" : "comic-shadow-sm"
			}`}
		>
			<div className="flex items-start justify-between gap-4">
				<div className="min-w-0">
					<div className="flex items-center gap-2">
						<Icon
							size={20}
							weight={selected ? "bold" : "regular"}
							className={`shrink-0 ${accentIcon[style.accent]}`}
						/>
						<h3 className="font-display text-xl font-extrabold uppercase leading-tight">
							{event.title}
						</h3>
					</div>
					<p className="mt-1 font-sans text-sm font-medium">
						{formatEventTime(event)}
					</p>
				</div>
				<span className="hidden shrink-0 rounded-full border border-foreground/15 px-2.5 py-1 font-display text-[11px] font-bold uppercase sm:block">
					{style.label}
				</span>
			</div>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-foreground/10 pt-3">
				<div className="flex flex-wrap gap-x-5 gap-y-1 font-sans text-sm text-muted-foreground">
					<span className="inline-flex items-center gap-1.5">
						<User size={15} /> {event.gameMaster ?? "C&B crew"}
					</span>
					<span className="inline-flex items-center gap-1.5">
						<MapPin size={15} /> {event.location}
					</span>
				</div>
				<span className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase">
					{event.status === "full"
						? "Fully booked"
						: `${event.availableSlots} / ${event.capacity} spots available`}
					<ArrowRight
						size={16}
						weight="bold"
						className="transition-transform group-hover:translate-x-1"
					/>
				</span>
			</div>
		</button>
	);
}
