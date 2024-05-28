import React from 'react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';

import CardtypeA from '@/components/content/card-type-a';
import CardHighlight from '@/components/content/card-highlight';
import Header from '@/components/content/header';

import { getData } from '@/lib/get-data';
import { DataTypes } from '@/types';

const Festivals = async () => {
	const data = await getData(DataTypes.festivals);

	console.log(data);

	return (
		<article className="bg-background-200 pb-[500px]">
			<Header
				className="mb-14"
				title="Festivals"
				description='Each town in Catanduanes holds an annual "fiesta." Key
					events during this celebration include a town parade, vesper
					night, an official ball, a concelebrated mass to honor the
					town&apos;s patron saint, and an agricultural fair. The parade,
					typically featuring municipal employees and officials, local
					government units, barangay officials, and various schools with
					their drum and bugle corps, takes place in the town center. Other
					popular activities include "perya" (a game of chance
					involving coins and prizes) and "sitsiriya" (temporary
					stores set up only during the fiesta).'
			/>
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

export default Festivals;
