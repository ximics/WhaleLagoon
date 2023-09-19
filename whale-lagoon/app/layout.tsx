import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

export const metadata: Metadata = {
	title: "Whale Lagoon",
	description: "Página de Whale Lagoon",
	icons: {
		icon: "/images/logo.png",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen ",
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main >
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
