import {
	Ingredient,
	findIngredients,
	getIngredientByName,
} from "@/app/(models)/Ingredients";
import React from "react";
import IngredientRow from "./IngredientRow";
import WalmartColumn from "./TotalRow";
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

	if (selectedIngredient && selectedIngredient.stores) {
		return (
			<div className="flex justify-center">
				<div className="grid grid-cols-4 bg-red-500 w-[400px]">
					{selectedIngredient.stores.map((store: any) => {
						return (
							<>
								<IngredientRow price={store.price} name={store.name} />
							</>
						);
					})}
					{/* {selectedIngredient.stores.map((store: any) => {
						if (store.name === "Walmart") {
							return (
								<>
									<WalmartColumn price={store.price} name={store.name} />
								</>
							);
						}
					})} */}
				</div>
			</div>
		);
	}
};

export default IngredientGrid;