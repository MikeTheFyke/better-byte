export type Ingredient = {
	name: string;
	quantity: string;
	unit: string;
};

export type Recipe = {
	title: string;
	description: string;
	servings: Number;
	ingredients: Array<Ingredient>;
	steps: [];
	image: { name: string; file: string };
};
