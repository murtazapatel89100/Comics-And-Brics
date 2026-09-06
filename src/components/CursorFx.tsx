import { useEffect, useRef } from "react";

// Selectors that get the "interactive" (scale + yellow) cursor treatment.
const INTERACTIVE =
	'a, button, [role="button"], label, select, summary, input[type="checkbox"], input[type="radio"], [data-cursor="interactive"]';
// Elements where the native text caret must remain the only cursor.
const TEXTUAL =
	"input:not([type]), input[type='text'], input[type='email'], input[type='search'], input[type='tel'], input[type='url'], input[type='password'], input[type='number'], textarea, [contenteditable='true']";

/**
 * Branded comic cursor. A lightweight, event-driven follower that replaces the
 * native pointer on desktop only. Falls back to the static CSS cursor (or the
 * native one) on touch devices and when reduced motion is requested. Purely
 * decorative: pointer-events: none, never blocks input, keeps the text caret.
 */
export function CursorFx() {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		// Desktop pointer + motion allowed only.
		const finePointer = window.matchMedia("(pointer: fine)").matches;
		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (!finePointer || reduced) return;

		const root = document.documentElement;
		root.dataset.comicCursor = "on";

		let visible = false;
		let clickTimer: ReturnType<typeof setTimeout> | undefined;

		const onMove = (e: PointerEvent) => {
			el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
			if (!visible) {
				visible = true;
				el.classList.add("is-visible");
			}
		};

		const onOver = (e: PointerEvent) => {
			const target = e.target as Element | null;
			if (!target?.closest) return;
			if (target.closest(TEXTUAL)) {
				el.classList.remove("is-visible", "is-interactive");
				visible = false;
				return;
			}
			el.classList.toggle("is-interactive", !!target.closest(INTERACTIVE));
		};

		const onDown = () => {
			el.classList.add("is-down", "is-click");
			clearTimeout(clickTimer);
			clickTimer = setTimeout(() => el.classList.remove("is-click"), 220);
		};
		const onUp = () => el.classList.remove("is-down");

		const hide = () => {
			visible = false;
			el.classList.remove("is-visible");
		};

		window.addEventListener("pointermove", onMove, { passive: true });
		document.addEventListener("pointerover", onOver, { passive: true });
		window.addEventListener("pointerdown", onDown, { passive: true });
		window.addEventListener("pointerup", onUp, { passive: true });
		document.addEventListener("pointerleave", hide);
		window.addEventListener("blur", hide);

		return () => {
			window.removeEventListener("pointermove", onMove);
			document.removeEventListener("pointerover", onOver);
			window.removeEventListener("pointerdown", onDown);
			window.removeEventListener("pointerup", onUp);
			document.removeEventListener("pointerleave", hide);
			window.removeEventListener("blur", hide);
			clearTimeout(clickTimer);
			delete root.dataset.comicCursor;
		};
	}, []);

	return (
		<div ref={ref} className="comic-cursor" aria-hidden="true">
			<span className="comic-cursor__burst" />
			<span className="comic-cursor__pointer">
				<svg
					width="26"
					height="26"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>cursor</title>
					<path
						d="M4 2.5 L4 19 L8.2 15.1 L11 21 L14 19.6 L11.2 13.9 L17 13.6 Z"
						fill="currentColor"
						stroke="var(--foreground)"
						strokeWidth="2"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
		</div>
	);
}
