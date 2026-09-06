import { foodPlatter, gameNight } from "#/assets/images";

// Accent keys map to the established Comics & Brics palette utilities.
export type Accent = "yellow" | "blue" | "green" | "coral";

export type CategoryTo =
	| "/explore/comics"
	| "/explore/legos"
	| "/explore/food"
	| "/explore/events";

export type Category = {
	key: string;
	title: string;
	description: string;
	label: string;
	cta: string;
	to: CategoryTo;
	accent: Accent;
	img: string;
};

// The four discovery-hub categories. Games is intentionally NOT here.
export const categories: Category[] = [
	{
		key: "comics",
		title: "Comics",
		description: "Discover thousands of stories, characters and worlds.",
		label: "2000+ Titles",
		cta: "Explore Comics",
		to: "/explore/comics",
		accent: "yellow",
		img: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&h=600&fit=crop",
	},
	{
		key: "legos",
		title: "Legos",
		description: "Explore complete LEGO sets and new additions.",
		label: "Collection",
		cta: "Explore Legos",
		to: "/explore/legos",
		accent: "blue",
		img: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&h=600&fit=crop",
	},
	{
		key: "food",
		title: "Food",
		description: "Grab a drink, a bite, or check out today's specials.",
		label: "Menu",
		cta: "View Menu",
		to: "/explore/food",
		accent: "green",
		img: foodPlatter,
	},
	{
		key: "events",
		title: "Events",
		description: "Tournaments, meetups, parties, workshops and more.",
		label: "What's Happening",
		cta: "See Events",
		to: "/explore/events",
		accent: "coral",
		img: gameNight,
	},
];

// ---- COMICS ---------------------------------------------------------------
export const COMIC_FILTERS = [
	"All",
	"New Additions",
	"Marvel",
	"DC",
	"Manga",
	"Indian Comics",
	"Graphic Novels",
	"European",
] as const;

export type Comic = {
	title: string;
	publisher: string;
	category: string;
	size: string;
	isNew: boolean;
	img: string;
};

const cover = (id: string, w: number, h: number) =>
	`https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop`;

export const comics: Comic[] = [
	{
		title: "Saga Vol 1",
		publisher: "Image",
		category: "Graphic Novels",
		size: "h-[320px]",
		isNew: true,
		img: cover("1612036782180-6f0b6cd846fe", 400, 600),
	},
	{
		title: "Batman: Year One",
		publisher: "DC",
		category: "DC",
		size: "h-[240px]",
		isNew: false,
		img: cover("1596727147705-61a532a659bd", 400, 400),
	},
	{
		title: "Akira Vol 1",
		publisher: "Kodansha",
		category: "Manga",
		size: "h-[280px]",
		isNew: false,
		img: cover("1607604276583-eef5d076aa5f", 400, 500),
	},
	{
		title: "Watchmen",
		publisher: "DC",
		category: "DC",
		size: "h-[360px]",
		isNew: false,
		img: cover("1534809027769-b00d750a6bac", 400, 700),
	},
	{
		title: "Amar Chitra Katha",
		publisher: "ACK",
		category: "Indian Comics",
		size: "h-[240px]",
		isNew: true,
		img: cover("1544716278-ca5e3f4abd8c", 400, 400),
	},
	{
		title: "Spider-Man",
		publisher: "Marvel",
		category: "Marvel",
		size: "h-[320px]",
		isNew: false,
		img: cover("1535295972055-1c762f4483e5", 400, 600),
	},
	{
		title: "Tintin",
		publisher: "Casterman",
		category: "European",
		size: "h-[280px]",
		isNew: false,
		img: cover("1588636737525-4fc14fb38561", 400, 500),
	},
	{
		title: "Sandman",
		publisher: "Vertigo",
		category: "Graphic Novels",
		size: "h-[240px]",
		isNew: false,
		img: cover("1603991206138-04fb7b4155b1", 400, 400),
	},
];

// ---- LEGOS ----------------------------------------------------------------
export const LEGO_FILTERS = [
	"All",
	"Complete Sets",
	"New Additions",
	"Available",
] as const;

export type LegoSet = {
	title: string;
	theme: string;
	status: "Available" | "Reserved";
	dot: string;
	badge?: "COMPLETE SET" | "NEW";
};

export const legoSets: LegoSet[] = [
	{
		title: "LEGO Harry Potter",
		theme: "Harry Potter",
		status: "Available",
		dot: "bg-green",
		badge: "COMPLETE SET",
	},
	{
		title: "LEGO Star Wars",
		theme: "Star Wars",
		status: "Reserved",
		dot: "bg-coral",
		badge: "NEW",
	},
	{
		title: "LEGO Technic",
		theme: "Technic",
		status: "Available",
		dot: "bg-green",
	},
	{
		title: "LEGO Architecture",
		theme: "Architecture",
		status: "Available",
		dot: "bg-green",
		badge: "COMPLETE SET",
	},
];

// ---- FOOD -----------------------------------------------------------------
export const FOOD_FILTERS = [
	"All",
	"Drinks",
	"Coffee",
	"Snacks",
	"Meals",
	"Desserts",
] as const;

export type MenuItem = {
	title: string;
	desc: string;
	price: string;
	cat: string;
};

export const dailySpecial = {
	title: "The Dungeon Master Burger",
	desc: "Double patty, spicy mayo, caramelized onions, and a side of fries. Roll for initiative.",
	price: "$12",
};

export const menuFixed: MenuItem[] = [
	{
		title: "Classic Cold Coffee",
		desc: "House blend cold brew with vanilla ice cream.",
		price: "$5",
		cat: "Coffee",
	},
	{
		title: "Loaded Fries",
		desc: "Crispy fries with cheese sauce and jalapeños.",
		price: "$7",
		cat: "Snacks",
	},
	{
		title: "Mushroom Melt Sandwich",
		desc: "Grilled sourdough with wild mushrooms and cheddar.",
		price: "$9",
		cat: "Meals",
	},
	{
		title: "Brownie Sundae",
		desc: "Warm chocolate brownie with salted caramel ice cream.",
		price: "$6",
		cat: "Desserts",
	},
	{
		title: "Masala Chai",
		desc: "House spice blend, brewed strong and hot.",
		price: "$3",
		cat: "Drinks",
	},
	{
		title: "Filter Coffee",
		desc: "South-Indian style, frothy and strong.",
		price: "$4",
		cat: "Coffee",
	},
];

// ---- EVENTS ---------------------------------------------------------------
export const EVENT_FILTERS = [
	"All",
	"Tournaments",
	"Meetups",
	"Workshops",
	"Parties",
	"Community",
] as const;

export type CafeEvent = {
	title: string;
	desc: string;
	date: string;
	cat: string;
	status: "Registration Open" | "Upcoming" | "Full";
	dot: string;
};

export const events: CafeEvent[] = [
	{
		title: "Magic: Draft Night",
		desc: "Join our weekly MTG draft. Beginners welcome! Booster packs included.",
		date: "Friday, 7 PM",
		cat: "Meetups",
		status: "Registration Open",
		dot: "bg-green",
	},
	{
		title: "Indie Comic Meetup",
		desc: "Discover local artists and self-published gems. Panel discussion at 4 PM.",
		date: "Saturday, 3 PM",
		cat: "Community",
		status: "Upcoming",
		dot: "bg-coral",
	},
	{
		title: "Catan Tournament",
		desc: "Test your trading skills. Prizes for the top 3. Entry fee applies.",
		date: "Sunday, 5 PM",
		cat: "Tournaments",
		status: "Full",
		dot: "bg-blue",
	},
	{
		title: "Mini Painting Workshop",
		desc: "Bring a mini or borrow one. Paints and brushes provided.",
		date: "Wednesday, 6 PM",
		cat: "Workshops",
		status: "Registration Open",
		dot: "bg-green",
	},
	{
		title: "Cosplay Party",
		desc: "Come in costume. Best three outfits win store credit.",
		date: "Saturday, 8 PM",
		cat: "Parties",
		status: "Upcoming",
		dot: "bg-coral",
	},
];
