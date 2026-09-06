import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
	accentBg,
	accentSolid,
	accentTextHover,
} from "#/components/explore/accents";
import { SafeImg } from "#/components/SafeImg";
import type { Category } from "#/lib/explore-data";

export function CategoryCard({
	category,
	index,
}: {
	category: Category;
	index: number;
}) {
	const { title, description, label, cta, to, accent, img } = category;
	const innerRotate =
		index % 2 === 0 ? "group-hover:-rotate-2" : "group-hover:rotate-2";

	return (
		<Link
			to={to}
			className="group flex flex-col overflow-hidden rounded-2xl border-4 border-foreground bg-white comic-shadow hover:comic-shadow-hover hover:-translate-y-2 transition-all duration-300 no-underline text-foreground"
		>
			<div
				className={`relative flex h-56 items-center justify-center overflow-hidden border-b-4 border-foreground p-4 ${accentBg[accent]}`}
			>
				<div
					className={`absolute inset-0 halftone-bg opacity-20 ${accent === "yellow" ? "" : "filter invert"}`}
				/>
				<div
					className={`relative z-10 h-full w-full overflow-hidden rounded-xl border-4 border-foreground comic-shadow-sm transition-transform duration-300 group-hover:scale-105 ${innerRotate}`}
				>
					<SafeImg
						src={img}
						alt={title}
						className="h-full w-full object-cover"
					/>
				</div>
			</div>

			<div className="flex flex-1 flex-col p-8">
				<span
					className={`mb-4 inline-block w-max rounded-full border-2 border-foreground px-3 py-1 text-xs font-bold uppercase ${accentSolid[accent]}`}
				>
					{label}
				</span>
				<h3 className="font-display text-4xl font-extrabold uppercase mb-3">
					{title}
				</h3>
				<p className="font-sans font-bold text-muted-foreground mb-8">
					{description}
				</p>
				<div
					className={`mt-auto flex items-center gap-2 font-display text-lg font-extrabold uppercase transition-colors ${accentTextHover[accent]}`}
				>
					{cta}
					<ArrowRight
						size={24}
						className="transition-transform group-hover:translate-x-2"
					/>
				</div>
			</div>
		</Link>
	);
}
