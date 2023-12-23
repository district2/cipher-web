import { Metadata } from "next";
import DeviceCard from "@/components/device-card";
import { supabase } from "@/lib/supabase/supabase";

export const metadata: Metadata = {
    title: "Devices"
}

export default async function Pages() {
    const { data: devices, error } = await supabase.from('device').select('*, build(*)')

    if (!devices || error)
        throw new Error("Unable to fetch devices")

    return (
        <main className="min-h-screen flex flex-col p-12 gap-y-24">
            <h1 className="text-center text-3xl font-medium bg-gradient-to-b from-neutral-600 to-gray-500 bg-clip-text text-transparent">
                Bring a new life to your device
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
                {
                    devices.map((device, i) =>
                        <DeviceCard name={device.name} code_name={device.code_name}
                            maintainer={device.maintainer} key={i}
                            date={device.build.at(-1)?.created_at}
                        />)
                }
            </div>
        </main>
    )
}