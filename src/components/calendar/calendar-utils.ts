import {
	CalendarStar,
	DiceFive,
	type Icon,
	Trophy,
	UsersThree,
} from "@phosphor-icons/react";
import type { CalendarEvent, EventType } from "#/lib/calendar-data";
import type { Accent } from "#/lib/explore-data";

// ---- Event types → C&B palette ---------------------------------------------

export const TYPE_STYLE: Record<
	EventType,
	{ label: string; icon: Icon; accent: Accent }
> = {
	"game-session": { label: "Game Session", icon: DiceFive, accent: "blue" },
	tournament: { label: "Tournament", icon: Trophy, accent: "coral" },
	community: { label: "Community", icon: UsersThree, accent: "green" },
	special: { label: "Special Event", icon: CalendarStar, accent: "yellow" },
};

// Thin left accent line used by chips and cards.
export const accentBorderL: Record<Accent, string> = {
	yellow: "border-l-accent",
	blue: "border-l-blue",
	green: "border-l-green",
	coral: "border-l-coral",
};

// Icon tint. Yellow is too light for glyphs on cream, so it falls back to ink.
export const accentIcon: Record<Accent, string> = {
	yellow: "text-foreground",
	blue: "text-blue",
	green: "text-green",
	coral: "text-coral",
};

// ---- Dates -----------------------------------------------------------------

export const startOfDay = (d: Date) =>
	new Date(d.getFullYear(), d.getMonth(), d.getDate());

export const addDays = (d: Date, n: number) =>
	new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

export const startOfMonth = (d: Date) =>
	new Date(d.getFullYear(), d.getMonth(), 1);

export const addMonths = (d: Date, n: number) =>
	new Date(d.getFullYear(), d.getMonth() + n, 1);

// Weeks start on Monday.
export const startOfWeek = (d: Date) => addDays(d, -((d.getDay() + 6) % 7));

export const isSameDay = (a: Date, b: Date) =>
	a.getFullYear() === b.getFullYear() &&
	a.getMonth() === b.getMonth() &&
	a.getDate() === b.getDate();

export const isSameMonth = (a: Date, b: Date) =>
	a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

export const dateKey = (d: Date) =>
	`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

/** Full Monday-first weeks covering the month of `d`. */
export function monthGrid(d: Date): Date[] {
	const first = startOfWeek(startOfMonth(d));
	const lastOfMonth = addDays(addMonths(d, 1), -1);
	const lastCell = addDays(startOfWeek(lastOfMonth), 6);
	const days: Date[] = [];
	for (let day = first; day <= lastCell; day = addDays(day, 1)) days.push(day);
	return days;
}

export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const timeFmt = new Intl.DateTimeFormat("en-US", {
	hour: "numeric",
	minute: "2-digit",
});

export const formatTime = (d: Date) => timeFmt.format(d);

export const formatShortTime = (d: Date) =>
	d.getMinutes() === 0
		? new Intl.DateTimeFormat("en-US", { hour: "numeric" }).format(d)
		: timeFmt.format(d);

export const formatMonth = (d: Date) =>
	d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });

export const formatLongDate = (d: Date) =>
	d.toLocaleDateString("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long",
	});

export const formatShortDate = (d: Date) =>
	d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });

// ---- Events ----------------------------------------------------------------

export const eventStart = (e: CalendarEvent) => new Date(e.startTime);
export const eventEnd = (e: CalendarEvent) => new Date(e.endTime);

export const formatEventTime = (e: CalendarEvent) =>
	`${formatTime(eventStart(e))} – ${formatTime(eventEnd(e))}`;

export function groupByDay(events: CalendarEvent[]) {
	const map = new Map<string, CalendarEvent[]>();
	for (const e of events) {
		const key = dateKey(eventStart(e));
		const list = map.get(key);
		if (list) list.push(e);
		else map.set(key, [e]);
	}
	return map;
}
