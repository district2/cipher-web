import telegram from "@/public/icons/telegram.svg"
import twitter from "@/public/icons/twitter.svg"
import github from "@/public/icons/github.svg"
import Link from "next/link";
import Image from "next/image";

const SOCIALS = [
	{
		icon: telegram,
		url: "https://t.me/CipherOS",
		alt: "Telegram icon"
	},
	{
		icon: twitter,
		url: "https://twitter.com/CipherROM",
		alt: "Twitter icon"
	},
	{
		icon: github,
		url: "https://github.com/CipherOS",
		alt: "Github icon"
	},
]

export default function Footer() {
	return (
		<footer className="relative mt-48 w-full bg-neutral-950/60">
			<div className="flex text-sm py-8 p-4 items-center justify-between flex-col gap-y-3 md:flex-row">
				<p className="text-neutral-500 text-center order-3 pt-6 md:order-none md:pt-0">
					Copyright © 2024 by CipherOS.
					<br />
					All Rights Reserved.
				</p>
				<p className="text-neutral-400">
					CipherOS <span className="text-white">❤</span> Open Source
				</p>
				<div className="flex gap-x-3">
					{SOCIALS.map((social) =>
						<Link href={social.url} key={social.alt} target="_blank">
							<Image src={social.icon} alt={social.alt} width={30} className="transition-opacity opacity-75 hover:opacity-100" />
						</Link>
					)}
				</div>
			</div>
		</footer>
	);
}
