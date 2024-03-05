export interface Device {
	name: string;
	codename: string;
	maintainer: Maintainer;
}

interface Maintainer {
	nickname: string;
	telegram_tag: string;
}

export interface RawBuild {
	datetime: string;
	filename: string;
	id: string;
	romtype: "BETA" | "STABLE" | "INTERNAL";
	size: number;
	url: string;
	version: string;
}

export interface Build {
	date: string;
	checksum: string;
	romtype: "BETA" | "STABLE" | "INTERNAL";
	size: string;
	version: Version;
	url: string;
}

export interface Version {
	tag: string;
	android: string;
	variant: "Vanilla" | "Gapps";
}
