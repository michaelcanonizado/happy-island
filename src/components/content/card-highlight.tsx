import React from 'react';

import Image from 'next/image';
import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import { bayon } from '@/styles/fonts';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const CardHighlight = ({
	className,
	imagePath,
	title,
	description,
	pill,
}: {
	className?: string;
	imagePath: string;
	title: string;
	description: string;
	pill?: string;
}) => {
	return (
		<section
			className={cn(
				'col-span-1 sm:col-span-2 w-full mx-auto px-0 xl:px-4',
				screenBreakpoints + ' ' + className
			)}
		>
			<Card className="relative w-full min-h-[500px] rounded-none xl:rounded-xl overflow-hidden border-none">
				<Image
					src={imagePath}
					alt={title}
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
					}}
				/>
				<div className="absolute inset-0 bg-black bg-opacity-40"></div>
				<div className="absolute bottom-0 px-4 py-4">
					<CardHeader className="pb-0 px-0">
						<CardTitle
							className={`${bayon.variable} text-background-100 font-display tracking-widest text-4xl`}
						>
							{title}
						</CardTitle>
					</CardHeader>
					<CardContent className="p-0 mt-4 md:w-[70%]">
						<CardDescription className="text-background-100 text-lg">
							{description}
						</CardDescription>
					</CardContent>
					<div
						className={`w-fit bg-yellow-primary rounded-full py-1 px-3 my-4 ${
							!pill ? 'hidden' : 'flex'
						}`}
					>
						<p
							className={`text-background-100 ${bayon.variable} text-background-100 font-display tracking-widest text-base`}
						>
							{pill}
						</p>
					</div>
				</div>
			</Card>
		</section>
	);
};

export default CardHighlight;
