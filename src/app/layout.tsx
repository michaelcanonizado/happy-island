import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/navigation/navbar';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

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
			<body className={poppins.className}>
				<Navbar />
				<main className="flex flex-col">{children}</main>
			</body>
		</html>
	);
}
