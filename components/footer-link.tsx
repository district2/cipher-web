import Link from "next/link";

export default function FooterLink({ name, link, ext }: { name: string, link: string, ext?: boolean }) {
    return (
        <Link href={link} target={ext ? "_blank" : ""} className="text-md underline underline-offset-2 text-white/80 max-w-max transition-colors hover:text-white">
            {name}
        </Link>
    )
}