import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
// import { Inter } from 'next/font/google'
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })

export const revalidate = 300;

export const metadata: Metadata = {
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
		<html lang="en">
			<body className={GeistSans.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
