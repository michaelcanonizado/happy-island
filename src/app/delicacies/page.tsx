import React from 'react';

import Header from '@/components/content/header';
import CardTypeB from '@/components/content/card-type-b';
import { cn } from '@/lib/utils';
import { screenBreakpoints } from '@/helpers/screen-breakpoints';

const Delicacies = () => {
	return (
		<article className="bg-background-200 pb-[500px]">
			<Header
				className="mb-14"
				title="Delicacies"
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
			<div
				className={cn(
					'px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto',
					screenBreakpoints
				)}
			>
				<CardTypeB />
				<CardTypeB />
				<CardTypeB />
				<CardTypeB />
				<CardTypeB />
				<CardTypeB />
				<CardTypeB />
				<CardTypeB />
			</div>
		</article>
	);
};

export default Delicacies;
