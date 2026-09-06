import { Cookie } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "#/components/site/LegalPage";

export const Route = createFileRoute("/_site/cookies")({ component: Cookies });

const sections: LegalSection[] = [
	{
		heading: "What Are Cookies",
		paragraphs: [
			"This is placeholder text. Cookies are small files stored on your device that help a website remember your preferences and understand how it is used. A real policy would define them in plain language here.",
		],
	},
	{
		heading: "Types We Use",
		paragraphs: [
			"Dummy content: this section would list categories such as essential cookies (needed for the site to work), preference cookies (remembering your choices), and analytics cookies (understanding usage).",
			"Any advertising or third-party cookies would be clearly disclosed.",
		],
	},
	{
		heading: "Why We Use Them",
		paragraphs: [
			"Placeholder: we would explain that cookies help keep the site working smoothly, remember your settings, and let us improve the Comics & Brics experience over time.",
		],
	},
	{
		heading: "Managing Cookies",
		paragraphs: [
			"Dummy text: you would be told how to accept or reject non-essential cookies and how to change your browser settings to control them. Blocking some cookies may affect how parts of the site work.",
		],
	},
	{
		heading: "Changes To This Policy",
		paragraphs: [
			"Placeholder: we would note that this policy can change and that the 'last updated' date at the top reflects the latest version.",
		],
	},
	{
		heading: "Contact",
		paragraphs: [
			"Placeholder: cookie questions would be answered through a real contact channel. For now, reach us through the Contact page.",
		],
	},
];

function Cookies() {
	return (
		<LegalPage
			Icon={Cookie}
			title="Cookie Policy"
			updated="September 2026 (placeholder)"
			intro="How Comics & Brics would use cookies on this website. Everything below is sample copy for the prototype and does not reflect real cookie usage yet."
			sections={sections}
		/>
	);
}
