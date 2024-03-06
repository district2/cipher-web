"use client"

import { Device } from "@/lib/api/api.types";
import { useState } from "react";
import DeviceCard from "./device-card";
import Search from "./search";

interface ViewProps {
    devices: Device[]
}

export default function DevicesView({ devices }: ViewProps) {
    const [filteredDevices, setDevices] = useState(devices)

    return (
        <div className="flex flex-col gap-y-8 items-center w-full">
            <Search devices={devices} setDevices={setDevices} />
            <div className="flex flex-wrap gap-6 justify-center">
                {filteredDevices.map((device) => {
                    return (
                        <DeviceCard
                            name={device.name}
                            code_name={device.codename}
                            maintainer={device.maintainer.nickname}
                            date={device.builds[device.builds.length - 1].date}
                            key={device.codename}
                        />
                    )
                })}
            </div>
        </div>
    )

}