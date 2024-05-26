'use client';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const bentoGridVariants = {
	hidden: {
		y: 50,
	},
	visible: {
		y: 0,
	},
};

const Bento = () => {
	return (
		<section
			className={cn(
				'relative flex flex-col items-center mx-auto w-full px-6 pt-[150px]',
				screenBreakpoints
			)}
		>
			<BentoHeader />
			<div className="w-full h-[500px] grid grid-cols-10 grid-rows-2 gap-4">
				<motion.div
					className="bg-yellow-500 col-span-6 rounded-xl"
					variants={bentoGridVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ type: 'spring', stiffness: 75, delay: 0.05 }}
				>
					a
				</motion.div>
				<motion.div
					className="bg-red-500 col-span-4 rounded-xl"
					variants={bentoGridVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ type: 'spring', stiffness: 75, delay: 0.15 }}
				>
					b
				</motion.div>
				<motion.div
					className="bg-blue-500 col-span-4 rounded-xl"
					variants={bentoGridVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ type: 'spring', stiffness: 75, delay: 0.25 }}
				>
					c
				</motion.div>
				<motion.div
					className="bg-green-500 col-span-6 rounded-xl"
					variants={bentoGridVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ type: 'spring', stiffness: 75, delay: 0.35 }}
				>
					d
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
				<h2 className="text-4xl font-semibold">Discover</h2>
			</motion.div>
		</div>
	);
};

export default Bento;
