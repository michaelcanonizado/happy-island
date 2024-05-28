import festivals from '@/data/festivals.json';
import delicacies from '@/data/delicacies.json';
import { Data } from '@/types';
import Delicacies from '@/app/delicacies/page';

export const getFestivalsData = async () => {
	const formattedFestivalsData: Data = {
		title: festivals.title,
		description: festivals.description,
		data: {
			highlights: [],
			regulars: [],
		},
	};

	for (const instance of festivals.data) {
		if (instance.isHighlight == true) {
			formattedFestivalsData.data.highlights.push(instance);
		} else if (instance.isHighlight == false) {
			formattedFestivalsData.data.regulars.push(instance);
		}
	}

	console.log(formattedFestivalsData);

	return formattedFestivalsData;
};
