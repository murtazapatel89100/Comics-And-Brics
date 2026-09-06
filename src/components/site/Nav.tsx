import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
	{ label: "Home", to: "/" },
	{ label: "Explore", to: "/explore" },
	{ label: "Games", to: "/games" },
	{ label: "Visit", to: "/visit" },
	{ label: "Contact", to: "/contact" },
] as const;

export function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 bg-background border-b-4 border-foreground overflow-hidden">
			<div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none" />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex justify-between items-center h-24">
					<Link
						to="/"
						className="flex-shrink-0 flex items-center gap-3 cursor-pointer group no-underline"
					>
						<div className="bg-accent border-2 border-foreground comic-shadow px-3 py-1 transform -rotate-3 group-hover:rotate-3 group-hover:scale-110 transition-transform duration-200">
							<span className="font-display font-extrabold text-2xl tracking-tighter uppercase text-foreground">
								C&amp;B
							</span>
						</div>
						<div className="flex flex-col">
							<span className="font-display font-extrabold text-2xl tracking-tight uppercase leading-none text-foreground">
								Comics &amp; Brics
							</span>
							<span className="font-display font-bold text-[10px] tracking-widest text-foreground uppercase mt-1">
								Cafe • Comics • Games
							</span>
						</div>
					</Link>

					<div className="hidden md:flex items-center space-x-4">
						{links.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								activeOptions={{ exact: link.to === "/" }}
								className="font-display font-bold uppercase tracking-wider text-sm px-4 py-2 transition-all no-underline border-2"
								activeProps={{
									className:
										"bg-accent border-foreground comic-shadow-sm text-foreground transform -rotate-2",
								}}
								inactiveProps={{
									className:
										"text-foreground/70 hover:text-foreground hover:-translate-y-0.5 border-transparent",
								}}
							>
								{link.label}
							</Link>
						))}
						{/* Plan Your Visit CTA — commented out per request
						<div className="pl-4">
							<Link
								to="/visit"
								className="inline-block bg-white text-foreground font-display font-extrabold uppercase tracking-wider text-sm px-6 py-3 border-2 border-foreground comic-shadow comic-shadow-hover spring-press no-underline"
							>
								Plan Your Visit
							</Link>
						</div>
						*/}
					</div>

					<button
						type="button"
						className="md:hidden flex items-center bg-white border-2 border-foreground comic-shadow-sm p-1 cursor-pointer text-foreground spring-press"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? (
							<X size={24} strokeWidth={3} />
						) : (
							<Menu size={24} strokeWidth={3} />
						)}
					</button>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden bg-background border-t-2 border-foreground px-4 pt-4 pb-6 space-y-3 relative z-10 animate-in slide-in-from-top-2 fade-in duration-300">
					{links.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							activeOptions={{ exact: link.to === "/" }}
							onClick={() => setIsOpen(false)}
							className="block w-full text-left font-display font-bold uppercase tracking-wider text-lg py-3 px-4 border-2 transition-all no-underline"
							activeProps={{
								className:
									"bg-accent border-foreground comic-shadow-sm text-foreground",
							}}
							inactiveProps={{
								className:
									"border-transparent text-foreground hover:bg-white hover:border-foreground hover:comic-shadow-sm",
							}}
						>
							{link.label}
						</Link>
					))}
					{/* Plan Your Visit CTA — commented out per request
					<div className="pt-4">
						<Link
							to="/visit"
							onClick={() => setIsOpen(false)}
							className="block text-center w-full bg-white text-foreground font-display font-extrabold uppercase tracking-wider text-sm px-6 py-4 border-2 border-foreground comic-shadow-sm active:translate-y-1 active:shadow-none transition-all no-underline"
						>
							Plan Your Visit
						</Link>
					</div>
					*/}
				</div>
			)}
		</nav>
	);
}
