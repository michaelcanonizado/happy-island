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
	color
}: {
	className?: string;
	imagePath: string;
	title: string;
	description: string[];
	pill?: string | null;
	effectDelay: number;
	color: string,
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
			viewport={{ once: true }}
			transition={{
				type: 'spring',
				ease: 'linear',
				stiffness: 120,
				y: { delay: 0.05 + effectDelay },
			}}
		>
			<Card
				className={cn(
					'bg-background-100 rounded-xl overflow-hidden p-4 shadow border-b-[20px] border-x-0 border-t-0 h-full',
					className
				)}
				style={{
					borderColor: color
				}}
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
						className={`absolute bottom-[-15px] right-[15px] z-10 rounded-full py-1 px-3 ${
							!pill ? 'hidden' : ''
						}`}
						style={{
							backgroundColor: color
						}}
					>
						<p
							className={`text-background-100 ${bayon.variable} text-background-100 font-display tracking-widest text-sm`}
						>
							{pill}
						</p>
					</div>
				</div>
				<CardHeader className="pt-8 pb-0 px-0">
					<CardTitle
						className={`${bayon.variable} text-foreground font-display tracking-wider text-xl xs:text-2xl`}
					>
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-2 px-0">
					<CardDescription className='text-base md:text-lg'>{description}</CardDescription>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default CardtypeA;
