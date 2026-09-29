import { useEffect, useMemo, useState } from "react";
import {
	CalendarFilters,
	type Filters,
} from "#/components/calendar/CalendarFilters";
import { CalendarSkeleton } from "#/components/calendar/CalendarSkeleton";
import {
	CalendarToolbar,
	type CalendarView,
} from "#/components/calendar/CalendarToolbar";
import {
	addDays,
	addMonths,
	dateKey,
	eventStart,
	formatMonth,
	formatShortDate,
	groupByDay,
	isSameMonth,
	startOfDay,
	startOfWeek,
} from "#/components/calendar/calendar-utils";
import { DayAgenda, DetailsPanel } from "#/components/calendar/EventDetails";
import { EventModal, EventSheet } from "#/components/calendar/EventOverlays";
import { ListView } from "#/components/calendar/ListView";
import { MonthView } from "#/components/calendar/MonthView";
import { WeekView } from "#/components/calendar/WeekView";
import { type CalendarEvent, getEvents } from "#/lib/calendar-data";

/**
 * Events calendar section. Loads events on the client (dates depend on the
 * visitor's clock/timezone), showing a skeleton until they arrive.
 */
export function EventsCalendar() {
	const [data, setData] = useState<{
		today: Date;
		events: CalendarEvent[];
	} | null>(null);

	useEffect(() => {
		let cancelled = false;
		const today = startOfDay(new Date());
		getEvents({
			from: addMonths(today, -1),
			to: addDays(addMonths(today, 4), -1),
		}).then((events) => {
			if (!cancelled) setData({ today, events });
		});
		return () => {
			cancelled = true;
		};
	}, []);

	if (!data) return <CalendarSkeleton />;
	return <CalendarBoard today={data.today} events={data.events} />;
}

const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

function CalendarBoard({
	today,
	events,
}: {
	today: Date;
	events: CalendarEvent[];
}) {
	const [view, setView] = useState<CalendarView>("month");
	const [anchor, setAnchor] = useState(today);
	const [selected, setSelected] = useState(today);
	const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
	const [filters, setFilters] = useState<Filters>({
		location: "all",
		type: "all",
		thisWeek: false,
	});
	const [sheetOpen, setSheetOpen] = useState(false);
	const [viewing, setViewing] = useState<CalendarEvent | null>(null);

	const filtered = useMemo(() => {
		const weekStart = startOfWeek(today);
		const weekEnd = addDays(weekStart, 7);
		return events.filter((e) => {
			if (filters.location !== "all" && e.location !== filters.location)
				return false;
			if (filters.type !== "all" && e.type !== filters.type) return false;
			if (filters.thisWeek) {
				const start = eventStart(e);
				if (start < weekStart || start >= weekEnd) return false;
			}
			return true;
		});
	}, [events, filters, today]);

	const eventsByDay = useMemo(() => groupByDay(filtered), [filtered]);
	const selectedEvent = filtered.find((e) => e.id === selectedEventId) ?? null;
	const dayEvents = eventsByDay.get(dateKey(selected)) ?? [];

	const weekStart = startOfWeek(anchor);
	const visible = useMemo(() => {
		if (view === "week") {
			const weekStart = startOfWeek(anchor);
			const end = addDays(weekStart, 7);
			return filtered.filter((e) => {
				const s = eventStart(e);
				return s >= weekStart && s < end;
			});
		}
		const inMonth = filtered.filter((e) => isSameMonth(eventStart(e), anchor));
		// The list shows what's still ahead; past months are shown in full.
		return view === "list" && isSameMonth(anchor, today)
			? inMonth.filter((e) => eventStart(e) >= today)
			: inMonth;
	}, [view, filtered, anchor, today]);

	const selectDate = (date: Date) => {
		setSelected(date);
		setAnchor(date);
		setSelectedEventId(null);
	};

	const selectEvent = (event: CalendarEvent) => {
		const day = startOfDay(eventStart(event));
		setSelectedEventId(event.id);
		setSelected(day);
		setAnchor(day);
		if (!isDesktop()) setSheetOpen(true);
	};

	const navigate = (dir: 1 | -1) => {
		if (view === "week") {
			selectDate(addDays(selected, 7 * dir));
			return;
		}
		const month = addMonths(anchor, dir);
		const firstEvent = filtered.find((e) => isSameMonth(eventStart(e), month));
		setAnchor(month);
		setSelected(
			isSameMonth(month, today)
				? today
				: firstEvent
					? startOfDay(eventStart(firstEvent))
					: month,
		);
		setSelectedEventId(null);
	};

	const changeFilters = (next: Filters) => {
		if (next.thisWeek && !filters.thisWeek) selectDate(today);
		setFilters(next);
	};

	const openEvent = (event: CalendarEvent) => {
		setSheetOpen(false);
		setViewing(event);
	};

	const title =
		view === "week"
			? `${formatShortDate(weekStart)} – ${formatShortDate(addDays(weekStart, 6))} ${addDays(weekStart, 6).getFullYear()}`
			: formatMonth(anchor);
	const unit = view === "week" ? "week" : "month";

	return (
		<>
			<CalendarFilters
				filters={filters}
				onChange={changeFilters}
				count={visible.length}
			/>

			<div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22.5rem] lg:items-start">
				<div className="min-w-0 rounded-2xl border-2 border-foreground bg-background p-3 comic-shadow-sm sm:p-5 md:p-8">
					<CalendarToolbar
						title={title}
						view={view}
						onViewChange={setView}
						onPrev={() => navigate(-1)}
						onNext={() => navigate(1)}
						onToday={() => selectDate(today)}
						prevLabel={`Previous ${unit}`}
						nextLabel={`Next ${unit}`}
					/>

					<div
						key={view}
						className="animate-in fade-in slide-in-from-bottom-1 duration-300"
					>
						{view === "month" && (
							<MonthView
								month={anchor}
								today={today}
								selected={selected}
								selectedEventId={selectedEventId}
								eventsByDay={eventsByDay}
								onSelectDate={selectDate}
								onSelectEvent={selectEvent}
							/>
						)}
						{view === "week" && (
							<WeekView
								anchor={anchor}
								today={today}
								selected={selected}
								selectedEventId={selectedEventId}
								eventsByDay={eventsByDay}
								onSelectDate={selectDate}
								onSelectEvent={selectEvent}
							/>
						)}
						{view === "list" && (
							<ListView
								events={visible}
								today={today}
								selectedEventId={selectedEventId}
								onSelectEvent={selectEvent}
								nextLabel={`On to ${addMonths(anchor, 1).toLocaleDateString("en-GB", { month: "long" })}`}
								onNext={() => navigate(1)}
							/>
						)}
					</div>
				</div>

				{/* Desktop: side panel */}
				<div className="hidden lg:sticky lg:top-28 lg:block">
					<DetailsPanel
						date={selected}
						dayEvents={dayEvents}
						event={selectedEvent}
						onSelectEvent={selectEvent}
						onBack={() => setSelectedEventId(null)}
						onView={openEvent}
					/>
				</div>

				{/* Mobile / tablet: selected day's events below the calendar */}
				{view !== "list" && (
					<div
						key={dateKey(selected)}
						className="rounded-2xl border-2 border-foreground bg-white p-5 comic-shadow animate-in fade-in duration-300 lg:hidden"
					>
						<DayAgenda
							date={selected}
							events={dayEvents}
							onSelectEvent={selectEvent}
							onView={openEvent}
						/>
					</div>
				)}
			</div>

			<EventSheet
				event={selectedEvent}
				open={sheetOpen}
				onOpenChange={setSheetOpen}
				onView={openEvent}
			/>
			<EventModal event={viewing} onClose={() => setViewing(null)} />
		</>
	);
}
