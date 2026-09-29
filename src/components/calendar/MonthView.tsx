import { type KeyboardEvent, useEffect, useRef } from "react";
import {
	addDays,
	dateKey,
	formatLongDate,
	isSameDay,
	isSameMonth,
	monthGrid,
	startOfMonth,
	TYPE_STYLE,
	WEEKDAYS,
} from "#/components/calendar/calendar-utils";
import { EventChip } from "#/components/calendar/EventChip";
import { accentBg } from "#/components/explore/accents";
import type { CalendarEvent } from "#/lib/calendar-data";

const MAX_CHIPS = 2;

const KEY_STEP: Record<string, number> = {
	ArrowLeft: -1,
	ArrowRight: 1,
	ArrowUp: -7,
	ArrowDown: 7,
};

export function MonthView({
	month,
	today,
	selected,
	selectedEventId,
	eventsByDay,
	onSelectDate,
	onSelectEvent,
}: {
	month: Date;
	today: Date;
	selected: Date;
	selectedEventId: string | null;
	eventsByDay: Map<string, CalendarEvent[]>;
	onSelectDate: (date: Date) => void;
	onSelectEvent: (event: CalendarEvent) => void;
}) {
	const days = monthGrid(month);
	const gridRef = useRef<HTMLDivElement>(null);
	const pendingFocus = useRef(false);
	const selectedInGrid = days.some((d) => isSameDay(d, selected));

	useEffect(() => {
		if (!pendingFocus.current) return;
		pendingFocus.current = false;
		gridRef.current
			?.querySelector<HTMLButtonElement>(`[data-date="${dateKey(selected)}"]`)
			?.focus();
	}, [selected]);

	const onKeyDown = (e: KeyboardEvent, date: Date) => {
		const step = KEY_STEP[e.key];
		if (!step) return;
		e.preventDefault();
		pendingFocus.current = true;
		onSelectDate(addDays(date, step));
	};

	return (
		<div>
			<div className="mb-2 grid grid-cols-7">
				{WEEKDAYS.map((d) => (
					<div
						key={d}
						className="text-center font-display text-[11px] font-bold uppercase tracking-widest text-muted-foreground md:text-xs"
					>
						<span className="md:hidden">{d[0]}</span>
						<span className="hidden md:inline">{d}</span>
					</div>
				))}
			</div>

			<div
				ref={gridRef}
				className="grid grid-cols-7 gap-px overflow-hidden rounded-xl border border-muted bg-muted"
			>
				{days.map((date) => {
					const key = dateKey(date);
					const events = eventsByDay.get(key) ?? [];
					const inMonth = isSameMonth(date, month);
					const isToday = isSameDay(date, today);
					const isSelected = isSameDay(date, selected);
					const focusable = selectedInGrid
						? isSelected
						: isSameDay(date, startOfMonth(month));

					return (
						<div
							key={key}
							className={`relative flex min-h-[3.5rem] flex-col items-center p-1 transition-colors duration-200 md:min-h-[7.75rem] md:items-stretch md:p-2 ${
								isSelected
									? "z-[1] bg-white ring-2 ring-inset ring-foreground"
									: isToday
										? "bg-accent/15"
										: inMonth
											? "bg-background hover:bg-white/60"
											: "bg-background/60"
							}`}
						>
							<button
								type="button"
								data-date={key}
								tabIndex={focusable ? 0 : -1}
								aria-pressed={isSelected}
								aria-current={isToday ? "date" : undefined}
								aria-label={`${formatLongDate(date)}${isToday ? " (today)" : ""}, ${
									events.length === 0
										? "no events"
										: `${events.length} ${events.length === 1 ? "event" : "events"}`
								}`}
								onClick={() => onSelectDate(date)}
								onKeyDown={(e) => onKeyDown(e, date)}
								className="absolute inset-0 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
							/>

							<div className="pointer-events-none relative flex flex-col items-center md:flex-row md:justify-between">
								<span
									className={`grid size-7 place-items-center rounded-md font-display text-sm transition-colors duration-200 ${
										isSelected
											? "bg-foreground font-extrabold text-primary-foreground"
											: isToday
												? "font-extrabold"
												: inMonth
													? "font-semibold"
													: "font-semibold text-muted-foreground/60"
									}`}
								>
									{date.getDate()}
								</span>
								{isToday && (
									<>
										<span className="mt-0.5 h-1 w-4 rounded-full bg-accent ring-1 ring-foreground/20 md:hidden" />
										<span className="hidden items-center gap-1 font-display text-[10px] font-bold uppercase tracking-wide md:flex">
											<span className="h-1 w-3 rounded-full bg-accent ring-1 ring-foreground/20" />
											Today
										</span>
									</>
								)}
							</div>

							{/* Mobile: minimal dots */}
							{events.length > 0 && (
								<div className="pointer-events-none relative mt-auto flex gap-0.5 pb-1 md:hidden">
									{events.slice(0, 3).map((e) => (
										<span
											key={e.id}
											className={`size-1.5 rounded-full ${accentBg[TYPE_STYLE[e.type].accent]} ${inMonth ? "" : "opacity-40"}`}
										/>
									))}
								</div>
							)}

							{/* Desktop: chips */}
							{events.length > 0 && (
								<div className="pointer-events-none relative mt-1.5 hidden flex-col gap-1 md:flex [&>button]:pointer-events-auto">
									{events.slice(0, MAX_CHIPS).map((e) => (
										<EventChip
											key={e.id}
											event={e}
											selected={e.id === selectedEventId}
											onSelect={onSelectEvent}
											muted={!inMonth}
										/>
									))}
									{events.length > MAX_CHIPS && (
										<span className="px-1 font-display text-[11px] font-bold uppercase text-muted-foreground">
											+{events.length - MAX_CHIPS} more
										</span>
									)}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
