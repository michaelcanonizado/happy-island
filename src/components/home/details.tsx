'use client';

import React from 'react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { bayon } from '@/styles/fonts';

const imagePaths = [
	'/home/details/catanduanes-1.jpg',
	'/home/details/catanduanes-2.jpg',
	'/home/details/catanduanes-3.jpg',
];

const Details = () => {
	return (
		<div className={cn('mx-auto mt-[150px] w-full px-4', screenBreakpoints)}>
			<section className="grid lg:grid-cols-2 gap-10">
				<DetailsTextGroup />
				<div className="px-8 sm:px-12 flex justify-center">
					<DetailsImageCarousel/>
				</div>
			</section>
		</div>
	);
};

const bentoGridVariants = {
	hidden: {
		y: 50,
	},
	visible: {
		y: 0,
	},
};

const DetailsTextGroup = () => {
	return (
		<div className="pl-0 pr-4 md:px-12 lg:px-0">
			<motion.div
				className="mb-6 ml-[58px]"
				variants={bentoGridVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<h2
					className={`text-4xl sm:text-4xl md:text-5xl font-semibold ${bayon.variable} font-display tracking-wider`}
				>
					Experience a New Adventure
				</h2>
			</motion.div>
			<div className="flex flex-col gap-4">
				<DetailsText
					text="Island province located in the Bicol Region of Luzon in the Philippines."
					iconPath="/home/details/smile.png"
				></DetailsText>
				<DetailsText
					text="Known as the “Happy Island,” it boasts stunning landscapes, pristine beaches, and a rich culture."
					iconPath="/home/details/map-pin.png"
				></DetailsText>
				<DetailsText
					text="Also known as the Land of the Howling Winds, owing to the island's annual typhoons"
					iconPath="/home/details/wind.png"
				></DetailsText>
			</div>
		</div>
	);
};

const DetailsText = ({ text, iconPath }: { text: string; iconPath: string }) => {
	return (
		<motion.div
			className={`flex gap-2`}
			variants={bentoGridVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<div className="relative flex justify-center items-center whitespace-nowrap min-w-[35px] xs:min-w-[40px] sm:min-w-[50px]">
				<Image src={iconPath} width={40} height={40} alt="Icon" />
			</div>
			<div className="shrink min-h-fit">
				<p className="">{text}</p>
			</div>
		</motion.div>
	);
};

const DetailsImageCarousel = ()=> {
	return (
	<Carousel className="w-[80%]">
		<CarouselContent>
			{imagePaths.map((path, index) => (
				<CarouselItem className="" key={index}>
					<div className="p-1">
						<Card className="rounded-xl overflow-hidden">
							<CardContent className="flex aspect-square items-center justify-center p-6 relative">
								<Image
									src={path}
									fill
									alt="Catanduanes"
									style={{
										objectFit: 'cover',
										objectPosition: 'center',
									}}
								/>
							</CardContent>
						</Card>
					</div>
				</CarouselItem>
				))
			}
				</CarouselContent>
			<CarouselPrevious />
		<CarouselNext />
	</Carousel>
	)
}

export default Details;
