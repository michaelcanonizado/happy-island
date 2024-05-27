import React from 'react';

import { cn } from '@/lib/utils';
import Link from 'next/link';

import { TreePalm, Github } from 'lucide-react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { bayon } from '@/styles/fonts';

const Navbar = () => {
	return (
		<header
			className={cn(
				`sticky top-0 w-screen z-50 border-b-[1px] border-gray-200 bg-background-100 ${bayon.variable} font-display tracking-widest`
			)}
		>
			<nav
				className={cn(
					'mx-auto px-4 py-2 flex justify-between items-center',
					screenBreakpoints
				)}
			>
				<Link href="/" className="flex items-center">
					<TreePalm className="mt-[-5px]" />
					<span className="text-2xl font-semibold">Happy Island</span>
				</Link>

				<div className="flex gap-4 ml-4 text-base">
					<Link
						href="/"
						className="hover:bg-background-200 transition-colors ease-linear rounded-md px-4"
					>
						About
					</Link>
					<Link
						href="/"
						className="hover:bg-background-200 transition-colors ease-linear rounded-md px-4"
					>
						Details
					</Link>
					<Link
						href="/"
						className="hover:bg-background-200 transition-colors ease-linear rounded-md px-4"
					>
						Where to Go
					</Link>
				</div>

				<div className="">
					<a
						href="https://github.com/michaelcanonizado/rph-website"
						target="_blank"
						className="hover:bg-foreground hover:text-background transition-colors ease-linear rounded-md px-4 border-2 border-foreground flex items-center gap-1"
						// className="hover:bg-background-200 hover:border-background-200 transition-colors ease-linear rounded-md px-4 border-2 border-foreground"
					>
						<span className="mt-[-3px]">
							<Github className="w-[18px] h-[18px]" />
						</span>
						<span className="">Github</span>
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
