export type Ingredient = {
	name: string;
	quantity: string;
	unit: string;
};

export type Recipe = {
	title: string;
	description: string;
	ingredients: Array<Ingredient>;
	step: [];
	image: string;
};
