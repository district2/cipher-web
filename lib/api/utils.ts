import { formatBytes } from "../bytes";
import { formatDate } from "../date";
import { Build, RawBuild, Version } from "./api.types";

export function beautifyBuild(rawBuild: RawBuild): Build {
	const date = formatDate(Number.parseInt(rawBuild.datetime));
	const size = formatBytes(rawBuild.size);

	const version = (): Version => {
		//C50.SB.U.34.RL01
		const s = rawBuild.version.split(".");
		const tag = `${s[0].slice(1, -1)}.${s[0].slice(-1)}`;
		const variant = rawBuild.filename.toLowerCase().includes("vanilla")
			? "Vanilla"
			: "Gapps";
		const android = () => {
			switch (s[3]) {
				case "35":
					return "15";
				case "34":
					return "14";
				case "33":
					return "13";
				case "32":
					return "12L";
				case "31":
					return "12";
				case "30":
					return "11";
				default:
					return "NaN";
			}
		};
		return { tag: tag, variant: variant, android: android() };
	};

	return {
		date: date,
		size: size,
		checksum: rawBuild.id,
		romtype: rawBuild.romtype,
		version: version(),
		url: rawBuild.url,
	};
}
