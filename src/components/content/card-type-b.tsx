"use client"

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

const CardTypeB = ({
	className,
	imagePath,
	title,
	description,
	color,
}: {
	className?: string;
	imagePath: string;
	title: string;
	description: string[];
	color: string;
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
				y: { delay: 0.05 },
			}}>
			<Card
				className={cn(
				'bg-transparent border-none flex flex-col h-full',
				className
				)}
			>
				<div className="bg-transparent h-[200px] relative">
					<div className="absolute z-10 bottom-[-50%] aspect-square rounded-md overflow-hidden translate-x-[20%] xs:translate-x-[50%] w-[75%] xs:w-[50%]">
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
				</div>
				<div
					className="py-4 px-12 pt-24 bg-background-100 rounded-xl overflow-hidden shadow border-b-[20px] border-x-0 border-t-0 grow"
					style={{
						borderColor: color,
					}}
				>
					<CardHeader className="pt-8 pb-2 px-0">
						<CardTitle
							className={`${bayon.variable} text-foreground font-display tracking-widest text-2xl sm:text-3xl md:text-4xl`}
						>
							{title}
						</CardTitle>
					</CardHeader>
					<CardContent className="pt-0 px-0 ">
						<CardDescription className="text-base md:text-lg">
							{description}
						</CardDescription>
					</CardContent>
				</div>
			</Card>
		</motion.div>
	);
};

export default CardTypeB;
