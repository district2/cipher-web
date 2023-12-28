import Image from "next/image"
import Link from "next/link"

export default function MemberCard({ name, role, image, gitUsername }: { name: string, role: string, image: string, gitUsername: string }) {
    return (
        <Link href={`https://github.com/${gitUsername}`} target="_blank" className="">
            <div className="flex items-center bg-neutral-950 rounded-lg w-64 relative p-4 transition-shadow ease-linear ring-neutral-700 hover:ring group">
                <Image src={image} alt={`${name}'s github picture`} width={90} height={90}
                    className="rounded-full absolute -left-4 transition-shadow ease-linear ring-neutral-700 group-hover:ring" />
                <div className="text-center ml-auto">
                    <h1>
                        {name}
                    </h1>
                    <p className="text-sm text-white/50">
                        {role}
                    </p>
                </div>
            </div>
        </Link>
    )
}