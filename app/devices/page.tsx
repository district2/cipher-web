import DevicesView from "@/components/devices-view";
import GradientText from "@/components/gradient-text";
import { getDevicesWithBuilds } from "@/lib/api/api";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Devices",
};

export default async function Devices() {
	const devices = await getDevicesWithBuilds()

	return (
		<main className="flex flex-col gap-y-14 p-12 min-h-screen items-center">
			<GradientText text="Bring a new life to your device" />
			<DevicesView devices={devices} />
		</main>
	);
}
