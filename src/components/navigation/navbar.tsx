import React from 'react';

import { cn } from '@/lib/utils';
import Link from 'next/link';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';

const Navbar = () => {
	return (
		<header
			className={cn(
				'sticky top-0 w-screen z-50 border-b-[1px] border-gray-200'
			)}
		>
			<nav
				className={cn(
					'mx-auto px-4 py-2 flex justify-between items-center',
					screenBreakpoints
				)}
			>
				<div>
					<span className="text-2xl">Navbar</span>
				</div>
				<div>
					<Link href="/">About</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
