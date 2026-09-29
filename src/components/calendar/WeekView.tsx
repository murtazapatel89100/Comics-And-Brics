import {
	accentBorderL,
	accentIcon,
	addDays,
	dateKey,
	eventEnd,
	eventStart,
	formatLongDate,
	formatShortTime,
	isSameDay,
	startOfWeek,
	TYPE_STYLE,
	WEEKDAYS,
} from "#/components/calendar/calendar-utils";
import { EventChip } from "#/components/calendar/EventChip";
import type { CalendarEvent } from "#/lib/calendar-data";

const HOUR_START = 10;
const HOUR_END = 24;
const HOUR_PX = 52;
const HOURS = Array.from(
	{ length: HOUR_END - HOUR_START },
	(_, i) => HOUR_START + i,
);

const hourLabel = (h: number) =>
	`${h % 12 === 0 ? 12 : h % 12} ${h < 12 || h === 24 ? "AM" : "PM"}`;

const hoursFrom = (d: Date) => d.getHours() + d.getMinutes() / 60;

// Assign overlapping events to side-by-side lanes.
function layoutDay(events: CalendarEvent[]) {
	const laneEnds: number[] = [];
	const placed = events.map((e) => {
		const start = hoursFrom(eventStart(e));
		const end = hoursFrom(eventEnd(e)) || 24;
		let lane = laneEnds.findIndex((laneEnd) => laneEnd <= start);
		if (lane === -1) lane = laneEnds.length;
		laneEnds[lane] = end;
		return { event: e, start, end, lane };
	});
	return { placed, lanes: Math.max(1, laneEnds.length) };
}

type Props = {
	anchor: Date;
	today: Date;
	selected: Date;
	selectedEventId: string | null;
	eventsByDay: Map<string, CalendarEvent[]>;
	onSelectDate: (date: Date) => void;
	onSelectEvent: (event: CalendarEvent) => void;
};

export function WeekView(props: Props) {
	const days = Array.from({ length: 7 }, (_, i) =>
		addDays(startOfWeek(props.anchor), i),
	);
	return (
		<>
			<WeekGrid days={days} {...props} />
			<WeekStack days={days} {...props} />
		</>
	);
}

function DayHeading({
	date,
	today,
	selected,
	onSelectDate,
}: {
	date: Date;
	today: Date;
	selected: Date;
	onSelectDate: (date: Date) => void;
}) {
	const isToday = isSameDay(date, today);
	const isSelected = isSameDay(date, selected);
	return (
		<button
			type="button"
			aria-pressed={isSelected}
			aria-current={isToday ? "date" : undefined}
			aria-label={formatLongDate(date)}
			onClick={() => onSelectDate(date)}
			className={`flex flex-col items-center rounded-lg py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
				isSelected ? "bg-foreground text-primary-foreground" : "hover:bg-white"
			}`}
		>
			<span
				className={`font-display text-[11px] font-bold uppercase tracking-widest ${isSelected ? "" : "text-muted-foreground"}`}
			>
				{WEEKDAYS[(date.getDay() + 6) % 7]}
			</span>
			<span className="font-display text-lg font-extrabold leading-tight">
				{date.getDate()}
			</span>
			<span
				className={`h-1 w-4 rounded-full ${isToday ? "bg-accent" : "bg-transparent"}`}
			/>
		</button>
	);
}

// Desktop / tablet: time grid.
function WeekGrid({
	days,
	today,
	selected,
	selectedEventId,
	eventsByDay,
	onSelectDate,
	onSelectEvent,
}: Props & { days: Date[] }) {
	return (
		<div className="hidden md:block">
			<div className="grid grid-cols-[3.5rem_repeat(7,minmax(0,1fr))] gap-1 pb-2">
				<span />
				{days.map((d) => (
					<DayHeading
						key={dateKey(d)}
						date={d}
						today={today}
						selected={selected}
						onSelectDate={onSelectDate}
					/>
				))}
			</div>

			<div className="relative grid grid-cols-[3.5rem_repeat(7,minmax(0,1fr))] overflow-hidden rounded-xl border border-muted">
				{/* Hour labels */}
				<div className="relative bg-background">
					{HOURS.map((h) => (
						<div
							key={h}
							style={{ height: HOUR_PX }}
							className="pr-2 pt-1 text-right font-display text-[10px] font-bold uppercase text-muted-foreground"
						>
							{hourLabel(h)}
						</div>
					))}
				</div>

				{days.map((d) => {
					const { placed, lanes } = layoutDay(
						eventsByDay.get(dateKey(d)) ?? [],
					);
					const isToday = isSameDay(d, today);
					return (
						<div
							key={dateKey(d)}
							className={`relative border-l border-muted ${
								isSameDay(d, selected)
									? "bg-white"
									: isToday
										? "bg-accent/10"
										: "bg-background"
							}`}
						>
							{HOURS.map((h) => (
								<div
									key={h}
									style={{ height: HOUR_PX }}
									className="border-t border-muted/60 first:border-t-0"
								/>
							))}
							{placed.map(({ event, start, end, lane }) => (
								<div
									key={event.id}
									className="absolute px-0.5 [&>button]:h-full"
									style={{
										top: (start - HOUR_START) * HOUR_PX + 2,
										height: (end - start) * HOUR_PX - 4,
										left: `${(lane / lanes) * 100}%`,
										width: `${100 / lanes}%`,
									}}
								>
									<EventChip
										event={event}
										selected={event.id === selectedEventId}
										onSelect={onSelectEvent}
									/>
								</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
}

// Mobile: stacked day-by-day list.
function WeekStack({
	days,
	today,
	selected,
	selectedEventId,
	eventsByDay,
	onSelectDate,
	onSelectEvent,
}: Props & { days: Date[] }) {
	return (
		<div className="flex flex-col divide-y divide-muted rounded-xl border border-muted bg-background md:hidden">
			{days.map((d) => {
				const events = eventsByDay.get(dateKey(d)) ?? [];
				return (
					<div key={dateKey(d)} className="flex gap-3 p-2">
						<div className="w-12 shrink-0">
							<DayHeading
								date={d}
								today={today}
								selected={selected}
								onSelectDate={onSelectDate}
							/>
						</div>
						<div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 py-1">
							{events.length === 0 ? (
								<span className="font-sans text-xs text-muted-foreground">
									Nothing scheduled
								</span>
							) : (
								events.map((e) => {
									const style = TYPE_STYLE[e.type];
									const Icon = style.icon;
									return (
										<button
											key={e.id}
											type="button"
											onClick={() => onSelectEvent(e)}
											className={`flex items-center gap-2 rounded-md border border-l-[3px] px-2.5 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${accentBorderL[style.accent]} ${
												e.id === selectedEventId
													? "border-foreground bg-white"
													: "border-foreground/10 bg-white/70"
											}`}
										>
											<Icon
												size={15}
												className={`shrink-0 ${accentIcon[style.accent]}`}
											/>
											<span className="min-w-0 flex-1 truncate font-display text-sm font-bold uppercase">
												{e.title}
											</span>
											<span className="shrink-0 font-sans text-xs text-muted-foreground">
												{formatShortTime(eventStart(e))}
											</span>
										</button>
									);
								})
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}
