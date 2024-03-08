import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/google-analytics";

export const revalidate = 300;

export const metadata: Metadata = {
	metadataBase: new URL('https://cipheros.online'),
	title: {
		template: "%s | CipherOS",
		default: "CipherOS",
	},
	description: "The official CipherOS Website",
	openGraph: {
		type: "website",
		title: "CipherOS",
		siteName: "CipherOS",
		url: "https://cipheros.online",
		description: "The official CipherOS Website",
	}

};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" >
			<body className={GeistSans.className}>
				{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
					<GoogleAnalytics ga_id=
						{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
				) : null}
				<Navbar />
				{children}
				<Footer />
			</body>
		</html >
	);
}
