export type IngredientLocation = {
	name: string;
	price: number;
	unit: string;
	checked: boolean;
};

export type Ingredient = {
	item: string;
	stores: Array<IngredientLocation>;
};
