import {
	Ingredient,
	findIngredients,
	getIngredientByName,
} from "@/app/(models)/Ingredients";
import React from "react";

interface Props {
	name: string;
	names: string[];
}

const IngredientGrid = async ({ name, names }: Props) => {
	// let itemsArray: any[] = [];
	const ingredient = await getIngredientByName(name.toUpperCase());
	// const found = await Promise.all(
	// 	names.map(async (name) => {
	// 		findIngredients(name).then((value) => {
	// 			itemsArray.push(value.foundIngredient);
	// 			return itemsArray;
	// 		});
	// 		return itemsArray;
	// 	})
	// );
	const selectedIngredient: Ingredient = ingredient.foundIngredient;
	// const ingredients = found;

	// if (selectedIngredient && selectedIngredient.stores) {
	// 	console.log("Found : ", selectedIngredient);
	// }
	const currency = "$";

	if (selectedIngredient && selectedIngredient.stores) {
		return (
			<>
				{selectedIngredient.stores.map((store: any) => {
					return (
						<div key={name} className="w-[100px] text-center">
							{store.price === 0 ? "N/A" : `${currency}${store.price}`}
						</div>
					);
				})}
				<div className="w-[100px] text-center">
					{selectedIngredient.stores[0].unit}
				</div>
			</>
		);
	}
};

export default IngredientGrid;
