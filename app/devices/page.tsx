import DevicesView from "@/components/devices-view";
import { getDevicesWithBuilds } from "@/lib/api/api";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Devices",
};

export default async function Pages() {
	const devices = await getDevicesWithBuilds()

	return (
		<main className="flex flex-col gap-y-14 p-12 min-h-screen items-center">
			<h1 className="text-3xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b to-gray-500 from-neutral-600">
				Bring a new life to your device
			</h1>
			<DevicesView devices={devices} />
		</main>
	);
}
