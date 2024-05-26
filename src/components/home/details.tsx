'use client';

import React, { useRef } from 'react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { MapPin, Smile, Wind } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

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
				<div className="px-12">
					<Carousel className="w-full">
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
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
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
		<div className="px-12 lg:px-0">
			<motion.div
				className="mb-6 ml-[58px]"
				variants={bentoGridVariants}
				initial="hidden"
				whileInView="visible"
			>
				<h2 className="text-4xl font-semibold">
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
		>
			<div className="relative min-w-[50px] flex justify-center items-center whitespace-nowrap">
				<Image src={iconPath} width={40} height={40} alt="Icon" />
			</div>
			<div className="shrink min-h-fit">
				<p className="">{text}</p>
			</div>
		</motion.div>
	);
};

export default Details;
