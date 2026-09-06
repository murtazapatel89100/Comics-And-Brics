import {
	ArrowRight,
	CaretDown,
	Envelope,
	FacebookLogo,
	type Icon,
	InstagramLogo,
	MapPin,
	Sparkle,
	TwitterLogo,
	WarningCircle,
	WhatsappLogo,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";

type FooterLink = { label: string; to: FooterTo };
type FooterTo =
	| "/"
	| "/explore"
	| "/explore/comics"
	| "/explore/legos"
	| "/explore/food"
	| "/explore/events"
	| "/games"
	| "/visit"
	| "/contact";

const navColumns: { heading: string; links: FooterLink[] }[] = [
	{
		heading: "Explore",
		links: [
			{ label: "Comics", to: "/explore/comics" },
			{ label: "LEGO", to: "/explore/legos" },
			{ label: "Food", to: "/explore/food" },
			{ label: "Events", to: "/explore/events" },
			{ label: "Action Figures", to: "/explore" },
		],
	},
	{
		heading: "Play",
		links: [
			{ label: "Board Games", to: "/games" },
			{ label: "Games", to: "/games" },
			{ label: "Game Requests", to: "/contact" },
			{ label: "Reservations", to: "/visit" },
		],
	},
	{
		heading: "Visit",
		links: [
			{ label: "Our Locations", to: "/visit" },
			{ label: "What's at C&B", to: "/visit" },
			{ label: "Upcoming Events", to: "/explore/events" },
			{ label: "Get Directions", to: "/visit" },
		],
	},
	{
		heading: "Contact",
		links: [
			{ label: "Contact Us", to: "/contact" },
			{ label: "General Enquiries", to: "/contact" },
			{ label: "Events & Collaborations", to: "/contact" },
			{ label: "Feedback", to: "/contact" },
			{ label: "FAQ", to: "/contact" },
		],
	},
];

const socials: { label: string; Icon: Icon }[] = [
	{ label: "Instagram", Icon: InstagramLogo },
	{ label: "Facebook", Icon: FacebookLogo },
	{ label: "Twitter / X", Icon: TwitterLogo },
	{ label: "WhatsApp Community", Icon: WhatsappLogo },
];

// Mock locations — scales to as many branches as needed without redesign.
const locations = [{ city: "Pune" }];

const legalLinks: { label: string; to: "/privacy" | "/terms" | "/cookies" }[] =
	[
		{ label: "Privacy Policy", to: "/privacy" },
		{ label: "Terms & Conditions", to: "/terms" },
		{ label: "Cookie Policy", to: "/cookies" },
	];

export function Footer() {
	return (
		<footer className="relative bg-foreground text-background overflow-hidden">
			{/* Comic-panel top treatment: accent rule + halftone wash */}
			<div className="flex h-2 w-full">
				<div className="flex-1 bg-accent" />
				<div className="flex-1 bg-coral" />
				<div className="flex-1 bg-blue" />
				<div className="flex-1 bg-green" />
			</div>
			<div className="absolute inset-0 halftone-bg opacity-[0.07] pointer-events-none" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* 1. BRAND + SOCIAL */}
				<div className="py-12 md:py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-white/10">
					<div>
						<div className="flex items-center gap-3 mb-4">
							<div className="bg-accent text-foreground border-2 border-background/20 px-3 py-1 transform -rotate-3">
								<span className="font-display font-extrabold text-2xl tracking-tighter uppercase">
									C&amp;B
								</span>
							</div>
							<h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight uppercase leading-none">
								Comics &amp; Brics
							</h2>
						</div>
						<p className="font-display font-bold uppercase tracking-wider text-accent">
							Play. Read. Eat. Repeat.
						</p>
					</div>

					<div className="flex items-center gap-3">
						{socials.map((s) => (
							<button
								key={s.label}
								type="button"
								aria-label={s.label}
								className="w-11 h-11 flex items-center justify-center rounded-xl border-2 border-white/20 text-background hover:bg-accent hover:text-foreground hover:border-foreground focus-visible:bg-accent focus-visible:text-foreground transition-colors"
							>
								<s.Icon size={22} />
							</button>
						))}
					</div>
				</div>

				{/* 2. NAV COLUMNS (accordion on mobile) */}
				<nav className="py-4 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-x-8 md:gap-x-6 border-b border-white/10">
					{navColumns.map((col) => (
						<FooterColumn
							key={col.heading}
							heading={col.heading}
							links={col.links}
						/>
					))}
				</nav>

				{/* 3 + 4: NEWSLETTER + FIND YOUR C&B */}
				<div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/10">
					<Newsletter />
					<FindYourCb />
				</div>

				{/* 5. FINAL CTA */}
				<div className="py-12">
					<div className="relative bg-accent text-foreground rounded-2xl border-2 border-background/10 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden">
						<div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none" />
						<div className="relative z-10">
							<h3 className="font-display font-extrabold text-3xl md:text-5xl uppercase tracking-tighter">
								Come Hang Out.
							</h3>
							<p className="font-sans font-bold text-foreground/80 mt-2">
								Games, comics, food, and good company are waiting.
							</p>
						</div>
						<Link
							to="/visit"
							className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-foreground text-primary-foreground font-display font-extrabold uppercase tracking-wider px-8 py-4 rounded-xl border-2 border-foreground comic-shadow comic-shadow-hover spring-press no-underline w-max"
						>
							Find Your C&amp;B <ArrowRight size={22} weight="bold" />
						</Link>
					</div>
				</div>

				{/* 6. LEGAL BAR */}
				<div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-background/55">
					<p className="font-sans text-sm">© 2026 Comics &amp; Brics</p>
					<div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
						{legalLinks.map((l) => (
							<Link
								key={l.label}
								to={l.to}
								className="font-sans text-sm hover:text-background focus-visible:text-background transition-colors no-underline text-background/55"
							>
								{l.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterColumn({
	heading,
	links,
}: {
	heading: string;
	links: FooterLink[];
}) {
	const [open, setOpen] = useState(false);
	return (
		<div className="border-b border-white/10 md:border-none">
			<button
				type="button"
				onClick={() => setOpen((o) => !o)}
				aria-expanded={open}
				className="w-full flex items-center justify-between py-4 md:py-0 md:pointer-events-none md:cursor-default md:mb-4"
			>
				<h3 className="font-display font-extrabold uppercase tracking-wider text-accent">
					{heading}
				</h3>
				<CaretDown
					size={18}
					weight="bold"
					className={`md:hidden transition-transform duration-200 ${open ? "rotate-180" : ""}`}
				/>
			</button>
			<ul
				className={`${open ? "block" : "hidden"} md:block pb-4 md:pb-0 space-y-2.5`}
			>
				{links.map((link) => (
					<li key={link.label}>
						<Link
							to={link.to}
							className="group inline-flex items-center gap-1.5 font-sans font-medium text-background/80 hover:text-accent focus-visible:text-accent transition-colors no-underline"
						>
							<ArrowRight
								size={14}
								className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-focus-visible:opacity-100 group-focus-visible:ml-0 transition-all"
							/>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

function Newsletter() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [done, setDone] = useState(false);

	const submit = (e: FormEvent) => {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			setError("Please enter a valid email address.");
			return;
		}
		setError(null);
		setDone(true);
	};

	if (done) {
		return (
			<div className="animate-in fade-in zoom-in-95 duration-300">
				<div className="inline-flex items-center gap-2 mb-3">
					<Sparkle size={28} weight="fill" className="text-accent" />
					<h3 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-tighter">
						You're In!
					</h3>
				</div>
				<p className="font-sans font-bold text-background/70">
					We'll keep you posted.
				</p>
			</div>
		);
	}

	return (
		<div>
			<h3 className="font-display font-extrabold text-2xl md:text-3xl uppercase tracking-tighter mb-2 flex items-center gap-2">
				<Envelope size={26} weight="bold" className="text-accent" /> Get The
				Latest.
			</h3>
			<p className="font-sans font-medium text-background/70 mb-5 max-w-md">
				New games. New comics. Upcoming events. Don't miss what's happening at
				C&amp;B.
			</p>
			<form
				onSubmit={submit}
				noValidate
				className="flex flex-col sm:flex-row gap-3 max-w-md"
			>
				<div className="flex-1">
					<input
						type="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							setError(null);
						}}
						aria-label="Email address"
						aria-invalid={!!error}
						placeholder="Enter your email"
						className={`w-full bg-background text-foreground placeholder:text-muted-foreground font-sans font-medium rounded-xl border-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent ${
							error ? "border-coral" : "border-background"
						}`}
					/>
					{error && (
						<p className="mt-1.5 flex items-center gap-1 text-sm font-bold text-coral">
							<WarningCircle size={16} weight="fill" /> {error}
						</p>
					)}
				</div>
				<button
					type="submit"
					className="flex-shrink-0 bg-accent text-foreground font-display font-extrabold uppercase tracking-wider px-6 py-3 rounded-xl border-2 border-foreground comic-shadow-sm spring-press h-max"
				>
					Subscribe
				</button>
			</form>
		</div>
	);
}

function FindYourCb() {
	return (
		<div className="lg:pl-12 lg:border-l lg:border-white/10">
			<h3 className="font-display font-extrabold text-2xl md:text-3xl uppercase tracking-tighter mb-2">
				Find Your C&amp;B.
			</h3>
			<p className="font-sans font-medium text-background/70 mb-5">
				Looking for your nearest Comics &amp; Brics?
			</p>
			<div className="flex flex-wrap gap-3 mb-6">
				{locations.map((loc) => (
					<span
						key={loc.city}
						className="inline-flex items-center gap-2 bg-white/5 border-2 border-white/15 rounded-full px-4 py-2 font-display font-bold uppercase text-sm"
					>
						<MapPin size={18} weight="fill" className="text-accent" />{" "}
						{loc.city}
					</span>
				))}
			</div>
			<Link
				to="/visit"
				className="group inline-flex items-center gap-2 font-display font-bold uppercase text-sm text-accent hover:text-background focus-visible:text-background transition-colors no-underline"
			>
				View All Locations
				<ArrowRight
					size={18}
					weight="bold"
					className="group-hover:translate-x-1 transition-transform"
				/>
			</Link>
		</div>
	);
}
