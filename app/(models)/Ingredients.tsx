export type IngredientLocation = {
	name: string;
	price: number;
	unit: string;
	checked: boolean;
};

export type Ingredient = {
	name: string;
	stores: Array<IngredientLocation>;
};

export const getIngredientByName = async (name: string) => {
	try {
		const res = await fetch(`http://localhost:3000/api/Ingredients/${name}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to get ingredient.");
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

export const findIngredients = async (name: string) => {
	try {
		const res = await fetch(`http://localhost:3000/api/Ingredients/${name}`, {
			cache: "no-store",
		});
		if (!res.ok) {
			throw new Error("Failed to get ingredient.");
		}
		const responseBody = await res.json();

		return responseBody;
	} catch (error) {
		console.log(error);
	}
};
