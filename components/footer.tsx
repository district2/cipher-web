import Link from "next/link";
import FooterLink from "./footer-link";

export default function Footer() {
    return (
        <footer className="relative mt-48 w-full bg-neutral-950/60 md:h-64">
            <div className="flex flex-col gap-y-3 items-center p-4 pb-20 h-full md:justify-between md:flex-row md:px-16 md:pb-0">
                <h1 className="text-2xl font-medium">
                    CipherOS
                </h1>
                <div className="flex flex-col gap-7 md:flex-row">
                    <div className="flex-col gap-y-3">
                        <h1 className="text-lg">
                            Navigation
                        </h1>
                        <div className="flex flex-col gap-y-2">
                            <FooterLink name="Home" link="/" />
                            <FooterLink name="Devices" link="/devices" />
                            <FooterLink name="Blog" link="/blog" />
                        </div>
                    </div>
                    <div className="flex-col gap-y-3">
                        <h1 className="text-lg">
                            Contacts
                        </h1>
                        <div className="flex flex-col gap-y-2">
                            <FooterLink name="GitHub" link="https://github.com/cipheros" ext />
                            <FooterLink name="Telegram" link="https://t.me/cipheros" ext />
                            <FooterLink name="Twitter" link="https://twitter.com/cipherrom" ext />
                        </div>
                    </div>
                </div>
            </div>
            <p className="absolute bottom-4 w-full text-sm font-medium text-center">
                Made by <Link href="https://github.com/district2" target="_blank" className="font-mono underline underline-offset-4">
                    district2
                </Link>
            </p>
        </footer>
    )
}