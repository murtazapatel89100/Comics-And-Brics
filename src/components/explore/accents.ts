import type { Accent } from "#/lib/explore-data";

// Solid accent surface for bands, chips and icon tiles.
export const accentSolid: Record<Accent, string> = {
	yellow: "bg-accent text-foreground",
	blue: "bg-blue text-white",
	green: "bg-green text-white",
	coral: "bg-coral text-white",
};

// Just the accent background (no text colour set).
export const accentBg: Record<Accent, string> = {
	yellow: "bg-accent",
	blue: "bg-blue",
	green: "bg-green",
	coral: "bg-coral",
};

// Accent as a text colour, for headings and hover states.
export const accentTextColor: Record<Accent, string> = {
	yellow: "text-foreground",
	blue: "text-blue",
	green: "text-green",
	coral: "text-coral",
};

// Accent text colour applied on group-hover (for CTAs).
export const accentTextHover: Record<Accent, string> = {
	yellow: "group-hover:text-accent",
	blue: "group-hover:text-blue",
	green: "group-hover:text-green",
	coral: "group-hover:text-coral",
};
