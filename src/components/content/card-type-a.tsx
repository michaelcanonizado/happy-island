import React from 'react';

import Image from 'next/image';
import { bayon } from '@/styles/fonts';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const CardtypeA = () => {
	return (
		<Card className="bg-background-100 rounded-xl overflow-hidden p-4 shadow border-b-[20px] border-x-0 border-t-0 border-yellow-primary">
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

export default CardtypeA;
