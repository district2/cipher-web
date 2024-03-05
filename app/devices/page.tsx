import DeviceCard from "@/components/device-card";
import { getDeviceBuilds, getDevices } from "@/lib/api/api";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Devices",
};

export default async function Pages() {
	const devices = await getDevices()

	return (
		<main className="flex flex-col gap-y-24 p-12 min-h-screen">
			<h1 className="text-3xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b to-gray-500 from-neutral-600">
				Bring a new life to your device
			</h1>
			<div className="flex flex-wrap gap-6 justify-center">
				{devices.map(async (device) => {

					const builds = await getDeviceBuilds(device.codename)

					return (
						<DeviceCard
							name={device.name}
							code_name={device.codename}
							maintainer={device.maintainer.nickname}
							date={builds.pop()?.date}
							key={device.codename}
						/>
					)
				})}
			</div>
		</main>
	);
}
