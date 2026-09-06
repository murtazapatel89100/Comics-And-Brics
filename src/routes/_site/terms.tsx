import { Scroll } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "#/components/site/LegalPage";

export const Route = createFileRoute("/_site/terms")({ component: Terms });

const sections: LegalSection[] = [
	{
		heading: "Acceptance Of Terms",
		paragraphs: [
			"This is placeholder text. A real document would state that by using the Comics & Brics website you agree to these terms, and that if you do not agree you should not use the site.",
		],
	},
	{
		heading: "Using The Site",
		paragraphs: [
			"Dummy content: this section would describe acceptable use of the website and its content, and confirm the site is provided for browsing our cafe, games, comics, food and events.",
		],
	},
	{
		heading: "Reservations & Events",
		paragraphs: [
			"Placeholder: terms around table and game reservations, event registrations, cancellations, and any related conditions would live here. In the prototype these flows are illustrative only.",
		],
	},
	{
		heading: "Intellectual Property",
		paragraphs: [
			"Dummy text: branding, artwork, and content on this site would be described as owned by Comics & Brics or its licensors and not reusable without permission.",
		],
	},
	{
		heading: "Prohibited Use",
		paragraphs: [
			"Placeholder: a real policy would prohibit misuse such as attempting to disrupt the site, scraping data, or using it for unlawful purposes.",
		],
	},
	{
		heading: "Limitation Of Liability",
		paragraphs: [
			"Dummy content: this section would set out, within the limits of applicable law, that the site is provided 'as is' and would limit liability for issues arising from its use.",
		],
	},
	{
		heading: "Changes",
		paragraphs: [
			"Placeholder: we would reserve the right to update these terms, with the 'last updated' date reflecting the current version.",
		],
	},
	{
		heading: "Governing Law",
		paragraphs: [
			"Dummy text: a real document would specify the governing law and jurisdiction — for example, the laws of India — for any disputes.",
		],
	},
	{
		heading: "Contact",
		paragraphs: [
			"Placeholder: questions about these terms would be handled through a real contact channel. For now, reach us through the Contact page.",
		],
	},
];

function Terms() {
	return (
		<LegalPage
			Icon={Scroll}
			title="Terms & Conditions"
			updated="September 2026 (placeholder)"
			intro="The terms that would govern use of the Comics & Brics website. Everything below is sample copy for the prototype and is not a binding agreement yet."
			sections={sections}
		/>
	);
}
