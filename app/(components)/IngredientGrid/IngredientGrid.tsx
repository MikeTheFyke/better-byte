import {
	Ingredient,
	IngredientLocation,
	getIngredientByName,
} from "@/app/(models)/Ingredients";
import { currency } from "@/app/common/common";
import React from "react";

interface Props {
	name: string;
	index: number;
}

const IngredientGrid = async ({ name, index }: Props) => {
	const ingredient = await getIngredientByName(name.toUpperCase());
	const selectedIngredient: Ingredient = ingredient
		? ingredient.foundIngredient
		: undefined;

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
						<div
							key={"grid" + name + Math.random()}
							className="w-[100px] text-center"
						>
							<h1 className="text-xl h-[30px]">
								{store.price === 0
									? "N/A"
									: `${currency}${store.price.toFixed(2)}`}
							</h1>
						</div>
					);
				})}
				<div className="w-[100px] md:w-[100px] text-end whitespace-nowrap">
					<h1 className="h-[30px] text-l hidden md:block pt-1">
						{displayUnit[0].unit}
					</h1>
					<h1 className="h-[30px] text-l md:hidden pt-1 pr-1">
						{displayUnit[0].unit.split(" ")[0]}
					</h1>
				</div>
			</>
		);
	} else {
		return null;
	}
};

export default IngredientGrid;
