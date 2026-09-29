import {
	ArrowLeft,
	ArrowRight,
	CalendarBlank,
	Clock,
	DiceFive,
	MapPin,
	User,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import {
	accentBorderL,
	accentIcon,
	eventStart,
	formatEventTime,
	formatLongDate,
	TYPE_STYLE,
} from "#/components/calendar/calendar-utils";
import { Starburst } from "#/components/calendar/Starburst";
import { accentBg } from "#/components/explore/accents";
import type { CalendarEvent } from "#/lib/calendar-data";

export const primaryCta =
	"bg-accent text-foreground font-display font-bold uppercase tracking-wider px-6 py-3 rounded-xl border-2 border-foreground comic-shadow-sm hover:-translate-y-0.5 hover:comic-shadow transition-all spring-press flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2";

// ---- Pieces ----------------------------------------------------------------

export function TypeTag({ event }: { event: CalendarEvent }) {
	const style = TYPE_STYLE[event.type];
	const Icon = style.icon;
	return (
		<span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-white px-2.5 py-1 text-foreground font-display text-[11px] font-bold uppercase tracking-wide">
			<span className={`size-2 rounded-full ${accentBg[style.accent]}`} />
			<Icon size={13} className={accentIcon[style.accent]} />
			{style.label}
		</span>
	);
}

function MetaRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
	return (
		<div className="flex items-start gap-2.5 font-sans text-sm font-medium">
			<span className="mt-0.5 shrink-0 text-muted-foreground">{icon}</span>
			<span>{children}</span>
		</div>
	);
}

export function GameMaster({ name }: { name: string | null }) {
	return (
		<div className="flex items-center gap-3">
			<span
				aria-hidden="true"
				className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-foreground bg-muted font-display text-sm font-extrabold"
			>
				{name ? name[0] : <User size={16} />}
			</span>
			<div className="leading-tight">
				<div className="font-display text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
					{name ? "Game Master" : "Hosted by"}
				</div>
				<div className="font-display font-bold">{name ?? "The C&B crew"}</div>
			</div>
		</div>
	);
}

export function SpotsMeter({ event }: { event: CalendarEvent }) {
	const { availableSlots, capacity, status } = event;
	const accent = TYPE_STYLE[event.type].accent;
	return (
		<div>
			<div className="mb-1.5 flex items-baseline justify-between gap-2 font-display text-xs font-bold uppercase tracking-wide">
				<span>
					{status === "full"
						? "Fully booked"
						: `${availableSlots} / ${capacity} spots available`}
				</span>
				{status === "filling" && (
					<span className="text-coral">Filling fast</span>
				)}
			</div>
			<div className="h-2 overflow-hidden rounded-full border border-foreground/20 bg-muted/50">
				<div
					className={`h-full rounded-full transition-[width] duration-500 ${accentBg[accent]}`}
					style={{ width: `${(availableSlots / capacity) * 100}%` }}
				/>
			</div>
		</div>
	);
}

export function BookingPlaceholder() {
	return (
		<button
			type="button"
			disabled
			aria-disabled="true"
			className="relative flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-xl border-2 border-dashed border-foreground/30 px-3 py-3 font-display font-bold uppercase tracking-wider text-muted-foreground"
		>
			<span className="whitespace-nowrap">Book a spot</span>
			<span className="whitespace-nowrap rounded-full bg-muted px-2 py-0.5 text-[10px] tracking-wide text-foreground">
				Coming soon
			</span>
		</button>
	);
}

// ---- Event summary (panel, sheet) ------------------------------------------

export function EventSummary({
	event,
	onView,
}: {
	event: CalendarEvent;
	onView: (event: CalendarEvent) => void;
}) {
	return (
		<div className="flex flex-col gap-5">
			<div>
				<TypeTag event={event} />
				<h3 className="mt-3 font-display text-3xl font-extrabold uppercase leading-none">
					{event.title}
				</h3>
			</div>

			<div className="flex flex-col gap-2">
				<MetaRow icon={<CalendarBlank size={16} />}>
					{formatLongDate(eventStart(event))}
				</MetaRow>
				<MetaRow icon={<Clock size={16} />}>{formatEventTime(event)}</MetaRow>
				<MetaRow icon={<MapPin size={16} />}>{event.location}</MetaRow>
				<MetaRow icon={<DiceFive size={16} />}>{event.game}</MetaRow>
			</div>

			<div className="border-t-2 border-dashed border-foreground/15 pt-4">
				<GameMaster name={event.gameMaster} />
			</div>

			<SpotsMeter event={event} />

			<p className="font-sans text-sm text-muted-foreground">
				{event.description}
			</p>

			<div className="flex flex-col gap-2.5">
				<button
					type="button"
					onClick={() => onView(event)}
					className={primaryCta}
				>
					View event <ArrowRight size={18} weight="bold" />
				</button>
				<BookingPlaceholder />
			</div>
		</div>
	);
}

// ---- Day agenda + empty state ----------------------------------------------

export function EmptyDay() {
	return (
		<div className="flex flex-col items-center py-8 text-center">
			<div className="relative mb-4 size-16">
				<Starburst className="absolute inset-0 size-full -rotate-6" />
				<DiceFive
					size={26}
					weight="bold"
					className="absolute inset-0 m-auto rotate-12"
				/>
			</div>
			<p className="font-display text-lg font-extrabold uppercase">
				Nothing on the table.
			</p>
			<p className="mt-1 font-sans text-sm text-muted-foreground">
				No events are scheduled for this day yet.
			</p>
		</div>
	);
}

export function AgendaItem({
	event,
	onSelect,
	onView,
}: {
	event: CalendarEvent;
	onSelect: (event: CalendarEvent) => void;
	onView?: (event: CalendarEvent) => void;
}) {
	const style = TYPE_STYLE[event.type];
	const Icon = style.icon;
	return (
		<div
			className={`rounded-xl border-2 border-l-[5px] border-foreground bg-white p-4 transition-all hover:-translate-y-0.5 hover:comic-shadow-sm ${accentBorderL[style.accent]}`}
		>
			<button
				type="button"
				onClick={() => onSelect(event)}
				className="block w-full rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
			>
				<span className="flex items-center gap-2">
					<Icon size={18} className={accentIcon[style.accent]} />
					<span className="font-display text-lg font-extrabold uppercase leading-tight">
						{event.title}
					</span>
				</span>
				<span className="mt-1 block font-sans text-sm font-medium">
					{formatEventTime(event)}
				</span>
				<span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-muted-foreground">
					<span className="inline-flex items-center gap-1">
						<User size={13} /> {event.gameMaster ?? "C&B crew"}
					</span>
					<span className="inline-flex items-center gap-1">
						<MapPin size={13} /> {event.location}
					</span>
					<span className="font-display font-bold uppercase">
						{event.status === "full"
							? "Full"
							: `${event.availableSlots} / ${event.capacity} spots`}
					</span>
				</span>
			</button>
			{onView && (
				<button
					type="button"
					onClick={() => onView(event)}
					className="mt-3 inline-flex items-center gap-1.5 rounded-lg border-2 border-foreground bg-white px-3 py-1.5 font-display text-xs font-bold uppercase transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
				>
					View event <ArrowRight size={14} weight="bold" />
				</button>
			)}
		</div>
	);
}

export function DayAgenda({
	date,
	events,
	onSelectEvent,
	onView,
}: {
	date: Date;
	events: CalendarEvent[];
	onSelectEvent: (event: CalendarEvent) => void;
	onView?: (event: CalendarEvent) => void;
}) {
	return (
		<div>
			<div className="mb-4 flex items-baseline justify-between gap-2">
				<h3 className="font-display text-xl font-extrabold uppercase">
					{formatLongDate(date)}
				</h3>
				{events.length > 0 && (
					<span className="font-display text-xs font-bold uppercase text-muted-foreground">
						{events.length} {events.length === 1 ? "event" : "events"}
					</span>
				)}
			</div>
			{events.length === 0 ? (
				<EmptyDay />
			) : (
				<div className="flex flex-col gap-3">
					{events.map((e) => (
						<AgendaItem
							key={e.id}
							event={e}
							onSelect={onSelectEvent}
							onView={onView}
						/>
					))}
				</div>
			)}
		</div>
	);
}

// ---- Desktop side panel ----------------------------------------------------

export function DetailsPanel({
	date,
	dayEvents,
	event,
	onSelectEvent,
	onBack,
	onView,
}: {
	date: Date;
	dayEvents: CalendarEvent[];
	event: CalendarEvent | null;
	onSelectEvent: (event: CalendarEvent) => void;
	onBack: () => void;
	onView: (event: CalendarEvent) => void;
}) {
	return (
		<aside
			aria-live="polite"
			className="relative overflow-hidden rounded-2xl border-2 border-foreground bg-white p-6 comic-shadow"
		>
			<div className="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full halftone-bg" />
			<Starburst className="pointer-events-none absolute right-3 top-3 size-7 rotate-12" />

			<div className="relative mb-4 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
				{event ? "Selected event" : "On this day"}
			</div>

			<div
				key={event?.id ?? date.toDateString()}
				className="relative animate-in fade-in slide-in-from-bottom-1 duration-300"
			>
				{event ? (
					<>
						<button
							type="button"
							onClick={onBack}
							className="mb-4 inline-flex items-center gap-1.5 rounded-md font-display text-xs font-bold uppercase text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
						>
							<ArrowLeft size={14} /> All events this day
						</button>
						<EventSummary event={event} onView={onView} />
					</>
				) : (
					<DayAgenda
						date={date}
						events={dayEvents}
						onSelectEvent={onSelectEvent}
					/>
				)}
			</div>
		</aside>
	);
}
