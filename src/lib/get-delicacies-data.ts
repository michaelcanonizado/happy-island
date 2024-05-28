import delicacies from '@/data/delicacies.json';
import { Data } from '@/types';

export const getDelicaciesData = async () => {
	const formattedDelicaciesData: Data = {
		title: delicacies.title,
		description: delicacies.description,
		data: {
			highlights: [],
			regulars: [],
		},
	};

	for (const instance of delicacies.data) {
		if (instance.isHighlight == true) {
			formattedDelicaciesData.data.highlights.push(instance);
		} else if (instance.isHighlight == false) {
			formattedDelicaciesData.data.regulars.push(instance);
		}
	}

	console.log(formattedDelicaciesData);

	return formattedDelicaciesData;
};
