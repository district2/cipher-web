import Link from "next/link";

export default function NavItem({ name, link, active }: { name: string, link: string, active?: boolean }) {
    return (
        <Link className={`px-5 py-2 text-lg rounded-lg font-medium transition-colors duration-300 hover:bg-neutral-800/70 hover:text-white ${active ? "text-neutral-500 pointer-events-none" : "text-white/80"} lg:text-xl`}
            href={link}>
            {name}
        </Link>
    )
}