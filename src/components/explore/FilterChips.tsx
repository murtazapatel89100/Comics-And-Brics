export function FilterChips({
	options,
	active,
	onChange,
}: {
	options: readonly string[];
	active: string;
	onChange: (value: string) => void;
}) {
	return (
		<div className="flex overflow-x-auto pb-4 mb-8 gap-3 hide-scrollbar">
			{options.map((option) => {
				const isActive = option === active;
				return (
					<button
						key={option}
						type="button"
						onClick={() => onChange(option)}
						className={`flex-shrink-0 border-2 border-foreground px-4 py-2 font-display font-bold uppercase rounded-full spring-press transition-colors ${
							isActive
								? "bg-foreground text-primary-foreground"
								: "bg-background hover:bg-muted"
						}`}
					>
						{option}
					</button>
				);
			})}
		</div>
	);
}
