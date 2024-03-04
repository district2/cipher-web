import DeviceCard from "@/components/device-card";
import { supabase } from "@/lib/supabase/supabase";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Devices",
};

export default async function Pages() {
	const { data: devices, error } = await supabase
		.from("device")
		.select("*, build(*)");

	if (!devices || error) throw new Error("Unable to fetch devices");

	return (
		<main className="flex flex-col gap-y-24 p-12 min-h-screen">
			<h1 className="text-3xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b to-gray-500 from-neutral-600">
				Bring a new life to your device
			</h1>
			<div className="flex flex-wrap gap-6 justify-center">
				{devices.map((device) => (
					<DeviceCard
						name={device.name}
						code_name={device.code_name}
						maintainer={device.maintainer}
						key={device.id}
						date={device.build.at(-1)?.created_at}
					/>
				))}
			</div>
		</main>
	);
}
