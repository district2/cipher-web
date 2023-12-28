import Image from "next/image";
import versionImage from "@/public/icons/version.svg"
import calendar from "@/public/icons/calendar.svg"
import variantImage from "@/public/icons/variant.svg"
import androidImage from "@/public/icons/android.svg"
import Button from "./button";

export default function BuildCard({ created_at, android_version, variant, version, download_link }:
    { created_at: string, android_version?: string, variant: "Vanilla" | "Gapps", version: string, download_link: string }) {

    const info =
        new Array(
            { image: calendar, name: "Date", value: created_at },
            { image: versionImage, name: "Version", value: version },
            { image: androidImage, name: "Android", value: android_version! },
            { image: variantImage, name: "Variant", value: variant },
        )

    return (
        <div className="flex flex-col gap-y-2 font-medium bg-neutral-950 p-6 rounded-lg">
            {
                info.map(({ image, name, value }, i) =>
                    <div className="flex gap-x-3" key={i}>
                        <Image src={image} alt={`${name} icon`} />
                        <p className="text-white/70">{name}: <span className="text-white">{value}</span></p>
                    </div>
                )
            }
            <Button text="Download" link={download_link} ext />
        </div>
    )
}