import { Search } from "lucide-react";

export function SearchField({
	value,
	onChange,
	placeholder = "Search...",
}: {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}) {
	return (
		<div className="relative w-full max-w-xs">
			<Search
				size={20}
				className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"
			/>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className="w-full border-2 border-foreground bg-white py-3 pl-10 pr-4 font-sans font-medium rounded-lg comic-shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
			/>
		</div>
	);
}
