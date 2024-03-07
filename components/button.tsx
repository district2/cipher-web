import Link from "next/link";

interface ButtonProps {
	text: string
	link: string
	ext?: boolean
}

export default function Button({
	text,
	link,
	ext,
}: ButtonProps) {
	return (
		<Link
			className={"px-5 py-2 text-lg font-medium text-center rounded-lg transition-colors duration-300 text-white/80 hover:bg-neutral-800/70 hover:text-white lg:text-xl"}
			target={ext ? "_blank" : ""}
			href={link}
		>
			{text}
		</Link>
	);
}
