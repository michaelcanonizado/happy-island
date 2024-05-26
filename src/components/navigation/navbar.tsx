import React from 'react';

import { cn } from '@/lib/utils';
import Link from 'next/link';

import { TreePalm } from 'lucide-react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';

const Navbar = () => {
	return (
		<header
			className={cn(
				'sticky top-0 w-screen z-50 border-b-[1px] border-gray-200 bg-background'
			)}
		>
			<nav
				className={cn(
					'mx-auto px-4 py-2 flex justify-between items-center',
					screenBreakpoints
				)}
			>
				<div className="flex items-center">
					<TreePalm className="mt-[-5px]" />
					<span className="text-2xl font-semibold">Happy Island</span>
				</div>
				<div>
					<Link href="/">About</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
