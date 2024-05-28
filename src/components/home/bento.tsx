'use client';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import { bayon } from '@/styles/fonts';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

const bentoGridVariants = {
	hidden: {
		y: 50,
	},
	visible: {
		y: 0,
	},
	hover: {
		scale: 1.02,
	},
};

const Bento = () => {
	return (
		<section
			className={cn(
				'relative flex flex-col items-center px-6 py-[100px] mt-[200px] bg-background-200 border-2'
			)}
		>
			<div className="w-full h-[100px] absolute top-[-100px] z-10">
				<Image
					src="/home/wave-2.svg"
					fill
					alt="Wave"
					style={{
						objectFit: 'cover',
						objectPosition: 'left',
					}}
				></Image>
			</div>
			<BentoHeader />
			<div className={cn('w-full mx-auto', screenBreakpoints)}>
				<BentoGrid />
			</div>
		</section>
	);
};

const BentoHeader = () => {
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start 75%', 'start 20%'],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

	return (
		<div
			ref={targetRef}
			className="flex flex-col items-center relative w-full h-[220px] mb-12"
		>
			<motion.div
				className="absolute inset-0 mb-4"
				initial={{ y: 100 }}
				whileInView={{ y: 0 }}
				viewport={{ once: true }}
			>
				<Image
					src="/home/catanduanes-official-seal.png"
					fill
					alt="Catanduanes Official Seal"
					style={{
						objectFit: 'contain',
						objectPosition: 'center',
					}}
				/>
			</motion.div>
			<motion.div
				className="absolute bottom-0 w-full pt-[50px] flex justify-center bg-gradient-to-t from-background-200  to-transparent"
				initial={{ y: 100 }}
				whileInView={{ y: 0 }}
				viewport={{ once: true }}
			>
				<h2
					className={`text-5xl font-semibold ${bayon.variable} font-display tracking-wider`}
				>
					Discover
				</h2>
			</motion.div>
		</div>
	);
};

const BentoGrid = () => {
	return (
		<div className="w-full h-[500px] grid grid-cols-10 grid-rows-auto gap-4 text-background">
			<motion.div
				className="relative bg-yellow-primary rounded-xl col-span-10 sm:col-span-6"
				variants={bentoGridVariants}
				initial="hidden"
				whileInView="visible"
				whileHover="hover"
				viewport={{ once: true }}
				transition={{
					type: 'spring',
					ease: 'linear',
					stiffness: 75,
					y: { delay: 0.05 },
				}}
			>
				<Link
					href="/festivals"
					className="absolute inset-0 flex flex-col justify-center items-center"
				>
					<div className="">
						<p className="">Festivals</p>
					</div>
				</Link>
			</motion.div>
			<motion.div
				className="relative bg-red-primary rounded-xl col-span-10 sm:col-span-4"
				variants={bentoGridVariants}
				initial="hidden"
				whileInView="visible"
				whileHover="hover"
				viewport={{ once: true }}
				transition={{
					type: 'spring',
					y: { delay: 0.15 },
				}}
			>
				<Link
					href="/folktales"
					className="absolute inset-0 flex flex-col justify-center items-center"
				>
					<div className="">
						<p className="">Folktales</p>
					</div>
				</Link>
			</motion.div>
			<motion.div
				className="relative bg-blue-primary rounded-xl col-span-10 sm:col-span-4"
				variants={bentoGridVariants}
				initial="hidden"
				whileInView="visible"
				whileHover="hover"
				viewport={{ once: true }}
				transition={{
					type: 'spring',
					y: { delay: 0.25 },
				}}
			>
				<Link
					href="/tourist-destinations"
					className="absolute inset-0 flex flex-col justify-center items-center"
				>
					<div className="">
						<p className="">Tourist Destinations</p>
					</div>
				</Link>
			</motion.div>
			<motion.div
				className="relative bg-green-primary rounded-xl col-span-10 sm:col-span-6"
				variants={bentoGridVariants}
				initial="hidden"
				whileInView="visible"
				whileHover="hover"
				viewport={{ once: true }}
				transition={{
					type: 'spring',
					y: { delay: 0.35 },
				}}
			>
				<Link
					href="/delicacies"
					className="absolute inset-0 flex flex-col justify-center items-center"
				>
					<div className="">
						<p className="">Delicacies</p>
					</div>
				</Link>
			</motion.div>
		</div>
	);
};

export default Bento;
