export enum DataTypes {
	festivals,
	folktales,
	touristDestinations,
	delicacies,
}

export type Data = {
	title: string;
	description: string;
	data: {
		highlights: {
			name: string;
			isHighlight: true;
			image: 'string';
			details: string[];
			pillData: string | null;
		}[];
		regulars: {
			name: string;
			isHighlight: false;
			image: 'string';
			details: string[];
			pillData: string | null;
		}[];
	};
};
