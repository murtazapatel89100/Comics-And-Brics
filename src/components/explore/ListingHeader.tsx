import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { accentTextColor } from "#/components/explore/accents";
import type { Accent } from "#/lib/explore-data";

export function ListingHeader({
	title,
	copy,
	accent,
	right,
}: {
	title: string;
	copy: string;
	accent: Accent;
	right?: ReactNode;
}) {
	return (
		<>
			<div className="mb-8">
				<Link
					to="/explore"
					className="flex w-max items-center gap-2 font-display font-bold uppercase text-muted-foreground hover:text-foreground transition-colors no-underline"
				>
					<ArrowLeft size={16} /> Back to Explore
				</Link>
			</div>
			<div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
				<div>
					<h1
						className={`font-display text-5xl font-extrabold uppercase md:text-7xl ${accentTextColor[accent]}`}
					>
						{title}
					</h1>
					<p className="mt-2 font-sans text-xl font-medium">{copy}</p>
				</div>
				{right}
			</div>
		</>
	);
}
