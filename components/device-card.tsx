import Link from "next/link"

export default function DeviceCard({ name, code_name, maintainer, date }:
    { name: string, code_name: string, maintainer: string, date?: string | undefined }) {
    return (
        <Link className="w-60 h-52 relative bg-neutral-950 p-3 rounded-2xl transition-shadow ease-linear ring-neutral-700 hover:ring" href={`/devices/${code_name}`}>
            <div className="absolute bottom-0 left-0" style={{ padding: "inherit" }}>
                <p className="">
                    {name}
                </p>
                <p className="text-neutral-700">
                    {code_name}
                </p>
            </div>
            <div>
                <p className="text-neutral-500">
                    Maintainer: <span className="font-medium">{maintainer}</span>
                </p>

                <p className="text-neutral-500 break-words">
                    {date ? <>Latest build: <span className="font-medium">{date}</span></> : "No builds yet"}
                </p>
            </div>
        </Link>
    )
}