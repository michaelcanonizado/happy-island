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
					'mx-auto pr-4 pl-6 py-2 flex justify-between items-center',
					screenBreakpoints
				)}
			>
				<Link href="/" className="flex items-center gap-1">
					<TreePalm className="mt-[-5px]" />
					<span className="
					text-xl md:text-2xl 
					font-semibold
					">Happy Island</span>
				</Link>

				<div className={`gap-4 ml-4 text-base hidden sm:flex`}>
					<Link
						href="/"
						className="
						transition-colors ease-linear rounded-md px-4
						
						hover:bg-background-200
						"
					>
						About
					</Link>
					<Link
						href="/"
						className="
						transition-colors ease-linear rounded-md px-4
						
						hover:bg-background-200
						"
					>
						Details
					</Link>
					<Link
						href="/"
						className="
						transition-colors ease-linear rounded-md px-4
						 
						hover:bg-background-200
						"
					>
						Where to Go
					</Link>
				</div>

				<div className="">
					<a
						href="https://github.com/michaelcanonizado/rph-website"
						target="_blank"
						className="
						transition-colors ease-linear rounded-md  border-2 border-foreground flex items-center gap-1 

						hover:bg-foreground hover:text-background
						
						px-2 md:px-4"
					>
						<span className="mt-[-3px]">
							<Github className="w-[18px] h-[18px]" />
						</span>
						<span className="text-base md:text-xl">Github</span>
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
