import React from 'react';

import Header from '@/components/content/header';
import CardTypeB from '@/components/content/card-type-b';
import { cn } from '@/lib/utils';
import { screenBreakpoints } from '@/helpers/screen-breakpoints';

import { getDelicaciesData } from '@/lib/get-delicacies-data';

const Delicacies = async () => {
	const data = await getDelicaciesData();

	let currentIndex = 0;

	const renderFirstHalfSequence = () => {
		const sequence = [];
		for (let i = currentIndex; i < data.data.regulars.length / 2; i++) {
			sequence.push(
				<CardTypeB
					imagePath="/images/delicacies/dawa.png"
					title={data.data.regulars[currentIndex].title}
					description={data.data.regulars[currentIndex].details}
				/>
			);
			currentIndex++;
		}
		return sequence;
	};
	const renderSecondHalfSequence = () => {
		const sequence = [];
		for (let i = currentIndex; i < data.data.regulars.length; i++) {
			sequence.push(
				<CardTypeB
					imagePath="/images/delicacies/dawa.png"
					title={data.data.regulars[currentIndex].title}
					description={data.data.regulars[currentIndex].details}
				/>
			);
			currentIndex++;
		}
		return sequence;
	};

	return (
		<article className="bg-background-200 pb-[500px]">
			<Header
				className="mb-14"
				title={data.title}
				description={data.description}
			/>
			<div
				className={cn(
					'px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mx-auto',
					screenBreakpoints
				)}
			>
				<div className="grid grid-cols-1 mt-[30%] gap-6">
					{renderFirstHalfSequence()}
				</div>
				<div className="grid grid-cols-1 gap-6">
					{renderSecondHalfSequence()}
				</div>
			</div>
		</article>
	);
};

export default Delicacies;
