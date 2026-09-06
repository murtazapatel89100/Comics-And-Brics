import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Dices } from "lucide-react";
import type { CSSProperties } from "react";
import {
	dungeonTerrain,
	miniatures,
	spaceGame,
	storefront,
	warhammerTable,
} from "#/assets/images";
import { Reveal } from "#/components/Reveal";
import { SafeImg } from "#/components/SafeImg";

export const Route = createFileRoute("/_site/")({ component: Home });

const featureCards = [
	{
		title: "Comics",
		desc: "Thousands of stories to discover.",
		icon: <BookOpen size={48} strokeWidth={2} />,
		bg: "bg-accent",
		text: "text-foreground",
	},
	{
		title: "Board Games",
		desc: "From quick party games to serious strategy.",
		icon: <Dices size={48} strokeWidth={2} />,
		bg: "bg-blue",
		text: "text-white",
	},
	{
		title: "Community",
		desc: "Events, meetups, tournaments & more.",
		icon: <Calendar size={48} strokeWidth={2} />,
		bg: "bg-coral",
		text: "text-white",
	},
];

const featuredGames = [
	{ title: "Warhammer 40K", tag: "Expert", img: warhammerTable },
	{ title: "Twilight Imperium", tag: "Strategy", img: spaceGame },
	{ title: "D&D Campaigns", tag: "Co-op", img: dungeonTerrain },
	{ title: "Mini Painting", tag: "Workshop", img: miniatures },
];

function Home() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
			{/* Hero Section */}
			<section className="relative overflow-hidden border-b-2 border-foreground">
				<div className="absolute inset-0 halftone-bg z-0 pointer-events-none" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center gap-12">
					<div className="flex-1 space-y-8">
						<h1 className="font-display font-extrabold text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
							Read.
							<br />
							Play.
							<br />
							Hang Out.
						</h1>
						<p className="font-sans text-xl md:text-2xl font-medium max-w-lg leading-snug">
							A café for people who never really grew out of comics, games, and
							good conversations.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								to="/explore"
								className="bg-accent text-foreground font-display font-bold uppercase tracking-wider px-8 py-4 rounded-xl border-2 border-foreground comic-shadow comic-shadow-hover spring-press flex items-center justify-center gap-2 no-underline"
							>
								Explore The Cafe <ArrowRight size={20} />
							</Link>
							<Link
								to="/games"
								className="bg-white text-foreground font-display font-bold uppercase tracking-wider px-8 py-4 rounded-xl border-2 border-foreground comic-shadow comic-shadow-hover spring-press text-center no-underline"
							>
								See The Games
							</Link>
						</div>
					</div>
					<div className="flex-1 relative">
						<div
							className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-accent text-foreground font-display font-bold text-xs uppercase px-4 py-2 rounded-full border-2 border-foreground z-20 animate-wiggle"
							style={{ "--wiggle-base": "6deg" } as CSSProperties}
						>
							Pune's Comic & Game Hangout
						</div>
						<div className="rounded-2xl border-2 border-foreground overflow-hidden comic-shadow bg-white h-[400px] md:h-[500px]">
							<SafeImg
								src={storefront}
								alt="Comics & Brics Cafe storefront on FC Road, Pune"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Intro Section */}
			<section className="relative py-20 bg-[#EFF3FF] border-b-4 border-foreground overflow-hidden">
				<div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<div className="inline-block mb-6 transform -rotate-2">
							<span className="bg-accent text-foreground font-display font-extrabold uppercase tracking-wider px-4 py-2 border-2 border-foreground comic-shadow-sm text-sm">
								The Experience
							</span>
						</div>
						<h2 className="font-display font-extrabold text-5xl md:text-6xl uppercase mb-6 tracking-tighter">
							More Than A Cafe.
						</h2>
						<p className="font-sans text-lg md:text-xl font-bold text-muted-foreground">
							Pick up a comic. Discover a new board game. Grab a drink. Stay for
							hours. Comics & Brics is a space built around stories, games, and
							the people who love them.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{featureCards.map((item, i) => (
							<Reveal key={item.title} index={i} className="h-full">
								<div className="bg-white text-foreground rounded-2xl border-4 border-foreground overflow-hidden comic-shadow hover:comic-shadow-hover hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-default h-full">
									<div
										className={`w-full py-10 flex items-center justify-center flex-shrink-0 ${item.bg} ${item.text} border-b-4 border-foreground`}
									>
										<div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
											{item.icon}
										</div>
									</div>
									<div className="p-8 bg-white w-full flex flex-1 flex-col justify-center">
										<h3 className="font-display font-extrabold text-3xl uppercase mb-3">
											{item.title}
										</h3>
										<p className="font-sans font-bold text-muted-foreground">
											{item.desc}
										</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Featured Games */}
			<section className="py-20 bg-background border-b-2 border-foreground">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase mb-12">
						What Are You Playing?
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{featuredGames.map((game, i) => (
							<Reveal key={game.title} index={i} className="h-full">
								<div className="bg-white rounded-xl border-2 border-foreground overflow-hidden comic-shadow comic-shadow-hover group cursor-pointer h-full flex flex-col">
									<div className="h-48 border-b-2 border-foreground overflow-hidden flex-shrink-0">
										<SafeImg
											src={game.img}
											alt={game.title}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div className="p-4 flex flex-1 justify-between items-center gap-2">
										<h3 className="font-display font-bold text-xl uppercase">
											{game.title}
										</h3>
										<span className="text-xs font-bold uppercase bg-blue text-white px-2 py-1 border-2 border-foreground rounded-full whitespace-nowrap flex-shrink-0">
											{game.tag}
										</span>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Events Strip */}
			<section className="relative py-16 bg-coral border-b-4 border-foreground overflow-hidden">
				<div className="absolute inset-0 halftone-bg opacity-20 pointer-events-none" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 justify-between relative z-10">
					<h2
						className="font-display font-extrabold text-4xl md:text-5xl uppercase max-w-md tracking-tighter text-white"
						style={{ textShadow: "4px 4px 0px #171717" }}
					>
						Something's Always Happening.
					</h2>
					<div className="flex-1 flex flex-col md:flex-row gap-6 w-full">
						<div className="bg-white p-6 rounded-xl border-4 border-foreground flex-1 comic-shadow hover:comic-shadow-hover hover:-translate-y-1 transition-all transform -rotate-1">
							<p className="inline-block bg-accent text-foreground font-bold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase mb-3 transform -rotate-2">
								Friday, 7 PM
							</p>
							<h4 className="font-display font-extrabold text-2xl uppercase mb-2">
								Magic: Draft Night
							</h4>
							<p className="font-sans font-bold text-muted-foreground">
								Join our weekly MTG draft. Beginners welcome!
							</p>
						</div>
						<div className="bg-white p-6 rounded-xl border-4 border-foreground flex-1 comic-shadow hover:comic-shadow-hover hover:-translate-y-1 transition-all transform rotate-1">
							<p className="inline-block bg-accent text-foreground font-bold px-3 py-1 border-2 border-foreground rounded-full text-xs uppercase mb-3 transform rotate-2">
								Saturday, 3 PM
							</p>
							<h4 className="font-display font-extrabold text-2xl uppercase mb-2">
								Indie Comic Meetup
							</h4>
							<p className="font-sans font-bold text-muted-foreground">
								Discover local artists and self-published gems.
							</p>
						</div>
					</div>
					<Link
						to="/explore/events"
						className="flex-shrink-0 bg-white text-foreground font-display font-extrabold uppercase px-6 py-4 rounded-xl border-4 border-foreground comic-shadow comic-shadow-hover spring-press flex items-center gap-2 transform -rotate-2 no-underline"
					>
						View All Events <ArrowRight size={24} strokeWidth={3} />
					</Link>
				</div>
			</section>
		</div>
	);
}
