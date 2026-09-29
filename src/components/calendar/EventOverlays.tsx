import {
	CalendarBlank,
	Clock,
	DiceFive,
	Info,
	MapPin,
	X,
} from "@phosphor-icons/react";
import { Dialog } from "radix-ui";
import type { ReactNode } from "react";
import {
	eventStart,
	formatEventTime,
	formatLongDate,
	TYPE_STYLE,
} from "#/components/calendar/calendar-utils";
import {
	BookingPlaceholder,
	EventSummary,
	GameMaster,
	SpotsMeter,
	TypeTag,
} from "#/components/calendar/EventDetails";
import { Starburst } from "#/components/calendar/Starburst";
import { accentSolid } from "#/components/explore/accents";
import type { CalendarEvent } from "#/lib/calendar-data";

const closeBtn =
	"grid size-9 shrink-0 place-items-center rounded-full border-2 border-foreground bg-white text-foreground spring-press transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const overlay =
	"fixed inset-0 z-50 bg-foreground/40 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0";

/** Mobile / tablet: selected event as a bottom sheet. */
export function EventSheet({
	event,
	open,
	onOpenChange,
	onView,
}: {
	event: CalendarEvent | null;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onView: (event: CalendarEvent) => void;
}) {
	return (
		<Dialog.Root open={open && !!event} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className={overlay} />
				<Dialog.Content
					aria-describedby={undefined}
					className="fixed inset-x-0 bottom-0 z-50 max-h-[88dvh] overflow-y-auto rounded-t-3xl border-2 border-b-0 border-foreground bg-white px-5 pb-8 pt-3 data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom duration-300"
				>
					<div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-muted" />
					<div className="mb-2 flex justify-end">
						<Dialog.Close className={closeBtn} aria-label="Close">
							<X size={16} weight="bold" />
						</Dialog.Close>
					</div>
					<Dialog.Title className="sr-only">{event?.title}</Dialog.Title>
					{event && <EventSummary event={event} onView={onView} />}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

/**
 * "View event" — mock expanded event state. There is no booking flow yet,
 * so this only presents the full details and a disabled booking action.
 */
export function EventModal({
	event,
	onClose,
}: {
	event: CalendarEvent | null;
	onClose: () => void;
}) {
	return (
		<Dialog.Root open={!!event} onOpenChange={(open) => !open && onClose()}>
			<Dialog.Portal>
				<Dialog.Overlay className={overlay} />
				{event && (
					<Dialog.Content className="fixed inset-x-4 top-1/2 z-50 mx-auto max-h-[90dvh] max-w-2xl -translate-y-1/2 overflow-y-auto rounded-2xl border-2 border-foreground bg-background comic-shadow data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 duration-200">
						<div
							className={`relative overflow-hidden border-b-2 border-foreground px-6 pb-6 pt-5 md:px-8 ${accentSolid[TYPE_STYLE[event.type].accent]}`}
						>
							<div className="pointer-events-none absolute inset-0 halftone-bg" />
							<Starburst className="pointer-events-none absolute -bottom-6 right-16 size-20 rotate-12 opacity-90" />
							<div className="relative flex items-start justify-between gap-4">
								<TypeTag event={event} />
								<Dialog.Close className={closeBtn} aria-label="Close">
									<X size={16} weight="bold" />
								</Dialog.Close>
							</div>
							<Dialog.Title className="relative mt-4 font-display text-4xl font-extrabold uppercase leading-none md:text-5xl">
								{event.title}
							</Dialog.Title>
						</div>

						<div className="grid gap-6 p-6 md:grid-cols-[1fr_15rem] md:p-8">
							<div className="flex flex-col gap-5">
								<Dialog.Description className="font-sans text-base font-medium">
									{event.description}
								</Dialog.Description>
								<dl className="grid grid-cols-1 gap-3 font-sans text-sm sm:grid-cols-2">
									<Detail icon={<CalendarBlank size={16} />} label="Date">
										{formatLongDate(eventStart(event))}
									</Detail>
									<Detail icon={<Clock size={16} />} label="Time">
										{formatEventTime(event)}
									</Detail>
									<Detail icon={<MapPin size={16} />} label="Location">
										{event.location}
									</Detail>
									<Detail icon={<DiceFive size={16} />} label="Game">
										{event.game}
									</Detail>
								</dl>
							</div>

							<div className="flex flex-col gap-5 rounded-xl border-2 border-foreground bg-white p-5">
								<GameMaster name={event.gameMaster} />
								<SpotsMeter event={event} />
								<BookingPlaceholder />
								<p className="flex items-start gap-1.5 font-sans text-xs text-muted-foreground">
									<Info size={14} className="mt-px shrink-0" />
									Online booking is coming soon. Spots can't be reserved here
									yet.
								</p>
							</div>
						</div>
					</Dialog.Content>
				)}
			</Dialog.Portal>
		</Dialog.Root>
	);
}

function Detail({
	icon,
	label,
	children,
}: {
	icon: ReactNode;
	label: string;
	children: ReactNode;
}) {
	return (
		<div className="rounded-lg border border-foreground/10 bg-white px-3 py-2.5">
			<dt className="flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
				{icon}
				{label}
			</dt>
			<dd className="mt-0.5 font-medium">{children}</dd>
		</div>
	);
}
