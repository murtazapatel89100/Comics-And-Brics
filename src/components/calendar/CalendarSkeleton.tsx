const bar = "animate-pulse rounded-full bg-muted/60";

export function CalendarSkeleton() {
	return (
		<div aria-busy="true">
			<span className="sr-only">Loading events…</span>
			<div className="mb-6 flex flex-wrap gap-2.5">
				<div className={`${bar} h-10 w-40`} />
				<div className={`${bar} h-10 w-32`} />
				<div className={`${bar} h-10 w-28`} />
			</div>
			<div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22.5rem]">
				<div className="rounded-2xl border-2 border-foreground bg-background p-4 comic-shadow-sm md:p-8">
					<div className="mb-6 flex items-center justify-between gap-4">
						<div className={`${bar} h-9 w-56`} />
						<div className={`${bar} hidden h-10 w-64 md:block`} />
					</div>
					<div className="grid grid-cols-7 gap-px overflow-hidden rounded-xl border border-muted bg-muted">
						{Array.from({ length: 35 }, (_, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: static placeholders
								key={i}
								className="min-h-[3.5rem] bg-background p-2 md:min-h-[7.75rem]"
							>
								<div className="size-5 animate-pulse rounded-md bg-muted/60" />
								{i % 3 === 1 && (
									<div className="mt-3 hidden h-8 animate-pulse rounded-md bg-muted/40 md:block" />
								)}
							</div>
						))}
					</div>
				</div>
				<div className="hidden rounded-2xl border-2 border-foreground bg-white p-6 comic-shadow lg:block">
					<div className={`${bar} mb-6 h-3 w-24`} />
					<div className={`${bar} mb-3 h-8 w-3/4`} />
					<div className={`${bar} mb-8 h-4 w-1/2`} />
					<div className="mb-3 h-24 animate-pulse rounded-xl bg-muted/40" />
					<div className="h-24 animate-pulse rounded-xl bg-muted/40" />
				</div>
			</div>
		</div>
	);
}
