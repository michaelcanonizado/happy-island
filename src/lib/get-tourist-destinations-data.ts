import touristDestinations from '@/data/tourist-destinations.json';
import { Data } from '@/types';

export const getTouristDestinationsData = async () => {
	const formattedTouristDestinationsData: Data = {
		title: touristDestinations.title,
		description: touristDestinations.description,
		data: {
			highlights: [],
			regulars: [],
		},
	};

	for (const instance of touristDestinations.data) {
		if (instance.isHighlight == true) {
			formattedTouristDestinationsData.data.highlights.push(instance);
		} else if (instance.isHighlight == false) {
			formattedTouristDestinationsData.data.regulars.push(instance);
		}
	}

	console.log(formattedTouristDestinationsData);

	return formattedTouristDestinationsData;
};
