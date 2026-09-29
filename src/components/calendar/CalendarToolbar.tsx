import {
	CalendarBlank,
	CaretLeft,
	CaretRight,
	Columns,
	ListBullets,
} from "@phosphor-icons/react";

export type CalendarView = "month" | "week" | "list";

const VIEWS = [
	{ value: "month", label: "Month", icon: CalendarBlank },
	{ value: "week", label: "Week", icon: Columns },
	{ value: "list", label: "List", icon: ListBullets },
] as const;

const iconBtn =
	"grid size-10 place-items-center rounded-full border-2 border-foreground bg-white spring-press transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

export function CalendarToolbar({
	title,
	view,
	onViewChange,
	onPrev,
	onNext,
	onToday,
	prevLabel,
	nextLabel,
}: {
	title: string;
	view: CalendarView;
	onViewChange: (view: CalendarView) => void;
	onPrev: () => void;
	onNext: () => void;
	onToday: () => void;
	prevLabel: string;
	nextLabel: string;
}) {
	return (
		<div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div className="flex items-center gap-3">
				<button
					type="button"
					onClick={onPrev}
					aria-label={prevLabel}
					className={iconBtn}
				>
					<CaretLeft size={18} weight="bold" />
				</button>
				<h2
					aria-live="polite"
					className="min-w-0 flex-1 text-center font-display text-xl font-extrabold uppercase tracking-wide sm:text-2xl md:min-w-[15rem] md:flex-none"
				>
					{title}
				</h2>
				<button
					type="button"
					onClick={onNext}
					aria-label={nextLabel}
					className={iconBtn}
				>
					<CaretRight size={18} weight="bold" />
				</button>
				<button
					type="button"
					onClick={onToday}
					className="ml-1 hidden rounded-full border-2 border-foreground/20 px-3 py-1.5 font-display text-xs font-bold uppercase transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:block"
				>
					Today
				</button>
			</div>

			<fieldset className="flex rounded-full border-2 border-foreground bg-white p-1">
				<legend className="sr-only">Calendar view</legend>
				{VIEWS.map(({ value, label, icon: Icon }) => {
					const active = view === value;
					return (
						<button
							key={value}
							type="button"
							aria-pressed={active}
							onClick={() => onViewChange(value)}
							className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-1.5 font-display text-sm font-bold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:flex-none ${
								active
									? "bg-foreground text-primary-foreground"
									: "hover:bg-muted/60"
							}`}
						>
							<Icon size={16} weight={active ? "bold" : "regular"} />
							{label}
						</button>
					);
				})}
			</fieldset>
		</div>
	);
}
