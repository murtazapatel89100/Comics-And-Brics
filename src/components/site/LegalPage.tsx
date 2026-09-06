import { ArrowLeft, type Icon, WarningCircle } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

export type LegalSection = { heading: string; paragraphs: string[] };

export function LegalPage({
	Icon,
	title,
	updated,
	intro,
	sections,
}: {
	Icon: Icon;
	title: string;
	updated: string;
	intro: string;
	sections: LegalSection[];
}) {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<Link
					to="/"
					className="inline-flex items-center gap-2 font-display font-bold uppercase text-sm text-muted-foreground hover:text-foreground transition-colors no-underline mb-8"
				>
					<ArrowLeft size={16} /> Back to home
				</Link>

				{/* Header */}
				<div className="flex items-center gap-4 mb-3">
					<div className="w-14 h-14 rounded-xl bg-accent border-2 border-foreground flex items-center justify-center flex-shrink-0">
						<Icon size={30} weight="bold" />
					</div>
					<h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tighter">
						{title}
					</h1>
				</div>
				<p className="font-display font-bold uppercase text-xs tracking-widest text-muted-foreground mb-8">
					Last updated: {updated}
				</p>

				{/* Bold dummy-content notice */}
				<div className="bg-coral/10 border-2 border-coral rounded-xl p-5 flex items-start gap-3 mb-10">
					<WarningCircle
						size={26}
						weight="fill"
						className="text-coral flex-shrink-0"
					/>
					<p className="font-sans text-foreground">
						<strong className="font-display font-extrabold uppercase">
							Placeholder content — this is dummy text.
						</strong>{" "}
						<strong>
							This is not a real, legally-binding document yet and should be
							replaced with a lawyer-reviewed policy before launch.
						</strong>
					</p>
				</div>

				<p className="font-sans text-lg text-muted-foreground font-medium mb-10 leading-relaxed">
					{intro}
				</p>

				{/* Sections */}
				<div className="space-y-10">
					{sections.map((section, i) => (
						<section key={section.heading}>
							<h2 className="font-display font-extrabold text-2xl uppercase tracking-tight mb-3 flex items-baseline gap-3">
								<span className="text-accent">
									{String(i + 1).padStart(2, "0")}
								</span>
								{section.heading}
							</h2>
							<div className="space-y-3">
								{section.paragraphs.map((p) => (
									<p
										key={p.slice(0, 40)}
										className="font-sans text-muted-foreground leading-relaxed"
									>
										{p}
									</p>
								))}
							</div>
						</section>
					))}
				</div>

				{/* Contact */}
				<div className="mt-14 pt-8 border-t-2 border-foreground">
					<p className="font-sans font-medium text-muted-foreground">
						Questions about this policy?{" "}
						<Link
							to="/contact"
							className="font-bold text-blue no-underline hover:underline"
						>
							Get in touch
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
