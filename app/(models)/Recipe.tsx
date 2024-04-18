export type RecipeTotal = {
	store: string;
	total: number | string;
	allItems: boolean;
};

export type RecipeIngredient = {
	name: string;
	quantity: string;
	unit: string;
};

export type Recipe = {
	title: string;
	description: string;
	servings: Number;
	ingredients: Array<RecipeIngredient>;
	steps: [];
	image: { name: string; file: string };
	totals: Array<RecipeTotal>;
	_id: string;
};

export const getRecipeById = async (id: string) => {
	try {
		const res = await fetch(`http://localhost:3000/api/Recipes/${id}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to get recipe.");
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

export const getRecipes = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/Recipes", {
			cache: "no-store",
		});

		return res.json();
	} catch (error) {
		console.log("Failed to get recipes : ", error);
	}
};
