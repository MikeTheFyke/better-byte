import {
	Ingredient,
	IngredientLocation,
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

	const displayUnit = selectedIngredient.stores.filter((store) => {
		if (store.unit !== "") {
			return store.unit;
		}
	});

	if (selectedIngredient && selectedIngredient.stores) {
		return (
			<>
				{selectedIngredient.stores.map((store: IngredientLocation) => {
					return (
						<div key={name} className="w-[100px] text-center">
							<h1 className="text-xl h-[30px]">
								{store.price === 0 ? "N/A" : `${currency}${store.price}`}
							</h1>
						</div>
					);
				})}
				<div className="w-[100px] md:w-[120px] text-end whitespace-nowrap">
					<h1 className="text-xl hidden md:block">{displayUnit[0].unit}</h1>
					<h1 className="text-xl md:hidden">
						{displayUnit[0].unit.split(" ")[0]}
					</h1>
				</div>
			</>
		);
	}
};

export default IngredientGrid;
