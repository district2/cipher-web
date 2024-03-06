import { Device } from "@/lib/api/api.types"
import { Dispatch, SetStateAction } from "react"

interface SearchProps {
    devices: Device[]
    setDevices: Dispatch<SetStateAction<Device[]>>
}

export default function Search({ devices, setDevices }: SearchProps) {
    return (
        <input
            className="bg-transparent p-3 border-2 rounded-lg border-neutral-800 w-52 md:w-72 transition-colors ease-linear text-neutral-300 focus:outline-none focus:border-neutral-400 "
            type="text"
            placeholder="Search device"
            aria-label="Search device"
            onChange={(event) => {
                const value = (event.target as HTMLInputElement).value.toLowerCase()
                setDevices(devices.filter((device) => device.codename.toLowerCase().includes(value)
                    || device.name.toLocaleLowerCase().includes(value)))
            }}
        />
    )
}