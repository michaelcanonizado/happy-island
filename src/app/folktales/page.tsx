import React from 'react';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import Image from 'next/image'

import Header from '@/components/content/header';
import CardStory from '@/components/content/card-story';

const data = [
	{
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
	},
	{
		title: "The Monkeys and the Dragon-Flies",
		body: [
			"One day, when the sun was at the zenith and the air was very hot, a poor dragon-fly, fatigued with her long journey, alighted to rest on a branch of a tree in which a great many monkeys lived. While she was fanning herself with her wings, a monkey approached her, and said, “Aha! What are you doing here, wretched creature?",
			"“O sir! I wish you would permit me to rest on this branch while the sun is so hot,” said the dragon-fly softly. “I have been flying all morning, and I am so hot and tired that I can go no farther,” she added.",
			"“Indeed!” exclaimed the monkey in a mocking tone. “We don’t allow any weak creature such as you are to stay under our shelter. Go away!” he said angrily and, taking a dry twig, he threw it at the poor creature.",
			"The dragon-fly, being very quick, had flown away before the cruel monkey could hit her. She hurried to her brother the king, and told him what had happened. The king became very angry, and resolved to make war on"
		],
		titleImage: "/images/folktales/the-monkeys-and-the-dragon-flies-title.png",
		bodyImage: "/images/folktales/the-monkeys-and-the-dragon-flies-body.png"
	},
	{
		title: "Kabalan",
		body: [
			"the monkeys. So he despatched three of his soldiers to the king of the monkeys with this challenge: “The King of the Monkeys“",
			"“Sir, — As one of your subjects has treated my sister cruelly, I am resolved to kill you and your subjects with all speed.",
			"The monkey-king laughed at the challenge. He said to the messengers, “Let your king and his soldiers come to the battle-field, and they will see how well my troops fight.”",
			"“You don’t mean what you say, cruel king,” answered the messengers. “You should not judge before the fight is over.”",
			"“What fools, what fools!” exclaimed the king of the monkeys. “Go to your ruler and tell him my answer,” and he drove the poor little creatures away.",
			"When the king of the dragon-flies received the reply, he immediately ordered his soldiers to go to the battle-field, but without anything to fight with.",
			"Meanwhile the monkeys came, each armed with a heavy stick. Then the monkey-king shouted, “Strike the flying creatures with your clubs!”",
			"When King Dragon heard this order, he commanded his soldiers to alight on the foreheads of their enemies. Then the monkeys began to strike at the dragon-flies, which were on the foreheads of their companions.",
			"The dragon-flies were very quick, and were not hurt at all, but the monkeys were all killed. Thus the light, quick-witted dragon-flies won the victory over the strong but foolish monkeys."
		],
		titleImage: "/images/folktales/kabalan-title.png",
		bodyImage: "/images/folktales/kabalan-body.png"
	}
]

const Folktales = async () => {

	return (
		<article className="bg-background-200">
			<div className={cn("pt-20 mx-auto h-full w-full bg-background-100", screenBreakpoints)}>

			<Header
				className="mb-14"
				title="Folktales"
				description="
				Cras imperdiet semper aliquam. Proin feugiat nulla non tempus faucibus. Morbi quis tincidunt libero. Nam sed finibus ligula. Pellentesque habitant morbi tristique s enectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nullam imperdiet nunc at risus sagittis pulvinar. Suspendisse potenti."
			/>
			<div className={cn("flex flex-col")}>
				<CardStory 
					title={data[0].title}
					body={data[0].body}
					titleImage={data[0].titleImage}
					bodyImage={data[0].bodyImage}
					align="text-left"
				/>
				<CardStory 
					title={data[1].title}
					body={data[1].body}
					titleImage={data[1].titleImage}
					bodyImage={data[1].bodyImage}
					align='text-right'
				/>
				<CardStory 
					title={data[2].title}
					body={data[2].body}
					titleImage={data[2].titleImage}
					bodyImage={data[2].bodyImage}
					align="text-left"
				/>
			</div>
				<div className='mt-5 relative h-[250px]'>
					<div className="w-full h-[100px] absolute top-[-100px] z-20">
						<Image
							src="/home/wave-1.svg"
							fill
							alt="Wave"
							style={{
								objectFit: 'cover',
								objectPosition: 'left',
							}}
						></Image>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Folktales;
