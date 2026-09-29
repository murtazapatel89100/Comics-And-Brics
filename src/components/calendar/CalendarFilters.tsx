import {
	CaretDown,
	Check,
	Funnel,
	type Icon,
	MapPin,
	Shapes,
} from "@phosphor-icons/react";
import { Select as SelectPrimitive } from "radix-ui";
import { EVENT_TYPES, type EventType, LOCATIONS } from "#/lib/calendar-data";

export type Filters = {
	location: string; // "all" | location name
	type: "all" | EventType;
	thisWeek: boolean;
};

function FilterSelect({
	label,
	icon: Icon,
	value,
	onChange,
	options,
}: {
	label: string;
	icon: Icon;
	value: string;
	onChange: (value: string) => void;
	options: { value: string; label: string }[];
}) {
	return (
		<SelectPrimitive.Root value={value} onValueChange={onChange}>
			<SelectPrimitive.Trigger
				aria-label={label}
				className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-foreground bg-white pl-3.5 pr-3 font-display text-sm font-bold uppercase spring-press transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent data-[state=open]:bg-muted/40"
			>
				<Icon size={16} className="shrink-0 text-muted-foreground" />
				<SelectPrimitive.Value />
				<SelectPrimitive.Icon>
					<CaretDown size={14} weight="bold" />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>
			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					position="popper"
					sideOffset={6}
					className="z-50 min-w-(--radix-select-trigger-width) rounded-xl border-2 border-foreground bg-white p-1 comic-shadow-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
				>
					<SelectPrimitive.Viewport>
						{options.map((o) => (
							<SelectPrimitive.Item
								key={o.value}
								value={o.value}
								className="relative flex cursor-pointer select-none items-center rounded-lg py-2 pl-3 pr-8 font-display text-sm font-semibold uppercase outline-none data-[highlighted]:bg-accent"
							>
								<SelectPrimitive.ItemText>{o.label}</SelectPrimitive.ItemText>
								<SelectPrimitive.ItemIndicator className="absolute right-2.5">
									<Check size={14} weight="bold" />
								</SelectPrimitive.ItemIndicator>
							</SelectPrimitive.Item>
						))}
					</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
}

export function CalendarFilters({
	filters,
	onChange,
	count,
}: {
	filters: Filters;
	onChange: (filters: Filters) => void;
	count: number;
}) {
	const isFiltered =
		filters.location !== "all" || filters.type !== "all" || filters.thisWeek;

	return (
		<div className="mb-6 flex flex-wrap items-center gap-2.5">
			<span className="mr-1 hidden items-center gap-1.5 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground sm:inline-flex">
				<Funnel size={14} /> Filter
			</span>
			<FilterSelect
				label="Location"
				icon={MapPin}
				value={filters.location}
				onChange={(location) => onChange({ ...filters, location })}
				options={[
					{ value: "all", label: "All locations" },
					...LOCATIONS.map((l) => ({ value: l, label: l })),
				]}
			/>
			<FilterSelect
				label="Event type"
				icon={Shapes}
				value={filters.type}
				onChange={(type) =>
					onChange({ ...filters, type: type as Filters["type"] })
				}
				options={[{ value: "all", label: "All types" }, ...EVENT_TYPES]}
			/>
			<button
				type="button"
				aria-pressed={filters.thisWeek}
				onClick={() => onChange({ ...filters, thisWeek: !filters.thisWeek })}
				className={`h-10 rounded-full border-2 border-foreground px-4 font-display text-sm font-bold uppercase spring-press transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
					filters.thisWeek
						? "bg-foreground text-primary-foreground"
						: "bg-white hover:bg-muted/40"
				}`}
			>
				This week
			</button>
			{isFiltered && (
				<button
					type="button"
					onClick={() =>
						onChange({ location: "all", type: "all", thisWeek: false })
					}
					className="rounded-md px-2 py-1 font-display text-xs font-bold uppercase text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
				>
					Clear
				</button>
			)}
			<span className="ml-auto font-sans text-sm text-muted-foreground">
				{count} {count === 1 ? "event" : "events"}
			</span>
		</div>
	);
}
