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

const CardTypeB = () => {
	return (
		<Card className="bg-transparent border-none">
			<div className="bg-transparent h-[200px] relative">
				<div className="absolute z-10 bottom-[-50%] translate-x-[50%] w-[50%] aspect-square rounded-md overflow-hidden">
					<Image
						src="/images/delicacies/dawa.png"
						alt="Test Image"
						fill
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				</div>
			</div>
			<div className="py-4 px-12 pt-24 bg-background-100 rounded-xl overflow-hidden shadow border-b-[20px] border-x-0 border-t-0 border-yellow-primary">
				<CardHeader className="pt-4 pb-2 px-0">
					<CardTitle
						className={`${bayon.variable} text-foreground font-display tracking-widest text-2xl`}
					>
						DAWA
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-0 px-0 ">
					<CardDescription className="text-lg">
						Dawa is a seasonal delicacy and the number one product of the
						town of Bote. It&apos;’s sandy-textured kakanin made from
						millets, a type of grain that grows abundantly from March to
						April. Dawa cake and cookies are among its variations
					</CardDescription>
				</CardContent>
			</div>
		</Card>
	);
};

export default CardTypeB;
