import androidIcon from "@/public/icons/android.svg";
import calendarIcon from "@/public/icons/calendar.svg";
import variantIcon from "@/public/icons/variant.svg";
import versionIcon from "@/public/icons/version.svg";
import sizeIcon from "@/public/icons/size.svg";
import checksumIcon from "@/public/icons/checksum.svg";
import Image from "next/image";
import Button from "./button";
import { Build } from "@/lib/api/api.types";

export default function BuildCard(build: Build) {
	const info: [string, string, string][] =
		[[calendarIcon, "Date", build.date],
		[versionIcon, "Version", build.version.tag],
		[androidIcon, "Android", build.version.android],
		[variantIcon, "Variant", build.version.variant],
		[sizeIcon, "Size", build.size],
		[checksumIcon, "Checksum", build.checksum]]

	return (
		<div className="flex flex-col gap-y-2 p-6 font-medium rounded-lg bg-neutral-950 relative">
			<p className="absolute -top-3 -left-3 font-bold tracking-widest">
				{build.romtype}
			</p>
			{info.map(([image, name, value]) => (
				<div className="flex gap-x-3" key={name}>
					<Image src={image} alt={`${name} icon`} />
					<div className="text-white/70 overflow-auto">
						{name}: <span className="text-white">{value}</span>
					</div>
				</div>
			))}
			<Button text="Download" link={build.url} ext />
		</div>
	);
}
