import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-48 h-56 bg-neutral-950/60 w-full relative">
            <div className="flex flex-col gap-y-3 p-4 items-center h-full md:justify-between md:flex-row md:px-16">
                <h1 className="font-medium text-2xl">
                    CipherOS
                </h1>
                <div className="flex gap-x-7">
                    <div className="flex-col gap-y-3">
                        <h1 className="text-lg">
                            Navigation
                        </h1>
                        <div className="flex flex-col gap-y-2">
                            <Link href={"/"} className="text-sm underline underline-offset-2 text-white/80 max-w-max transition-colors hover:text-white">
                                Home
                            </Link>
                            <Link href={"/devices"} className="text-sm underline underline-offset-2 text-white/80 max-w-max transition-colors hover:text-white">
                                Devices
                            </Link>
                            <Link href={"/blog"} className="text-sm underline underline-offset-2 text-white/80 max-w-max transition-colors hover:text-white">
                                Blog
                            </Link>
                        </div>
                    </div>
                    <div className="flex-col gap-y-3">
                        <h1 className="text-lg">
                            Contacts
                        </h1>
                        <div className="flex flex-col gap-y-2">
                            <Link href={"https://t.me/cipheros"} target="_blank" className="text-sm underline underline-offset-2 text-white/80 max-w-max transition-colors hover:text-white">
                                Telegram
                            </Link>
                            <Link href={"https://github.com/cipheros"} target="_blank" className="text-sm underline underline-offset-2 text-white/80 max-w-max transition-colors hover:text-white">
                                GitHub
                            </Link>
                            <Link href={"https://twitter.com/cipherrom"} target="_blank" className="text-sm underline underline-offset-2 text-white/80 max-w-max transition-colors hover:text-white">
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="absolute bottom-4 w-full text-center font-medium text-sm">
                Made by <Link href="https://github.com/district2" target="_blank" className="font-mono underline underline-offset-4">
                    district2
                </Link>
            </p>
        </footer>
    )
}