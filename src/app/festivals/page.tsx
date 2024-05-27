import React from 'react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import { bayon } from '@/styles/fonts';

import CardtypeA from '@/components/content/card-type-a';
import CardHighlight from '@/components/content/card-highlight';

const Festivals = () => {
	return (
		<article className="bg-background-200 pb-[500px]">
			<FestivalsHeader className="mb-14" />
			<div className="flex flex-col gap-14">
				<CardHighlight />
				<div
					className={cn(
						'w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6',
						screenBreakpoints
					)}
				>
					<CardtypeA />
					<CardtypeA />
					<CardtypeA />
					<CardtypeA />
				</div>
				<CardHighlight />
				<div
					className={cn(
						'w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6',
						screenBreakpoints
					)}
				>
					<CardtypeA />
					<CardtypeA />
					<CardtypeA />
					<CardtypeA />
				</div>
			</div>
		</article>
	);
};

const FestivalsHeader = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				`mx-auto w-full px-4 text-center flex flex-col justify-center mt-20`,
				screenBreakpoints + ' ' + className
			)}
		>
			<div className="">
				<h1
					className={`${bayon.variable} font-display text-8xl tracking-widest text-yellow-primary`}
				>
					Festivals
				</h1>
			</div>
			<div className="">
				<p className="text-lg">
					Each town in Catanduanes holds an annual &quot;fiesta.&quot; Key
					events during this celebration include a town parade, vesper
					night, an official ball, a concelebrated mass to honor the
					town&apos;s patron saint, and an agricultural fair. The parade,
					typically featuring municipal employees and officials, local
					government units, barangay officials, and various schools with
					their drum and bugle corps, takes place in the town center. Other
					popular activities include &quot;perya&quot; (a game of chance
					involving coins and prizes) and &quot;sitsiriya&quot; (temporary
					stores set up only during the fiesta).
				</p>
			</div>
		</div>
	);
};

export default Festivals;
