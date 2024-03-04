import BuildCard from "@/components/build-card";
import { supabase } from "@/lib/supabase/supabase";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params,
}: { params: { slug: string } }): Promise<Metadata> {
	const { data: device, error } = await supabase
		.from("device")
		.select()
		.eq("code_name", params.slug)
		.single();
	if (error) throw new Error("Unable to fetch device");

	return {
		title: device.name,
	};
}

export async function generateStaticParams() {
	const { data: devices, error } = await supabase
		.from("device")
		.select("code_name");
	if (error) throw new Error("Unable to fetch devices");

	return devices.map(({ code_name }) => {
		code_name;
	});
}

export default async function Device({ params }: { params: { slug: string } }) {
	const { data: device, error } = await supabase
		.from("device")
		.select("*, build(*)")
		.eq("code_name", params.slug)
		.single();

	if (!device) notFound();
	else if (error) throw new Error("Failed to fetch device data");

	return (
		<main className="p-14 min-h-screen">
			<div className="flex flex-col gap-24 justify-center items-center w-full lg:flex-row">
				<div className="flex flex-col gap-y-4 p-8 rounded-xl bg-neutral-950">
					<div>
						<h1 className="text-2xl font-medium">{device.name}</h1>
						<h2 className="text-lg text-neutral-700">{device.code_name}</h2>
					</div>

					<p className="text-white/70">
						Maintained by{" "}
						<span className="font-medium text-white">{device.maintainer}</span>
					</p>
				</div>
				{device.build && device.build.length !== 0 ? (
					<div className="flex flex-col items-center">
						<h1 className="pb-4 text-xl font-medium">Available builds</h1>
						<div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
							{device.build.map((build) => (
								<BuildCard {...build} key={build.id} />
							))}
						</div>
					</div>
				) : (
					<p className="text-lg">No builds available yet</p>
				)}
			</div>
		</main>
	);
}
