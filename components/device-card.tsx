import Link from "next/link";

export default function DeviceCard({
	name,
	code_name,
	maintainer,
	date,
}: {
	name: string;
	code_name: string;
	maintainer: string;
	date?: string | undefined;
}) {
	return (
		<Link
			className="relative p-3 rounded-2xl transition-shadow ease-linear size-56 bg-neutral-950 ring-neutral-700 hover:ring"
			href={`/devices/${code_name}`}
		>
			<div className="absolute bottom-0 left-0" style={{ padding: "inherit" }}>
				<p>{name}</p>
				<p className="text-neutral-700">{code_name}</p>
			</div>
			<div>
				<p className="text-neutral-500">
					Maintainer: <span className="font-medium">{maintainer}</span>
				</p>

				<p className="break-words text-neutral-500">
					{date ? (
						<>
							Latest build: <span className="font-medium">{date}</span>
						</>
					) : (
						"No builds yet"
					)}
				</p>
			</div>
		</Link>
	);
}
