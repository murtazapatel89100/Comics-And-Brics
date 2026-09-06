import {
	Bell,
	BookOpen,
	CalendarBlank,
	CaretRight,
	ChatCircle,
	Coffee,
	DiceFive,
	Gear,
	Lego,
	MagnifyingGlass,
	Megaphone,
	Package,
	PenNib,
	Plus,
	SignOut,
	SquaresFour,
	Star,
	Sword,
	UserCircle,
	Users,
	VideoCamera,
	WarningCircle,
} from "@phosphor-icons/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/admin")({ component: AdminRoute });

// Sample data
const RECENT_RESERVATIONS = [
	{
		id: 1,
		customer: "Alex Mercer",
		type: "Table",
		time: "18:00 Today",
		status: "Pending",
		guests: 4,
	},
	{
		id: 2,
		customer: "Sarah Chen",
		type: "Game - Catan",
		time: "19:30 Today",
		status: "Confirmed",
		guests: 3,
	},
	{
		id: 3,
		customer: "Mike Johnson",
		type: "Comic",
		time: "Expiry: Tomorrow",
		status: "Active",
		items: "2/3",
	},
];

const UPCOMING_EVENTS = [
	{
		id: 1,
		title: "Magic: Draft Night",
		time: "19:00 Friday",
		registrations: "12/16",
		status: "Published",
	},
	{
		id: 2,
		title: "Indie Comic Meetup",
		time: "15:00 Saturday",
		registrations: "24/30",
		status: "Published",
	},
];

const navGroups = [
	{
		title: "Content",
		items: [
			{ name: "Comics", icon: BookOpen },
			{ name: "Board Games", icon: DiceFive },
			{ name: "Legos", icon: Lego },
			{ name: "Action Figures", icon: Sword },
			{ name: "Food", icon: Coffee },
			{ name: "Franchises", icon: Star },
		],
	},
	{
		title: "Operations",
		items: [
			{ name: "Reservations", icon: CalendarBlank },
			{ name: "Game Requests", icon: DiceFive },
			{ name: "Events", icon: CalendarBlank },
			{ name: "Calendar", icon: CalendarBlank },
			{ name: "Stock", icon: Package },
		],
	},
	{
		title: "Content & Marketing",
		items: [
			{ name: "Blogs", icon: PenNib },
			{ name: "Vlogs", icon: VideoCamera },
			{ name: "Unboxing", icon: Package },
			{ name: "Announcements", icon: Megaphone },
			{ name: "Marquee / Daily Flash", icon: Megaphone },
			{ name: "Distribution Lists", icon: Users },
		],
	},
	{
		title: "Community",
		items: [
			{ name: "Reviews & Ratings", icon: Star },
			{ name: "Users", icon: Users },
			{ name: "Forums", icon: ChatCircle },
			{ name: "Social / Community", icon: ChatCircle },
		],
	},
	{
		title: "Administration",
		items: [
			{ name: "Employees", icon: Users },
			{ name: "Admins", icon: Gear },
			{ name: "Settings", icon: Gear },
		],
	},
];

function AdminRoute() {
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState("Dashboard");
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<div className="flex h-screen bg-[#FFF7E3] text-[#171717] font-sans">
			{/* Sidebar */}
			<div
				className={`${sidebarOpen ? "w-64" : "w-20"} bg-[#171717] text-[#FFF7E3] flex flex-col transition-all duration-300 flex-shrink-0`}
			>
				<div className="h-20 flex items-center justify-between px-6 border-b border-gray-800">
					{sidebarOpen && (
						<div className="font-display font-extrabold uppercase">
							<span className="text-xl">C&amp;B</span>
							<span className="block text-[10px] tracking-widest text-[#FFD447]">
								Admin
							</span>
						</div>
					)}
					<button
						type="button"
						onClick={() => setSidebarOpen(!sidebarOpen)}
						className="text-[#FFD447]"
					>
						<SquaresFour size={24} weight="bold" />
					</button>
				</div>

				<div className="flex-1 overflow-y-auto py-4 hide-scrollbar">
					<div className="px-3 mb-6">
						<button
							type="button"
							onClick={() => setActiveTab("Dashboard")}
							className={`w-full flex items-center gap-3 px-3 py-2 rounded-md font-display font-bold uppercase text-sm ${activeTab === "Dashboard" ? "bg-[#FFD447] text-[#171717]" : "hover:bg-gray-800"}`}
						>
							<SquaresFour size={20} />
							{sidebarOpen && <span>Dashboard</span>}
						</button>
					</div>

					{navGroups.map((group) => (
						<div key={group.title} className="mb-6 px-3">
							{sidebarOpen && (
								<p className="text-[10px] font-display font-bold uppercase tracking-wider text-gray-500 mb-2 px-3">
									{group.title}
								</p>
							)}
							<div className="space-y-1">
								{group.items.map((item) => {
									const ItemIcon = item.icon;
									const isActive = activeTab === item.name;
									return (
										<button
											key={item.name}
											type="button"
											onClick={() => setActiveTab(item.name)}
											className={`w-full flex items-center gap-3 px-3 py-2 rounded-md font-display font-semibold uppercase text-xs ${isActive ? "bg-gray-800 text-[#FFD447]" : "hover:bg-gray-800 text-gray-300 hover:text-white"}`}
											title={!sidebarOpen ? item.name : undefined}
										>
											<ItemIcon size={20} />
											{sidebarOpen && <span>{item.name}</span>}
										</button>
									);
								})}
							</div>
						</div>
					))}
				</div>

				<div className="p-4 border-t border-gray-800">
					<button
						type="button"
						onClick={() => navigate({ to: "/" })}
						className="w-full flex items-center gap-3 px-3 py-2 rounded-md font-display font-semibold uppercase text-xs hover:bg-gray-800 text-gray-300"
					>
						<SignOut size={20} />
						{sidebarOpen && <span>View Website</span>}
					</button>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Topbar */}
				<div className="h-20 bg-white border-b-2 border-[#171717] flex items-center justify-between px-8 flex-shrink-0 z-10">
					<div className="flex items-center gap-2 font-display font-bold uppercase text-sm">
						<span className="text-[#68645C]">Comics &amp; Brics</span>
						<CaretRight size={16} className="text-[#68645C]" />
						<span>{activeTab}</span>
					</div>

					<div className="flex items-center gap-6">
						<div className="relative">
							<MagnifyingGlass
								size={20}
								className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#68645C]"
							/>
							<input
								type="text"
								placeholder="Search the dashboard..."
								className="pl-10 pr-4 py-2 border-2 border-[#171717] rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD447] w-64"
							/>
						</div>

						<button type="button" className="relative">
							<Bell size={24} />
							<span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B61] rounded-full border-2 border-white" />
						</button>

						<div className="flex items-center gap-3 pl-6 border-l-2 border-[#D9D4C8]">
							<div className="w-10 h-10 bg-[#FFD447] rounded-full border-2 border-[#171717] flex items-center justify-center">
								<UserCircle size={24} />
							</div>
							<div className="font-display font-bold uppercase text-xs">
								<span className="block text-[#171717]">Super Admin</span>
							</div>
						</div>
					</div>
				</div>

				{/* Dynamic Content */}
				<div className="flex-1 overflow-y-auto p-8">
					{activeTab === "Dashboard" && <DashboardOverview />}
					{activeTab === "Events" && <EventsPlaceholder />}
					{activeTab !== "Dashboard" && activeTab !== "Events" && (
						<div className="flex flex-col items-center justify-center h-full text-center">
							<h2 className="font-display font-extrabold text-4xl uppercase mb-4 text-[#171717]">
								{activeTab}
							</h2>
							<p className="font-sans text-[#68645C] max-w-md">
								This section is part of the prototype. The UI for this module
								would be implemented following the established design system.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

function DashboardOverview() {
	return (
		<div className="animate-in fade-in duration-300">
			<div className="mb-10">
				<h1 className="font-display font-extrabold text-4xl uppercase mb-2">
					Good morning, Comics &amp; Brics.
				</h1>
				<p className="font-sans text-[#68645C] text-lg">
					Here's what's happening at the cafe today.
				</p>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
				<StatCard
					title="Today's Reservations"
					value="12"
					color="bg-[#FFD447]"
				/>
				<StatCard
					title="Upcoming Events"
					value="6"
					color="bg-[#FF6B61]"
					textColor="text-white"
				/>
				<StatCard
					title="Pending Requests"
					value="8"
					color="bg-[#5578F5]"
					textColor="text-white"
				/>
				<StatCard title="Pending Reviews" value="5" color="bg-[#D9D4C8]" />
				<StatCard title="Active Games" value="124" color="bg-white" />
				<StatCard title="Comics Collection" value="2,000+" color="bg-white" />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2 space-y-8">
					{/* Today's Operations */}
					<section>
						<div className="flex items-center justify-between mb-4">
							<h2 className="font-display font-bold text-xl uppercase">
								Today's Operations
							</h2>
							<button
								type="button"
								className="text-sm font-display font-bold uppercase text-[#5578F5]"
							>
								View All
							</button>
						</div>
						<div className="bg-white border-2 border-[#171717] rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#171717]">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="border-b-2 border-[#171717] bg-[#FFF7E3]">
										<th className="px-6 py-4 font-display font-bold text-xs uppercase tracking-wider">
											Customer
										</th>
										<th className="px-6 py-4 font-display font-bold text-xs uppercase tracking-wider">
											Type
										</th>
										<th className="px-6 py-4 font-display font-bold text-xs uppercase tracking-wider">
											Time / Details
										</th>
										<th className="px-6 py-4 font-display font-bold text-xs uppercase tracking-wider">
											Status
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-[#D9D4C8]">
									{RECENT_RESERVATIONS.map((res) => (
										<tr
											key={res.id}
											className="hover:bg-gray-50 font-sans text-sm"
										>
											<td className="px-6 py-4 font-semibold">
												{res.customer}
											</td>
											<td className="px-6 py-4">{res.type}</td>
											<td className="px-6 py-4 text-[#68645C]">{res.time}</td>
											<td className="px-6 py-4">
												<span
													className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
														res.status === "Confirmed" ||
														res.status === "Active"
															? "bg-[#7BC96F] text-[#171717]"
															: "bg-[#FFD447] text-[#171717]"
													}`}
												>
													{res.status}
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>

					{/* Upcoming Events */}
					<section>
						<div className="flex items-center justify-between mb-4">
							<h2 className="font-display font-bold text-xl uppercase">
								Upcoming Events
							</h2>
							<button
								type="button"
								className="text-sm font-display font-bold uppercase text-[#5578F5]"
							>
								Manage Events
							</button>
						</div>
						<div className="space-y-4">
							{UPCOMING_EVENTS.map((evt) => (
								<div
									key={evt.id}
									className="bg-white border-2 border-[#171717] p-4 rounded-xl flex items-center justify-between shadow-[4px_4px_0px_0px_#171717]"
								>
									<div>
										<h3 className="font-display font-bold text-lg uppercase">
											{evt.title}
										</h3>
										<p className="font-sans text-sm text-[#68645C]">
											{evt.time}
										</p>
									</div>
									<div className="flex items-center gap-6">
										<div className="text-right">
											<span className="block font-display font-bold text-sm uppercase text-[#68645C]">
												Registrations
											</span>
											<span className="font-sans font-semibold">
												{evt.registrations}
											</span>
										</div>
										<button
											type="button"
											className="w-10 h-10 border-2 border-[#171717] rounded-md flex items-center justify-center hover:bg-[#FFD447]"
										>
											<CaretRight weight="bold" />
										</button>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>

				<div>
					{/* Quick Actions */}
					<section>
						<h2 className="font-display font-bold text-xl uppercase mb-4">
							Quick Actions
						</h2>
						<div className="space-y-3">
							<QuickActionButton label="Create Event" color="bg-[#FFD447]" />
							<QuickActionButton label="Add Game" color="bg-white" />
							<QuickActionButton label="Add Comic" color="bg-white" />
							<QuickActionButton label="Add Food Item" color="bg-white" />
							<QuickActionButton label="Create Blog" color="bg-white" />
							<QuickActionButton label="Add Stock" color="bg-white" />
						</div>
					</section>

					{/* Attention Needed */}
					<section className="mt-8">
						<div className="bg-[#FF6B61] text-white p-6 rounded-xl border-2 border-[#171717] shadow-[4px_4px_0px_0px_#171717]">
							<div className="flex items-center gap-2 mb-4">
								<WarningCircle size={24} weight="fill" />
								<h3 className="font-display font-bold uppercase">
									Attention Needed
								</h3>
							</div>
							<ul className="space-y-3 font-sans text-sm font-medium">
								<li className="flex justify-between items-center pb-2 border-b border-white/20">
									<span>Pending Reviews</span>
									<span className="bg-white text-[#FF6B61] px-2 py-0.5 rounded-full text-xs">
										5
									</span>
								</li>
								<li className="flex justify-between items-center pb-2 border-b border-white/20">
									<span>Game Master Conflict</span>
									<span className="bg-white text-[#FF6B61] px-2 py-0.5 rounded-full text-xs">
										1
									</span>
								</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

function StatCard({
	title,
	value,
	color,
	textColor = "text-[#171717]",
}: {
	title: string;
	value: string;
	color: string;
	textColor?: string;
}) {
	return (
		<div
			className={`${color} ${textColor} p-5 rounded-xl border-2 border-[#171717] shadow-[4px_4px_0px_0px_#171717] flex flex-col justify-between`}
		>
			<h3 className="font-display font-bold text-xs uppercase mb-4 opacity-80">
				{title}
			</h3>
			<p className="font-display font-extrabold text-3xl">{value}</p>
		</div>
	);
}

function QuickActionButton({ label, color }: { label: string; color: string }) {
	return (
		<button
			type="button"
			className={`w-full ${color} border-2 border-[#171717] p-4 rounded-xl flex items-center justify-center gap-3 font-display font-bold uppercase text-sm shadow-[4px_4px_0px_0px_#171717] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_#171717] transition-all`}
		>
			<Plus size={18} weight="bold" />
			{label}
		</button>
	);
}

function EventsPlaceholder() {
	return (
		<div className="animate-in fade-in duration-300">
			<div className="flex justify-between items-end mb-8">
				<div>
					<h1 className="font-display font-extrabold text-4xl uppercase mb-2">
						Events
					</h1>
					<p className="font-sans text-[#68645C]">
						Manage cafe events, tournaments, and meetups.
					</p>
				</div>
				<button
					type="button"
					className="bg-[#FFD447] text-[#171717] border-2 border-[#171717] px-6 py-3 rounded-xl flex items-center gap-2 font-display font-bold uppercase text-sm shadow-[4px_4px_0px_0px_#171717]"
				>
					<Plus size={18} weight="bold" />
					Create Event
				</button>
			</div>

			<div className="bg-white border-2 border-[#171717] rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#171717] min-h-[400px] flex items-center justify-center">
				<div className="text-center p-8">
					<CalendarBlank
						size={48}
						className="mx-auto mb-4 text-[#D9D4C8]"
						weight="duotone"
					/>
					<h3 className="font-display font-bold text-xl uppercase mb-2">
						Event Management
					</h3>
					<p className="font-sans text-[#68645C] max-w-sm mx-auto mb-6">
						This section would list all events with filtering, status updates,
						and links to edit/delete workflows.
					</p>
				</div>
			</div>
		</div>
	);
}
