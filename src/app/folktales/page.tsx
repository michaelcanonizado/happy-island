import React from 'react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';

import Header from '@/components/content/header';
import CardStory from '@/components/content/card-story';

const data = {
	title: "Juan the Blind Man",
	body: [
		"Many years ago, eight blind men lived in a village near a thick forest and were close friends. Despite their blindness, they were happy and often visited a nearby coconut grove at night to enjoy tuba and young coconuts. One evening, a severe typhoon struck the village, breaking most of the coconut trees. The next",
		"day, they went to the grove to gather coconuts, with seven of them climbing the damaged trees and Juan, th e youngest, staying below to collect the fallen coconuts. Juan sang as he waited, but soon heard a series of thuds, unaware that his friends were falling from the broken trees. When Juan discovered their bodies, he fled in terror and met Justo, a lame man. After hearing Juan's story, Justo advised him not to return to the village to avoid being accused of murder.",
		"They decided to travel together, combining Juan’s strong legs with Justo’s good eyes. Along their journey, they found a horn, a rusted axe, a piece of rope, and an old drum. They soon came across a large house and decided to seek shelter there. Upon entering, they noticed the house was filled with weapons and decided to hide in the ceiling. The house",
		"belonged to outlaws, who returned shortly after. Terrified by the outlaws’ bloody weapons, Justo panicked and shouted, alerting the outlaws to their presence. Juan, quick-thinking and fearless, pretended they were fierce creatures. He threw down the axe, claiming it was his tooth, and the rope as his hair. He then blew the horn and beat the drum to create more fear.",
		"The outlaws, convinced they were under attack by supernatural beings, fled in terror, some even jumping out of windows. With the outlaws gone, Juan and Justo came down to divide the money left behind. However, a quarrel broke out when Justo tried to cheat Juan. In the scuffle, Justo struck Juan’s eyes, miraculously restoring his sight, while Juan kicked Justo, curing his lameness. Realizing the miracle of their actions, they apologized and divided the money fairly. From that day on, Juan and Justo remained close friends, living together in peace and prosperity. Their story became a legend in the village, symbolizing the power of friendship and the unexpected ways in which people can help each other."
	],
	titleImage: "/images/folktales/juan-the-blind-man-title.png",
	bodyImage: "/images/folktales/juan-the-blind-man-body.png"
}

const Folktales = async () => {

	return (
		<article className="bg-background-200 pb-[500px]">
			<Header
				className="mb-14"
				title="Folktales"
				description="
				Cras imperdiet semper aliquam. Proin feugiat nulla non tempus faucibus. Morbi quis tincidunt libero. Nam sed finibus ligula. Pellentesque habitant morbi tristique s enectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nullam imperdiet nunc at risus sagittis pulvinar. Suspendisse potenti."
			/>
			<div className={cn("flex flex-col gap-14 w-full mx-auto lg:px-4", screenBreakpoints)}>
				<CardStory 
					title={data.title}
					body={data.body}
					titleImage={data.titleImage}
					bodyImage={data.bodyImage}
				/>
			</div>
		</article>
	);
};

export default Folktales;
