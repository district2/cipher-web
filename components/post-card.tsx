import { formatDate } from "@/lib/date";
import Link from "next/link";

export default function PostCard({ url, title, date }: { url: string, title: string, date: string }) {
	return (
		<Link
			href={url}
			className="p-3 w-60 h-24 rounded-lg transition-shadow ease-linear bg-neutral-950 ring-neutral-700 hover:ring"
		>
			<div className="break-words">
				<h1 className="font-medium">{title}</h1>
				<h2 className="text-white/80">{formatDate(date)}</h2>
			</div>
		</Link>
	);
}
