import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import {
	dungeonTerrain,
	gameNight,
	miniatures,
	spaceGame,
	warhammerTable,
} from "#/assets/images";
import { Reveal } from "#/components/Reveal";
import { SafeImg } from "#/components/SafeImg";

export const Route = createFileRoute("/_site/games")({ component: Games });

const filters = ["Party", "Strategy", "2 Players", "Co-op", "Family", "Expert"];

const games = [
	{
		title: "Warhammer 40K",
		players: "2",
		time: "180m",
		diff: "Expert",
		img: warhammerTable,
	},
	{
		title: "Twilight Imperium",
		players: "3-6",
		time: "240m",
		diff: "Strategy",
		img: spaceGame,
	},
	{
		title: "D&D One-Shot",
		players: "3-6",
		time: "180m",
		diff: "Co-op",
		img: dungeonTerrain,
	},
	{
		title: "Mini Painting",
		players: "1+",
		time: "90m",
		diff: "Workshop",
		img: miniatures,
	},
	{
		title: "Dungeon Crawl",
		players: "2-5",
		time: "120m",
		diff: "Family",
		img: gameNight,
	},
];

function Games() {
	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase mb-4">
						Game Night Starts Here.
					</h1>
					<p className="font-sans text-xl font-medium">
						Whether you're here for a 20-minute game or a 4-hour campaign, find
						something that fits your table.
					</p>
				</div>

				<div className="flex justify-center flex-wrap gap-3 mb-12">
					{filters.map((filter, i) => (
						<button
							key={filter}
							type="button"
							className={`font-display font-bold uppercase px-5 py-2 rounded-full border-2 border-foreground spring-press transition-colors ${
								i === 1
									? "bg-foreground text-primary-foreground"
									: "bg-background hover:bg-muted"
							}`}
						>
							{filter}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Prominent Help Card */}
					<Reveal index={0}>
						<div className="bg-accent text-foreground rounded-2xl border-2 border-foreground p-8 comic-shadow flex flex-col justify-center items-center text-center h-full">
							<h3 className="font-display font-extrabold text-3xl uppercase mb-2">
								Never played it before?
							</h3>
							<p className="font-sans text-lg font-medium mb-6 text-foreground/90">
								No worries. We'll teach you.
							</p>
							<button
								type="button"
								className="bg-foreground text-primary-foreground font-display font-bold uppercase px-6 py-3 rounded-lg border-2 border-foreground flex items-center gap-2 spring-press hover:bg-opacity-90"
							>
								Ask About A Game <ArrowRight size={18} />
							</button>
						</div>
					</Reveal>

					{games.map((game, i) => (
						<Reveal key={game.title} index={(i + 1) % 3}>
							<div className="bg-white rounded-2xl border-2 border-foreground overflow-hidden comic-shadow comic-shadow-hover flex flex-col h-full">
								<div className="h-48 border-b-2 border-foreground overflow-hidden group">
									<SafeImg
										src={game.img}
										alt={game.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<div className="p-6 flex-1 flex flex-col">
									<h3 className="font-display font-bold text-2xl uppercase mb-4">
										{game.title}
									</h3>
									<div className="mt-auto space-y-2">
										<div className="flex justify-between items-center text-sm font-medium">
											<span className="text-muted-foreground uppercase flex items-center gap-2">
												<MapPin size={16} /> Players
											</span>
											<span>{game.players}</span>
										</div>
										<div className="flex justify-between items-center text-sm font-medium">
											<span className="text-muted-foreground uppercase flex items-center gap-2">
												<Clock size={16} /> Time
											</span>
											<span>{game.time}</span>
										</div>
										<div className="flex justify-between items-center text-sm font-medium pt-2 border-t border-muted">
											<span className="text-muted-foreground uppercase">
												Difficulty
											</span>
											<span className="font-bold text-blue uppercase">
												{game.diff}
											</span>
										</div>
									</div>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</div>
	);
}
