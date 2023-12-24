import BuildCard from "@/components/build-card"
import { supabase } from "@/lib/supabase/supabase";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { data: device, error } = await supabase.from("device").select().eq("code_name", params.slug).single()
    if (error)
        throw new Error("Unable to fetch device")

    return {
        title: device.name,
    }
}

export async function generateStaticParams() {
    const { data: devices, error } = await supabase.from('device').select('code_name');
    if (error)
        throw new Error("Unable to fetch devices")

    return devices.map(({ code_name }) => { code_name })
}

export default async function Device({ params }: { params: { slug: string } }) {
    const { data: device, error } = await supabase.from('device').select("*, build(*)").eq('code_name', params.slug).single()

    if (!device)
        notFound()
    else if (error)
        throw new Error("Failed to fetch device data")

    return (
        <main className="min-h-screen p-14">
            <div className="flex flex-col justify-center items-center gap-24 w-full lg:flex-row">
                <div className="flex flex-col gap-y-4 bg-neutral-950 p-8 rounded-xl">
                    <div>
                        <h1 className="font-medium text-2xl">
                            {device.name}
                        </h1>
                        <h2 className="text-neutral-700 text-lg">
                            {device.code_name}
                        </h2>
                    </div>

                    <p className="text-white/70">
                        Maintained by <span className="font-medium text-white">{device.maintainer}</span>
                    </p>
                </div>
                {device.build && device.build.length != 0 ?
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl pb-4 font-medium">
                            Available builds
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                            {
                                device.build.map((build, i) =>
                                    <BuildCard {...build} key={i} />
                                )
                            }
                        </div>
                    </div>
                    :
                    <p className="text-lg">
                        No builds available yet
                    </p>
                }
            </div>
        </main>
    )
}