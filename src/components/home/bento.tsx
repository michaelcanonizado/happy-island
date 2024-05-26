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
				'relative flex flex-col items-center mx-auto w-full px-6 py-[150px]',
				screenBreakpoints
			)}
		>
			<BentoHeader />
			<div className="w-full h-[500px] grid grid-cols-10 grid-rows-2 gap-4 text-background">
				<motion.div
					className="relative
					e bg-yellow-primary col-span-6 rounded-xl"
					variants={bentoGridVariants}
					initial="hidden"
					whileInView="visible"
					whileHover="hover"
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
					className="relative bg-red-primary col-span-4 rounded-xl"
					variants={bentoGridVariants}
					initial="hidden"
					whileInView="visible"
					whileHover="hover"
					transition={{
						type: 'spring',
						y: { delay: 0.15 },
					}}
				>
					<Link
						href="/folk-tales"
						className="absolute inset-0 flex flex-col justify-center items-center"
					>
						<div className="">
							<p className="">Folk Tales</p>
						</div>
					</Link>
				</motion.div>
				<motion.div
					className="relative bg-blue-primary col-span-4 rounded-xl"
					variants={bentoGridVariants}
					initial="hidden"
					whileInView="visible"
					whileHover="hover"
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
					className="relative bg-green-primary col-span-6 rounded-xl"
					variants={bentoGridVariants}
					initial="hidden"
					whileInView="visible"
					whileHover="hover"
					transition={{
						type: 'spring',
						y: { delay: 0.35 },
					}}
				>
					<Link
						href="/section"
						className="absolute inset-0 flex flex-col justify-center items-center"
					>
						<div className="">
							<p className="">Add Section</p>
						</div>
					</Link>
				</motion.div>
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
			{/* <div className=" absolute inset-0 ">
				<motion.div
					className="h-[300px] w-[200px] 

                absolute
                left-[50%]
                translate-y-[-50px]
                rotate-[60deg]"
					initial={{ scale: 0 }}
					whileInView={{ scale: 1, rotate: 60 }}
					transition={{
						ease: 'linear',
					}}
				>
					<Image
						src="/home/abaca-leaf-1.png"
						fill
						alt="Abaca leaves"
						style={{
							objectFit: 'contain',
							objectPosition: 'center',
						}}
					/>
				</motion.div>
				<motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
					<div
						className="h-[300px] w-[200px] 

                absolute
                scale-x-[-1]
                right-[50%]
                translate-y-[-50px]
                rotate-[300deg]"
					>
						<Image
							src="/home/abaca-leaf-1.png"
							fill
							alt="Abaca leaves"
							style={{
								objectFit: 'contain',
								objectPosition: 'center',
							}}
						/>
					</div>
				</motion.div>
				<motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
					<div
						className="h-[300px] w-[200px] 
                    
                    absolute
                    scale-x-[-1]
                    right-[49%]
                    translate-y-[-110px]
                    rotate-[320deg]"
					>
						<Image
							src="/home/abaca-leaf-1.png"
							fill
							alt="Abaca leaves"
							style={{
								objectFit: 'contain',
								objectPosition: 'center',
							}}
						/>
					</div>
				</motion.div>
				<motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
					<div
						className="h-[300px] w-[200px] 
                    
                    absolute
                    left-[49%]
                    translate-y-[-110px]
                    rotate-[40deg]"
					>
						<Image
							src="/home/abaca-leaf-1.png"
							fill
							alt="Abaca leaves"
							style={{
								objectFit: 'contain',
								objectPosition: 'center',
							}}
						/>
					</div>
				</motion.div>
			</div> */}

			<motion.div
				className="absolute inset-0 mb-4"
				initial={{ y: 100 }}
				whileInView={{ y: 0 }}
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
				className="absolute bottom-0 w-full pt-[50px] flex justify-center bg-gradient-to-t from-background  to-transparent"
				initial={{ y: 100 }}
				whileInView={{ y: 0 }}
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

export default Bento;
