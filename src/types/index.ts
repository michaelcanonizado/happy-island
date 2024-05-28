export type Data = {
	title: string;
	description: string;
	data: {
		highlights: Instance[];
		regulars: Instance[];
	};
};

export type Instance = {
	title: string;
	isHighlight: boolean;
	image: string;
	details: string[];
	pillData: string | null;
	color: string;
};
