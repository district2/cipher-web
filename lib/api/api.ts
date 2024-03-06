import { RawBuild, Device } from "./api.types";
import { beautifyBuild } from "./utils";

const ENDPOINT = "https://gitlab.com/api/v4/projects/55523899/repository";
const REF_BRANCH = "?ref=main";
const WEBSITE_API_DIR = "website-api";

const LIST_DEVICES = `${ENDPOINT}/tree?path=${WEBSITE_API_DIR}&${REF_BRANCH}`;
const DEVICE = (device: string) =>
	`${ENDPOINT}/files/${WEBSITE_API_DIR}%2F${device}${REF_BRANCH}`;
const DEVICE_BUILDS = (device: string) =>
	`${ENDPOINT}/files/${device}.json${REF_BRANCH}`;

export async function getDevices() {
	const req = await fetch(LIST_DEVICES);

	if (req.status !== 200) {
		throw new Error("Unable to fetch devices list from GitLab API");
	}

	const response = await req.json();
	const file_names: string[] = response.map(
		(entry: { name: string }) => entry.name,
	);

	return Promise.all(
		file_names.map(async (file_name) => {
			const req = await fetch(DEVICE(file_name));
			if (req.status !== 200) {
				throw new Error(`Unable to fetch ${file_name} content from GitLab API`);
			}

			return JSON.parse(atob((await req.json()).content)) as Device;
		}),
	);
}

export async function getDeviceBuilds(codename: string) {
	const req = await fetch(DEVICE_BUILDS(codename));

	if (req.status !== 200) {
		throw new Error(`Unable to fetch ${codename} content from GitLab API`);
	}

	return (JSON.parse(atob((await req.json()).content)).response as RawBuild[])
		.filter((rawBuild) => rawBuild.romtype !== "INTERNAL")
		.map((rawBuild) => beautifyBuild(rawBuild));
}

export async function getDevicesWithBuilds() {
	const devices = await getDevices();

	const devicesWithBuilds: Device[] = [];

	for (const device of devices) {
		const builds = await getDeviceBuilds(device.codename);
		device.builds = builds;
		devicesWithBuilds.push(device);
	}
	return devicesWithBuilds;
}
