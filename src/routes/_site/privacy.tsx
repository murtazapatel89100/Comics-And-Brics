import { ShieldCheck } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "#/components/site/LegalPage";

export const Route = createFileRoute("/_site/privacy")({ component: Privacy });

const sections: LegalSection[] = [
	{
		heading: "Information We Collect",
		paragraphs: [
			"This is placeholder text. In a real policy, this section would describe the information Comics & Brics collects, such as your name, email address, phone number, and reservation details when you contact us or sign up to our newsletter.",
			"It would also cover information collected automatically, like your device type, browser, and general usage of the website.",
		],
	},
	{
		heading: "How We Use It",
		paragraphs: [
			"Dummy content: we would explain that information is used to respond to enquiries, manage reservations and events, send updates you have opted into, and improve the Comics & Brics experience.",
		],
	},
	{
		heading: "Cookies & Tracking",
		paragraphs: [
			"Placeholder: our website may use cookies and similar technologies. A full explanation lives in the separate Cookie Policy.",
		],
	},
	{
		heading: "Sharing & Third Parties",
		paragraphs: [
			"Dummy text: this section would list the limited circumstances in which data is shared, for example with trusted service providers who help us operate the cafe and website, and would confirm we do not sell your personal data.",
		],
	},
	{
		heading: "Data Retention",
		paragraphs: [
			"Placeholder: we would state how long different types of information are kept and how they are securely disposed of when no longer needed.",
		],
	},
	{
		heading: "Your Rights",
		paragraphs: [
			"Dummy content: depending on where you live, you may have rights to access, correct, or delete your data, or to withdraw consent. A real policy would explain how to exercise these rights.",
		],
	},
	{
		heading: "Contact",
		paragraphs: [
			"Placeholder: questions about privacy would be directed to a real contact channel. For now, reach us through the Contact page.",
		],
	},
];

function Privacy() {
	return (
		<LegalPage
			Icon={ShieldCheck}
			title="Privacy Policy"
			updated="September 2026 (placeholder)"
			intro="How Comics & Brics would handle your information. Everything below is sample copy for the prototype and does not reflect real data practices yet."
			sections={sections}
		/>
	);
}
