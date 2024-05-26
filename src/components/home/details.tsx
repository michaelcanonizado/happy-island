import React from 'react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { MapPin, Smile, Wind } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

const Details = () => {
	return (
		<div className={cn('mx-auto mt-[150px] w-full px-4', screenBreakpoints)}>
			<section className="grid lg:grid-cols-2 gap-10">
				<div className="px-12 lg:px-0">
					<div className="mb-6 ml-[58px]">
						<h2 className="text-4xl font-semibold">
							Experience a New Adventure
						</h2>
					</div>
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
				<div className="px-12">
					<Carousel className="w-full">
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem className="" key={index}>
									<div className="p-1">
										<Card className="rounded-xl overflow-hidden">
											<CardContent className="flex aspect-square items-center justify-center p-6 relative">
												<Image
													src="/home/details/catanduanes-1.jpg"
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

const DetailsText = ({ text, iconPath }: { text: string; iconPath: string }) => {
	return (
		<div className={`flex gap-2`}>
			<div className="relative min-w-[50px] flex justify-center items-center whitespace-nowrap">
				<Image src={iconPath} width={40} height={40} alt="Icon" />
			</div>
			<div className="shrink min-h-fit">
				<p className="">{text}</p>
			</div>
		</div>
	);
};

export default Details;
