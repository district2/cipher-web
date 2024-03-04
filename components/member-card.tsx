import Image from "next/image";
import Link from "next/link";

export default function MemberCard({
	name,
	projectRole,
	image,
	gitUsername,
}: { name: string; projectRole: string; image: string; gitUsername: string }) {
	return (
		<Link
			href={`https://github.com/${gitUsername}`}
			target="_blank"
			className=""
		>
			<div className="flex relative items-center p-4 w-64 rounded-lg transition-shadow ease-linear bg-neutral-950 ring-neutral-700 hover:ring group">
				<Image
					src={image}
					alt={`${name}'s github picture`}
					width={90}
					height={90}
					className="absolute -left-4 rounded-full transition-shadow ease-linear ring-neutral-700 group-hover:ring"
				/>
				<div className="ml-auto text-center">
					<h1>{name}</h1>
					<p className="text-sm text-white/50">{projectRole}</p>
				</div>
			</div>
		</Link>
	);
}
