import Image from "next/image";
import versionImage from "@/public/icons/version.svg"
import calendar from "@/public/icons/calendar.svg"
import variantImage from "@/public/icons/variant.svg"
import androidImage from "@/public/icons/android.svg"
import Button from "./button";

export default function BuildCard({ created_at, android_version, variant, version, download_link }:
    { created_at: string, android_version?: string, variant: "Vanilla" | "Gapps", version: string, download_link: string }) {
    return (
        <div className="flex flex-col gap-y-2 font-medium bg-neutral-950 p-6 rounded-lg">
            <div className="flex gap-x-3">
                <Image src={calendar} alt="calendar icon" className="dark:invert" />
                <p className="text-white/70">Date: <span className="text-white">{created_at}</span></p>
            </div>
            <div className="flex gap-x-3">
                <Image src={versionImage} alt="version icon" className="dark:invert" />
                <p className="text-white/70">Version: <span className="text-white">{version}</span></p>
            </div>
            <div className="flex gap-x-3">
                <Image src={androidImage} alt="android icon" className="dark:invert" />
                <p className="text-white/70">Android: <span className="text-white">{android_version}</span></p>
            </div>
            <div className="flex gap-x-3">
                <Image src={variantImage} alt="variant icon" className="dark:invert" />
                <p className="text-white/70">Variant: <span className="text-white">{variant}</span></p>
            </div>
            <Button text="Download" link={download_link} ext />
        </div>
    )
}