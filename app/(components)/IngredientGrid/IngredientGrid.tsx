import { Ingredient, getIngredientByName } from "@/app/(models)/Ingredients";
import React, { Dispatch, SetStateAction } from "react";
interface Props {
	name: string;
	// walmartPrices: number;
	// setWalmartPrices: Dispatch<SetStateAction<number>>;
}

const IngredientGrid = async ({
	name,
}: // walmartPrices,
// setWalmartPrices,
Props) => {
	const ingredients = await getIngredientByName(name.toUpperCase());
	const selectedIngredient: Ingredient = ingredients.foundIngredient;

	// let walmartPrices = 0;
	let loblawsPrices = [];
	let noFrillsPrices = [];
	let galleriaPrices = [];

	if (selectedIngredient && selectedIngredient.stores) {
		selectedIngredient.stores.map((store) => {
			if (store.name === "Walmart") {
				// setWalmartPrices(walmartPrices + store.price);
			} else if (store.name === "Loblaws") {
				loblawsPrices.push(store.price);
			} else if (store.name === "moFrills") {
				noFrillsPrices.push(store.price);
			} else if (store.name === "Galleria") {
				galleriaPrices.push(store.price);
			}
		});
	}

	if (selectedIngredient && selectedIngredient.stores) {
		return (
			<div className="flex justify-center">
				<div className="grid grid-cols-4 bg-red-500 w-[400px]">
					{selectedIngredient.stores.map((store: any) => {
						return (
							<div key={store.name} className="w-[100px] text-center">
								${store.price}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};

export default IngredientGrid;
