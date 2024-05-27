import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import { bayon } from '@/styles/fonts';
import Image from 'next/image';
import React from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const Festivals = () => {
	return (
		<article className="bg-background-200 pb-[500px]">
			<FestivalsHeader className="mb-14" />
			<div className="flex flex-col gap-14">
				<FestivalCardHighlight />
				<div
					className={cn(
						'w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6',
						screenBreakpoints
					)}
				>
					<FestivalCardRegular />
					<FestivalCardRegular />
					<FestivalCardRegular />
					<FestivalCardRegular />
				</div>
				<FestivalCardHighlight />
				<div
					className={cn(
						'w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6',
						screenBreakpoints
					)}
				>
					<FestivalCardRegular />
					<FestivalCardRegular />
					<FestivalCardRegular />
					<FestivalCardRegular />
				</div>
			</div>
		</article>
	);
};

const FestivalCardHighlight = ({ className }: { className?: string }) => {
	return (
		<section
			className={cn(
				'col-span-1 sm:col-span-2 w-full mx-auto px-0 xl:px-4',
				screenBreakpoints + ' ' + className
			)}
		>
			<Card className="relative w-full min-h-[500px] rounded-none xl:rounded-xl overflow-hidden border-none">
				<Image
					src="/images/test.jpg"
					alt="Test Image"
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
							Abaca Festival
						</CardTitle>
					</CardHeader>
					<CardContent className="p-0 mt-4 md:w-[70%]">
						<CardDescription className="text-background-100 text-lg">
							Bato, one of Catanduanes&apos; eleven municipalities, is
							graced with natural beauty and agricultural prosperity.
							However, over time, it faced challenges from natural
							disasters. Despite devastation and hardship, the
							townspeople held onto hope. Through devotion to its
							patron saint, St. John the Baptist, Bato received renewed
							abundance and blessings. Abaca emerged as a key industry,
							while cacao added sweetness to meals. Its agricultural
							wealth, nourished by St. John&apos;s rains, yields
							bountiful harvests.
						</CardDescription>
					</CardContent>
					<div className="w-fit bg-yellow-primary rounded-full py-1 px-3 my-4">
						<p
							className={`text-background-100 ${bayon.variable} text-background-100 font-display tracking-widest text-base`}
						>
							JUNE 23-24
						</p>
					</div>
				</div>
			</Card>
		</section>
	);
};

const FestivalCardRegular = () => {
	return (
		<Card className="bg-background-100 border-none  rounded-xl overflow-hidden p-4 shadow">
			<div className="relative">
				<div className="relative w-full aspect-square rounded-md overflow-hidden">
					<Image
						src="/images/test.jpg"
						alt="Test Image"
						fill
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				</div>

				<div className="absolute bottom-[-15px] right-[15px] z-10 bg-yellow-primary rounded-full py-1 px-3">
					<p
						className={`text-background-100 ${bayon.variable} text-background-100 font-display tracking-widest text-sm`}
					>
						JUNE 23-24
					</p>
				</div>
			</div>
			<CardHeader className="pt-4 pb-0 px-0">
				<CardTitle
					className={`${bayon.variable} text-foreground font-display tracking-wider text-xl`}
				>
					Abaca Festival
				</CardTitle>
			</CardHeader>
			<CardContent className="pt-0 px-0">
				<CardDescription>
					Bato, one of Catanduanes&apos; eleven municipalities, is graced
					with natural beauty and agricultural prosperity. However, over
					time, it faced challenges from natural disasters. Despite
					devastation and hardship, the townspeople held onto hope. Through
					devotion to its patron saint, St. John the Baptist, Bato received
					renewed abundance and blessings. Abaca emerged as a key industry,
					while cacao added sweetness to meals. Its agricultural wealth,
					nourished by St. John&apos;s rains, yields bountiful harvests.
				</CardDescription>
			</CardContent>
		</Card>
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
