import type { Metadata } from 'next';
import { portLligatSans } from '@/styles/fonts';
import '@/styles/globals.css';

import Navbar from '@/components/navigation/navbar';

export const metadata: Metadata = {
	title: 'RPH Website',
	description: 'A final project for Readings in Philippine History',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-background text-foreground">
			<body className={`${portLligatSans.variable} font-body text-xl`}>
				<Navbar />
				<main className="flex flex-col">{children}</main>
			</body>
		</html>
	);
}
