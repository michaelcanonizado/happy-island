import React from 'react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import { bayon } from '@/styles/fonts';

const Header = ({
	className,
	title,
	description,
}: {
	className?: string;
	title: string;
	description: string;
}) => {
	return (
		<div
			className={cn(
				`mx-auto w-full px-4 text-center flex flex-col justify-center mt-20`,
				screenBreakpoints + ' ' + className
			)}
		>
			<div className="">
				<h1
					className={`${bayon.variable} font-display tracking-widest text-foreground text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
				>
					{title}
				</h1>
			</div>
			<div className="">
				<p className="text-sm sm:text-base md:text-lg">{description}</p>
			</div>
		</div>
	);
};

export default Header;
