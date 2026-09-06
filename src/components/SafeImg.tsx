import { Dices } from "lucide-react";
import { useState } from "react";

export function SafeImg({
	src,
	alt,
	className,
}: {
	src: string;
	alt: string;
	className?: string;
}) {
	const [failed, setFailed] = useState(false);
	if (failed) {
		return (
			<div
				className={`${className ?? ""} flex items-center justify-center bg-muted`}
				aria-label={alt}
				role="img"
			>
				<Dices className="text-muted-foreground/40" size={40} />
			</div>
		);
	}
	return (
		<img
			src={src}
			alt={alt}
			className={className}
			onError={() => setFailed(true)}
			loading="lazy"
		/>
	);
}
