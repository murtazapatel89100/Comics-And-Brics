import {
	accentBorderL,
	accentIcon,
	eventStart,
	formatShortTime,
	TYPE_STYLE,
} from "#/components/calendar/calendar-utils";
import type { CalendarEvent } from "#/lib/calendar-data";

export function EventChip({
	event,
	selected,
	onSelect,
	muted = false,
}: {
	event: CalendarEvent;
	selected: boolean;
	onSelect: (event: CalendarEvent) => void;
	muted?: boolean;
}) {
	const style = TYPE_STYLE[event.type];
	const Icon = style.icon;

	return (
		<button
			type="button"
			onClick={(e) => {
				e.stopPropagation();
				onSelect(event);
			}}
			aria-pressed={selected}
			aria-label={`${event.title}, ${formatShortTime(eventStart(event))}`}
			className={`relative z-10 flex w-full min-w-0 flex-col justify-start rounded-md border border-l-[3px] px-2 py-1 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${accentBorderL[style.accent]} ${
				selected
					? "border-foreground bg-white comic-shadow-sm"
					: "border-foreground/10 bg-white/70 hover:border-foreground/40 hover:bg-white"
			} ${muted ? "opacity-50" : ""}`}
		>
			<span className="line-clamp-2 font-display text-xs font-bold leading-tight">
				{event.title}
			</span>
			<span className="mt-0.5 flex items-center gap-1 font-sans text-[11px] text-muted-foreground leading-tight">
				<Icon
					size={12}
					weight={selected ? "bold" : "regular"}
					className={`shrink-0 ${accentIcon[style.accent]}`}
				/>
				{formatShortTime(eventStart(event))}
			</span>
		</button>
	);
}
