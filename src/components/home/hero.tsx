import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<section className="w-screen h-[90vh] relative">
			<div className="flex flex-col items-center text-center text-background w-[500px] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-20">
				<div className="">
					<p className="">Discover</p>
				</div>
				<div className="">
					<h1 className="text-5xl font-bold tracking-widest">
						CATANDUANES
					</h1>
				</div>
				<div className="">
					<p className="">
						Catanduanes, a charming island province in the Philippines,
						is located east of the Mainland Bicol area of the Luzon
						Archipelago. Catanduanes, known for its natural beauty and
						rich cultural legacy, provides an unforgettable experience
						for travelers seeking both action and relaxation.
					</p>
				</div>
			</div>
			<div className="w-full h-[100px] absolute bottom-0 z-20">
				<Image
					src="/home/wave.svg"
					fill
					alt="Wave"
					style={{
						objectFit: 'cover',
						objectPosition: 'left',
					}}
				></Image>
			</div>
			<div className="w-full h-full absolute inset-0">
				<Image
					src="/home/cover-image.jpg"
					fill
					alt="Catanduanes"
					style={{
						objectFit: 'cover',
						objectPosition: 'left',
					}}
				></Image>
			</div>
			<div className="bg-black bg-opacity-25 absolute inset-0 z-10" />
		</section>
	);
};

export default Hero;
