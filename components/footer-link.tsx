import Link from "next/link";

export default function FooterLink({ name, link, ext }: { name: string, link: string, ext?: boolean }) {
    return (
        <Link href={link} target={ext ? "_blank" : ""} className="max-w-max underline transition-colors text-md underline-offset-2 text-white/80 hover:text-white">
            {name}
        </Link>
    )
}