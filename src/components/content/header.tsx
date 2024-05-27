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
					className={`${bayon.variable} font-display text-8xl tracking-widest text-foreground`}
				>
					{title}
				</h1>
			</div>
			<div className="">
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
};

export default Header;
