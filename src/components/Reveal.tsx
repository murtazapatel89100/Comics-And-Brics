import {
	type ElementType,
	type ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";

/**
 * SSR-safe scroll reveal. Children render in normal flow (so hydration matches);
 * once the element scrolls into view we flip `.is-visible` to run the CSS
 * transition. `index` staggers a group of cards via transition-delay.
 */
export function Reveal({
	children,
	as: Tag = "div",
	index = 0,
	className = "",
	once = true,
}: {
	children: ReactNode;
	as?: ElementType;
	index?: number;
	className?: string;
	once?: boolean;
}) {
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setVisible(true);
						if (once) observer.disconnect();
					} else if (!once) {
						setVisible(false);
					}
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [once]);

	return (
		<Tag
			ref={ref}
			className={`reveal ${visible ? "is-visible" : ""} ${className}`}
			style={{ transitionDelay: `${index * 90}ms` }}
		>
			{children}
		</Tag>
	);
}
