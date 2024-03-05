import BuildCard from "@/components/build-card";
import { getDeviceBuilds, getDevices } from "@/lib/api/api";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params,
}: { params: { slug: string } }): Promise<Metadata> {
	const device = (await getDevices()).filter((device) => device.codename)[0]
	return {
		title: device.name
	}
}

export async function generateStaticParams() {
	return (await getDevices()).map((device) => device.codename)
}

export default async function Device({ params }: { params: { slug: string } }) {
	const device = (await getDevices()).filter((device) => device.codename === params.slug)[0]
	const builds = await getDeviceBuilds(params.slug);

	if (!device) notFound();

	return (
		<main className="p-14 min-h-screen">
			<div className="flex flex-col gap-24 justify-center items-center w-full lg:flex-row">
				<div className="flex flex-col gap-y-4 p-8 rounded-xl bg-neutral-950">
					<div>
						<h1 className="text-2xl font-medium">{device.name}</h1>
						<h2 className="text-lg text-neutral-700">{device.codename}</h2>
					</div>

					<div className="flex flex-col gap-y-1">
						<p className="text-white/70">
							Maintained by{" "}
							<span className="font-medium text-white">{device.maintainer.nickname}</span>
						</p>
						<p className="text-white/70">
							Telegram: <Link href={`https://t.me/${device.maintainer.telegram_tag.replace("@", "")}`}
								target="_blank" className="font-medium text-white underline underline-offset-4">{device.maintainer.telegram_tag}</Link>
						</p>
					</div>
				</div>
				{builds && builds.length !== 0 ? (
					<div className="flex flex-col items-center">
						<h1 className="pb-4 text-xl font-medium">Available builds</h1>
						<div className="grid grid-cols-1 gap-7 xl:grid-cols-2">
							{builds.map((build) => (
								<BuildCard {...build} key={build.checksum} />
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
