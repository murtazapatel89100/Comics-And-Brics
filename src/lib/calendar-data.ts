// ============================================================================
// EVENTS CALENDAR — DATA LAYER
//
// MOCK DATA ONLY. Everything below the "MOCK" banner is a stand-in for the
// future C&B events API. The UI only depends on the `CalendarEvent` shape and
// `getEvents()`, so swapping the mock generator for a real `fetch` later must
// not require any component changes.
// ============================================================================

export type EventType = "game-session" | "tournament" | "community" | "special";

// "open" → bookable later, "filling" → few spots left, "full" → no spots.
export type EventStatus = "open" | "filling" | "full";

export type CalendarEvent = {
	id: string;
	title: string;
	description: string;
	type: EventType;
	location: string;
	game: string;
	// Community nights are hosted by the crew and have no single GM.
	gameMaster: string | null;
	// ISO 8601 date-times, as an API would return them.
	startTime: string;
	endTime: string;
	capacity: number;
	availableSlots: number;
	status: EventStatus;
};

export const EVENT_TYPES: { value: EventType; label: string }[] = [
	{ value: "game-session", label: "Game Sessions" },
	{ value: "tournament", label: "Tournaments" },
	{ value: "community", label: "Community Events" },
	{ value: "special", label: "Special Events" },
];

// Location names only — no invented street addresses.
export const LOCATIONS = ["C&B Pune", "C&B Mumbai"] as const;

export type EventRange = { from: Date; to: Date };

/**
 * Fetch events that start inside `range`.
 * Later: `fetch(`/api/events?from=…&to=…`).then((r) => r.json())`.
 */
export async function getEvents(range: EventRange): Promise<CalendarEvent[]> {
	await new Promise((resolve) => setTimeout(resolve, 650));
	return generateMockEvents(range);
}

// ============================================================================
// MOCK — replace with API data. Deterministic (no Math.random) so the same
// range always yields the same events.
// ============================================================================

type Template = Omit<
	CalendarEvent,
	"id" | "startTime" | "endTime" | "availableSlots" | "status"
> & {
	key: string;
	start: [hour: number, minute: number];
	end: [hour: number, minute: number];
	// Returns true when this template runs on the given date.
	on: (date: Date) => boolean;
};

const weekday =
	(...days: number[]) =>
	(date: Date) =>
		days.includes(date.getDay());

// nth (1-based) occurrence of a weekday within its month.
const nthWeekday =
	(day: number, ...nths: number[]) =>
	(date: Date) =>
		date.getDay() === day && nths.includes(Math.ceil(date.getDate() / 7));

const lastWeekday = (day: number) => (date: Date) => {
	if (date.getDay() !== day) return false;
	const nextWeek = new Date(date);
	nextWeek.setDate(date.getDate() + 7);
	return nextWeek.getMonth() !== date.getMonth();
};

const TEMPLATES: Template[] = [
	{
		key: "dnd-night",
		title: "D&D Night",
		description:
			"Join us for an evening of adventure, strategy, and storytelling. New players get a pre-built character and a crash course.",
		type: "game-session",
		location: "C&B Pune",
		game: "Dungeons & Dragons",
		gameMaster: "Rahul",
		capacity: 6,
		start: [18, 0],
		end: [21, 0],
		on: weekday(6),
	},
	{
		key: "catan-evening",
		title: "Catan Evening",
		description:
			"Trade, build and out-negotiate the table. A relaxed evening of Catan with a GM on hand to teach the rules.",
		type: "game-session",
		location: "C&B Pune",
		game: "Catan",
		gameMaster: "Aisha",
		capacity: 4,
		start: [18, 0],
		end: [20, 0],
		on: weekday(3),
	},
	{
		key: "board-game-tournament",
		title: "Board Game Tournament",
		description:
			"A bracket-style afternoon across quick-play classics. Top three players take home store credit.",
		type: "tournament",
		location: "C&B Pune",
		game: "Mixed — Azul, Splendor, Kingdomino",
		gameMaster: "Arjun",
		capacity: 16,
		start: [15, 0],
		end: [19, 0],
		on: nthWeekday(0, 1, 3),
	},
	{
		key: "community-game-night",
		title: "Community Game Night",
		description:
			"Open tables, a full library of games and good company. Drop in, grab a seat and we'll find you a game.",
		type: "community",
		location: "C&B Pune",
		game: "Open library",
		gameMaster: null,
		capacity: 30,
		start: [19, 0],
		end: [22, 0],
		on: weekday(5),
	},
	{
		key: "pandemic-coop",
		title: "Pandemic Co-op Night",
		description:
			"Four players, one planet to save. A cooperative evening that rewards teamwork over trash talk.",
		type: "game-session",
		location: "C&B Mumbai",
		game: "Pandemic",
		gameMaster: "Neha",
		capacity: 4,
		start: [19, 0],
		end: [21, 30],
		on: weekday(2),
	},
	{
		key: "warhammer-skirmish",
		title: "Warhammer Skirmish",
		description:
			"Bring a 500-point list or borrow one of ours. Terrain tables are set up and ready for battle.",
		type: "game-session",
		location: "C&B Mumbai",
		game: "Warhammer 40,000",
		gameMaster: "Kabir",
		capacity: 8,
		start: [17, 0],
		end: [21, 0],
		on: weekday(4),
	},
	{
		key: "family-brunch",
		title: "Family Game Brunch",
		description:
			"Easy-to-learn games for all ages, plus brunch from the café. Perfect for a first visit.",
		type: "community",
		location: "C&B Mumbai",
		game: "Family favourites",
		gameMaster: null,
		capacity: 24,
		start: [11, 0],
		end: [13, 0],
		on: weekday(0),
	},
	{
		key: "magic-draft",
		title: "Magic: Draft Night",
		description:
			"Crack packs, draft a deck, play three rounds. Beginners welcome — booster packs included.",
		type: "tournament",
		location: "C&B Mumbai",
		game: "Magic: The Gathering",
		gameMaster: "Zoya",
		capacity: 16,
		start: [18, 30],
		end: [22, 0],
		on: nthWeekday(6, 2, 4),
	},
	{
		key: "mini-painting",
		title: "Mini Painting Workshop",
		description:
			"Bring a miniature or borrow one. Paints, brushes and a patient instructor provided.",
		type: "special",
		location: "C&B Pune",
		game: "Miniature painting",
		gameMaster: "Meera",
		capacity: 10,
		start: [16, 0],
		end: [18, 0],
		on: nthWeekday(4, 2),
	},
	{
		key: "cosplay-party",
		title: "Cosplay Party",
		description:
			"Come in costume. Photo corner, themed drinks, and store credit for the three best outfits.",
		type: "special",
		location: "C&B Pune",
		game: "Costume contest",
		gameMaster: null,
		capacity: 40,
		start: [20, 0],
		end: [23, 0],
		on: lastWeekday(6),
	},
];

const pad = (n: number) => String(n).padStart(2, "0");

// Stable pseudo-random seats taken, so availability varies between dates.
function seatsTaken(key: string, date: Date, capacity: number) {
	let hash = date.getFullYear() * 372 + date.getMonth() * 31 + date.getDate();
	for (const char of key) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
	return hash % (capacity + 1);
}

function statusFor(available: number, capacity: number): EventStatus {
	if (available === 0) return "full";
	if (available <= Math.max(1, Math.floor(capacity / 4))) return "filling";
	return "open";
}

function generateMockEvents({ from, to }: EventRange): CalendarEvent[] {
	const result: CalendarEvent[] = [];
	const day = new Date(from.getFullYear(), from.getMonth(), from.getDate());
	while (day <= to) {
		for (const t of TEMPLATES) {
			if (!t.on(day)) continue;
			const start = new Date(day);
			start.setHours(t.start[0], t.start[1], 0, 0);
			const end = new Date(day);
			end.setHours(t.end[0], t.end[1], 0, 0);
			const availableSlots = t.capacity - seatsTaken(t.key, day, t.capacity);
			const { key, start: _s, end: _e, on: _on, ...fields } = t;
			result.push({
				...fields,
				id: `${key}-${day.getFullYear()}${pad(day.getMonth() + 1)}${pad(day.getDate())}`,
				startTime: start.toISOString(),
				endTime: end.toISOString(),
				availableSlots,
				status: statusFor(availableSlots, t.capacity),
			});
		}
		day.setDate(day.getDate() + 1);
	}
	return result.sort((a, b) => a.startTime.localeCompare(b.startTime));
}
