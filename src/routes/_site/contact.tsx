import {
	ArrowRight,
	CalendarCheck,
	CalendarPlus,
	CaretDown,
	ChatCircle,
	ChatText,
	CheckCircle,
	Envelope,
	FacebookLogo,
	type Icon,
	InstagramLogo,
	MapPin,
	PaperPlaneTilt,
	Phone,
	Sparkle,
	UsersThree,
	WarningCircle,
	WhatsappLogo,
	XLogo,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
	type ChangeEvent,
	type FormEvent,
	type ReactNode,
	useState,
} from "react";
import { Reveal } from "#/components/Reveal";

export const Route = createFileRoute("/_site/contact")({ component: Contact });

const TOPICS = [
	"General Enquiry",
	"Reservation",
	"Event",
	"Collaboration",
	"Feedback",
	"Location",
	"Games",
	"Comics",
	"LEGO",
	"Food & Cafe",
	"Other",
];

const LOCATIONS = [
	"General / Not location specific",
	"Pune",
	"Other C&B locations",
];

type CardTone = "yellow" | "blue" | "coral" | "green" | "ink";
const tileTone: Record<CardTone, string> = {
	yellow: "bg-accent text-foreground",
	blue: "bg-blue text-white",
	coral: "bg-coral text-white",
	green: "bg-green text-foreground",
	ink: "bg-white text-foreground",
};

type HelpCard = {
	title: string;
	text: string;
	cta: string;
	Icon: Icon;
	tone: CardTone;
	topic?: string;
	to?: "/visit";
};

const helpCards: HelpCard[] = [
	{
		title: "General Enquiries",
		text: "Questions about Comics & Brics? Drop us a message.",
		cta: "Get in touch",
		Icon: ChatCircle,
		tone: "yellow",
		topic: "General Enquiry",
	},
	{
		title: "Reservations",
		text: "Need help with a table, game, or other reservation?",
		cta: "Ask about a reservation",
		Icon: CalendarCheck,
		tone: "blue",
		topic: "Reservation",
	},
	{
		title: "Events & Collaborations",
		text: "Planning an event or interested in collaborating with C&B?",
		cta: "Talk to us",
		Icon: CalendarPlus,
		tone: "coral",
		topic: "Event",
	},
	{
		title: "Feedback",
		text: "Have an idea, suggestion, or something you'd like us to know?",
		cta: "Send feedback",
		Icon: ChatText,
		tone: "green",
		topic: "Feedback",
	},
	{
		title: "Locations",
		text: "Looking for a Comics & Brics location?",
		cta: "Visit our locations",
		Icon: MapPin,
		tone: "ink",
		to: "/visit",
	},
];

const infoBlocks: {
	Icon: Icon;
	label: string;
	value: string;
	tone: CardTone;
}[] = [
	{ Icon: Phone, label: "Phone", value: "+91 XXX XXX XXXX", tone: "blue" },
	{
		Icon: Envelope,
		label: "Email",
		value: "hello@comicsandbrics.com",
		tone: "yellow",
	},
	{
		Icon: WhatsappLogo,
		label: "WhatsApp",
		value: "Chat with us",
		tone: "green",
	},
	{
		Icon: InstagramLogo,
		label: "Instagram",
		value: "@comicsandbrics",
		tone: "coral",
	},
	{
		Icon: FacebookLogo,
		label: "Facebook",
		value: "Comics & Brics",
		tone: "ink",
	},
];

const socials: { Icon: Icon; label: string; handle: string }[] = [
	{ Icon: InstagramLogo, label: "Instagram", handle: "@comicsandbrics" },
	{ Icon: FacebookLogo, label: "Facebook", handle: "Comics & Brics" },
	{ Icon: XLogo, label: "Twitter / X", handle: "@comicsandbrics" },
	{ Icon: UsersThree, label: "WhatsApp Community", handle: "Join the group" },
];

const faqs: { q: string; a: ReactNode }[] = [
	{
		q: "How do I reserve a table?",
		a: (
			<>
				Pick your spot on the Visit page, or send us a message with
				"Reservation" selected and we'll sort it out.
			</>
		),
	},
	{
		q: "How do I reserve a game?",
		a: (
			<>
				Browse the collection under Games, then drop us a note with the title —
				we'll hold it for your table.
			</>
		),
	},
	{
		q: "Where can I find your locations?",
		a: (
			<>
				All our cafes live on the{" "}
				<Link
					to="/visit"
					className="font-bold text-blue no-underline hover:underline"
				>
					Visit page
				</Link>
				, with hours and directions.
			</>
		),
	},
	{
		q: "Can I enquire about hosting an event?",
		a: (
			<>
				Absolutely. Use the form above with "Event" or "Collaboration" and tell
				us what you have in mind.
			</>
		),
	},
	{
		q: "How can I suggest a game or comic?",
		a: (
			<>
				We love recommendations — send a message with "Games" or "Comics" and
				we'll take a look.
			</>
		),
	},
];

function scrollToForm() {
	document
		.getElementById("contact-form")
		?.scrollIntoView({ behavior: "smooth" });
}

type Field = "name" | "email" | "phone" | "topic" | "location" | "message";
const EMPTY: Record<Field, string> = {
	name: "",
	email: "",
	phone: "",
	topic: "",
	location: LOCATIONS[0],
	message: "",
};

function Contact() {
	const [form, setForm] = useState<Record<Field, string>>(EMPTY);
	const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
	const [sent, setSent] = useState(false);
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const update =
		(key: Field) =>
		(
			e: ChangeEvent<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>,
		) => {
			setForm((f) => ({ ...f, [key]: e.target.value }));
			setErrors((prev) => ({ ...prev, [key]: undefined }));
		};

	const pickTopic = (topic: string) => {
		setForm((f) => ({ ...f, topic }));
		scrollToForm();
	};

	const submit = (e: FormEvent) => {
		e.preventDefault();
		const next: Partial<Record<Field, string>> = {};
		if (!form.name.trim()) next.name = "Please enter your name.";
		if (!form.email.trim()) next.email = "Please enter your email.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
			next.email = "Please enter a valid email.";
		if (!form.topic) next.topic = "Please choose a topic.";
		if (!form.message.trim()) next.message = "Please tell us a little more.";
		setErrors(next);
		if (Object.keys(next).length === 0) setSent(true);
	};

	const reset = () => {
		setForm(EMPTY);
		setErrors({});
		setSent(false);
	};

	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
			{/* 1. HERO */}
			<section className="relative border-b-4 border-foreground overflow-hidden py-16 md:py-24">
				<div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
					<span className="inline-flex items-center gap-2 bg-accent text-foreground font-display font-bold text-xs uppercase tracking-wider px-4 py-2 border-2 border-foreground rounded-full comic-shadow-sm transform -rotate-2 mb-6">
						<ChatCircle size={16} weight="fill" /> Say Hello
					</span>
					<h1 className="font-display font-extrabold text-6xl md:text-8xl uppercase tracking-tighter mb-6">
						Let's Talk.
					</h1>
					<p className="font-sans text-xl md:text-2xl font-bold max-w-2xl mx-auto text-muted-foreground">
						Got a question, idea, or just want to say hi? We'd love to hear from
						you.
					</p>
				</div>
			</section>

			{/* 2. HOW CAN WE HELP */}
			<section className="py-20 border-b-4 border-foreground">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase mb-12 text-center tracking-tighter">
						How Can We Help?
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{helpCards.map((card, i) => (
							<Reveal key={card.title} index={i % 3} className="h-full">
								<div className="bg-white rounded-2xl border-4 border-foreground p-8 comic-shadow hover:comic-shadow-hover hover:-translate-y-1 transition-all flex flex-col h-full group">
									<div
										className={`w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center mb-5 ${tileTone[card.tone]}`}
									>
										<card.Icon size={28} />
									</div>
									<h3 className="font-display font-extrabold text-2xl uppercase mb-2">
										{card.title}
									</h3>
									<p className="font-sans font-bold text-muted-foreground mb-6">
										{card.text}
									</p>
									{card.to ? (
										<Link
											to={card.to}
											className="mt-auto inline-flex items-center gap-2 font-display font-bold uppercase text-sm no-underline text-foreground group-hover:text-green transition-colors"
										>
											{card.cta}
											<ArrowRight
												size={18}
												className="group-hover:translate-x-1 transition-transform"
											/>
										</Link>
									) : (
										<button
											type="button"
											onClick={() => card.topic && pickTopic(card.topic)}
											className="mt-auto inline-flex items-center gap-2 font-display font-bold uppercase text-sm text-foreground hover:text-blue transition-colors w-max"
										>
											{card.cta}
											<ArrowRight
												size={18}
												className="group-hover:translate-x-1 transition-transform"
											/>
										</button>
									)}
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 3. MAIN CONTACT — info + form */}
			<section className="py-20 bg-muted border-b-4 border-foreground">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
					{/* LEFT: FIND US */}
					<div>
						<h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase mb-3 tracking-tighter">
							Find Us.
						</h2>
						<p className="font-sans font-bold text-muted-foreground mb-8">
							The quickest ways to reach the C&amp;B crew.
						</p>
						<div className="space-y-4">
							{infoBlocks.map((info) => (
								<div
									key={info.label}
									className="bg-white rounded-xl border-2 border-foreground p-5 comic-shadow-sm hover:comic-shadow-hover transition-all flex items-center gap-4"
								>
									<div
										className={`w-12 h-12 rounded-lg border-2 border-foreground flex items-center justify-center flex-shrink-0 ${tileTone[info.tone]}`}
									>
										<info.Icon size={24} />
									</div>
									<div className="min-w-0">
										<p className="font-display font-bold uppercase text-xs text-muted-foreground">
											{info.label}
										</p>
										<p className="font-sans font-bold text-foreground break-words">
											{info.value}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* RIGHT: FORM */}
					<div id="contact-form" className="scroll-mt-28">
						<div className="bg-white rounded-2xl border-4 border-foreground p-6 md:p-8 comic-shadow">
							{sent ? (
								<div className="text-center py-10 animate-in fade-in zoom-in-95 duration-300">
									<div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green border-4 border-foreground flex items-center justify-center transform -rotate-3">
										<CheckCircle
											size={44}
											weight="fill"
											className="text-foreground"
										/>
									</div>
									<h3 className="font-display font-extrabold text-3xl md:text-4xl uppercase mb-3 tracking-tighter">
										Message Sent!
									</h3>
									<p className="font-sans font-bold text-muted-foreground max-w-sm mx-auto mb-8">
										Thanks for reaching out. We'll get back to you soon.
									</p>
									<button
										type="button"
										onClick={reset}
										className="bg-accent text-foreground font-display font-bold uppercase px-6 py-3 rounded-xl border-2 border-foreground comic-shadow-sm spring-press"
									>
										Send another
									</button>
								</div>
							) : (
								<form onSubmit={submit} noValidate>
									<h2 className="font-display font-extrabold text-3xl uppercase mb-6 tracking-tighter">
										Send Us A Message.
									</h2>
									<div className="space-y-5">
										<FieldShell label="Name" error={errors.name}>
											<input
												type="text"
												value={form.name}
												onChange={update("name")}
												placeholder="Your name"
												className={inputClass(errors.name)}
											/>
										</FieldShell>
										<FieldShell label="Email" error={errors.email}>
											<input
												type="email"
												value={form.email}
												onChange={update("email")}
												placeholder="you@example.com"
												className={inputClass(errors.email)}
											/>
										</FieldShell>
										<FieldShell
											label="Phone Number"
											optional
											error={errors.phone}
										>
											<input
												type="tel"
												value={form.phone}
												onChange={update("phone")}
												placeholder="Optional"
												className={inputClass(errors.phone)}
											/>
										</FieldShell>
										<FieldShell
											label="What can we help with?"
											error={errors.topic}
										>
											<SelectField
												value={form.topic}
												onChange={update("topic")}
												invalid={!!errors.topic}
												placeholder="Choose a topic"
												options={TOPICS}
											/>
										</FieldShell>
										<FieldShell
											label="Which C&B location?"
											error={errors.location}
										>
											<SelectField
												value={form.location}
												onChange={update("location")}
												invalid={false}
												options={LOCATIONS}
											/>
										</FieldShell>
										<FieldShell label="Message" error={errors.message}>
											<textarea
												value={form.message}
												onChange={update("message")}
												rows={4}
												placeholder="Tell us what's on your mind..."
												className={`${inputClass(errors.message)} resize-none`}
											/>
										</FieldShell>
										<button
											type="submit"
											className="w-full bg-foreground text-primary-foreground font-display font-extrabold uppercase tracking-wider px-6 py-4 rounded-xl border-2 border-foreground comic-shadow spring-press flex items-center justify-center gap-2"
										>
											Submit Message <PaperPlaneTilt size={20} weight="fill" />
										</button>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* 4. JUST WANT TO CHAT */}
			<section className="py-16 border-b-4 border-foreground">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase mb-8 text-center tracking-tighter">
						Just Want To Chat?
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
						{[
							{
								Icon: Phone,
								label: "Call Us",
								sub: "+91 XXX XXX XXXX",
								tone: "bg-blue text-white",
							},
							{
								Icon: WhatsappLogo,
								label: "WhatsApp Us",
								sub: "Chat with us",
								tone: "bg-green text-foreground",
							},
							{
								Icon: Envelope,
								label: "Email Us",
								sub: "hello@comicsandbrics.com",
								tone: "bg-accent text-foreground",
							},
						].map((a) => (
							<button
								key={a.label}
								type="button"
								className="bg-white rounded-xl border-2 border-foreground p-5 comic-shadow-sm spring-press hover:comic-shadow-hover transition-all flex items-center gap-4 text-left"
							>
								<div
									className={`w-12 h-12 rounded-lg border-2 border-foreground flex items-center justify-center flex-shrink-0 ${a.tone}`}
								>
									<a.Icon size={24} weight="bold" />
								</div>
								<div className="min-w-0">
									<p className="font-display font-extrabold uppercase text-sm">
										{a.label}
									</p>
									<p className="font-sans text-xs font-bold text-muted-foreground break-words">
										{a.sub}
									</p>
								</div>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* 5. PLANNING SOMETHING BIG */}
			<section className="py-20 bg-coral border-b-4 border-foreground relative overflow-hidden">
				<div className="absolute inset-0 halftone-bg opacity-20 pointer-events-none" />
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
					<span className="inline-flex items-center gap-2 bg-white text-foreground font-display font-bold text-xs uppercase tracking-wider px-4 py-2 border-2 border-foreground rounded-full comic-shadow-sm transform rotate-2 mb-6">
						<Sparkle size={16} weight="fill" /> Big Ideas Welcome
					</span>
					<h2
						className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tighter text-white mb-5"
						style={{ textShadow: "4px 4px 0px #171717" }}
					>
						Planning Something Big?
					</h2>
					<p className="font-sans text-lg md:text-xl font-bold text-white mb-10 max-w-2xl mx-auto">
						Events, collaborations, community ideas, or something completely
						different? Tell us what you've got in mind.
					</p>
					<button
						type="button"
						onClick={() => pickTopic("Event")}
						className="bg-white text-foreground font-display font-extrabold uppercase tracking-wider px-8 py-4 rounded-xl border-4 border-foreground comic-shadow comic-shadow-hover spring-press inline-flex items-center gap-2"
					>
						Start A Conversation <ArrowRight size={22} weight="bold" />
					</button>
				</div>
			</section>

			{/* 6. STAY IN THE LOOP */}
			<section className="py-20 bg-muted border-b-4 border-foreground">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase mb-3 tracking-tighter">
						Stay In The Loop.
					</h2>
					<p className="font-sans font-bold text-muted-foreground mb-10 max-w-2xl mx-auto">
						Follow Comics &amp; Brics for games, comics, events, new additions,
						and everything happening at C&amp;B.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
						{socials.map((s) => (
							<button
								key={s.label}
								type="button"
								className="bg-white rounded-xl border-2 border-foreground p-6 comic-shadow-sm spring-press hover:comic-shadow-hover hover:-translate-y-1 transition-all flex flex-col items-center gap-3 group"
							>
								<s.Icon
									size={36}
									className="group-hover:scale-110 transition-transform"
								/>
								<div>
									<p className="font-display font-extrabold uppercase text-sm">
										{s.label}
									</p>
									<p className="font-sans text-xs font-bold text-muted-foreground">
										{s.handle}
									</p>
								</div>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* 7. QUICK QUESTIONS */}
			<section className="py-20 border-b-4 border-foreground">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase mb-10 text-center tracking-tighter">
						Quick Questions?
					</h2>
					<div className="space-y-4">
						{faqs.map((faq, i) => {
							const open = openFaq === i;
							return (
								<div
									key={faq.q}
									className="bg-white rounded-xl border-2 border-foreground comic-shadow-sm overflow-hidden"
								>
									<button
										type="button"
										onClick={() => setOpenFaq(open ? null : i)}
										className="w-full flex items-center justify-between gap-4 p-5 text-left"
										aria-expanded={open}
									>
										<span className="font-display font-bold uppercase text-lg">
											{faq.q}
										</span>
										<CaretDown
											size={20}
											weight="bold"
											className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
										/>
									</button>
									{open && (
										<div className="px-5 pb-5 -mt-1 font-sans font-medium text-muted-foreground animate-in fade-in slide-in-from-top-1 duration-200">
											{faq.a}
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

function inputClass(error?: string) {
	return `w-full bg-white border-2 rounded-lg py-3 px-4 font-sans font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow ${
		error ? "border-red-500" : "border-foreground"
	}`;
}

function FieldShell({
	label,
	error,
	optional,
	children,
}: {
	label: string;
	error?: string;
	optional?: boolean;
	children: ReactNode;
}) {
	return (
		<div>
			{/* biome-ignore lint/a11y/noLabelWithoutControl: the input control is nested via children */}
			<label className="block">
				<span className="block font-display font-bold uppercase text-sm mb-2">
					{label}
					{optional && (
						<span className="text-muted-foreground font-medium normal-case">
							{" "}
							— optional
						</span>
					)}
				</span>
				{children}
			</label>
			{error && (
				<p className="mt-1.5 flex items-center gap-1 text-sm font-bold text-red-500">
					<WarningCircle size={16} weight="fill" /> {error}
				</p>
			)}
		</div>
	);
}

function SelectField({
	value,
	onChange,
	options,
	invalid,
	placeholder,
}: {
	value: string;
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	options: string[];
	invalid: boolean;
	placeholder?: string;
}) {
	return (
		<div className="relative">
			<select
				value={value}
				onChange={onChange}
				className={`w-full appearance-none bg-white border-2 rounded-lg py-3 pl-4 pr-10 font-sans font-medium focus:outline-none focus:ring-2 focus:ring-accent transition-shadow ${
					invalid ? "border-red-500" : "border-foreground"
				} ${value ? "text-foreground" : "text-muted-foreground"}`}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options.map((o) => (
					<option key={o} value={o} className="text-foreground">
						{o}
					</option>
				))}
			</select>
			<CaretDown
				size={18}
				weight="bold"
				className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground"
			/>
		</div>
	);
}
