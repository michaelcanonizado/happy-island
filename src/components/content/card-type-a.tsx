'use client';

import React from 'react';

import Image from 'next/image';
import { bayon } from '@/styles/fonts';

import { motion } from 'framer-motion';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const CardtypeA = ({
	className,
	imagePath,
	title,
	description,
	pill,
	effectDelay,
}: {
	className?: string;
	imagePath: string;
	title: string;
	description: string[];
	pill?: string | null;
	effectDelay: number;
}) => {
	const cardVariants = {
		hidden: {
			y: 100,
		},
		visible: {
			y: 0,
		},
	};

	return (
		<motion.div
			className="h-full"
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			transition={{
				type: 'spring',
				ease: 'linear',
				stiffness: 120,
				y: { delay: 0.05 + effectDelay },
			}}
		>
			<Card
				className={cn(
					'bg-background-100 rounded-xl overflow-hidden p-4 shadow border-b-[20px] border-x-0 border-t-0 border-yellow-primary h-full',
					className
				)}
			>
				<div className="relative">
					<div className="relative w-full aspect-square rounded-md overflow-hidden">
						<Image
							src={imagePath}
							alt={title}
							fill
							style={{
								objectFit: 'cover',
								objectPosition: 'center',
							}}
						/>
					</div>

					<div
						className={`absolute bottom-[-15px] right-[15px] z-10 bg-yellow-primary rounded-full py-1 px-3 ${
							!pill ? 'hidden' : ''
						}`}
					>
						<p
							className={`text-background-100 ${bayon.variable} text-background-100 font-display tracking-widest text-sm`}
						>
							{pill}
						</p>
					</div>
				</div>
				<CardHeader className="pt-4 pb-0 px-0">
					<CardTitle
						className={`${bayon.variable} text-foreground font-display tracking-wider text-xl`}
					>
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-0 px-0">
					<CardDescription>{description}</CardDescription>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default CardtypeA;
