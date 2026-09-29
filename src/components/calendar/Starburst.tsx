// Small comic "burst" used as a decorative sticker behind icons.
const POINTS = Array.from({ length: 24 }, (_, i) => {
	const angle = (i / 24) * Math.PI * 2 - Math.PI / 2;
	const r = i % 2 === 0 ? 50 : 38;
	return `${(50 + r * Math.cos(angle)).toFixed(1)},${(50 + r * Math.sin(angle)).toFixed(1)}`;
}).join(" ");

export function Starburst({
	className = "",
	fill = "var(--accent)",
}: {
	className?: string;
	fill?: string;
}) {
	return (
		<svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
			<polygon
				points={POINTS}
				fill={fill}
				stroke="var(--foreground)"
				strokeWidth="3"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
