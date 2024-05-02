"use client";
import { GroceryStoreItemData } from "@/app/(models)/GroceryList";
import { currency } from "@/app/common/common";
import React, { useState } from "react";

interface Props {
	ingredients: GroceryStoreItemData[];
}

const GroceryGridIngredients = ({ ingredients }: Props) => {
	const [ingredientsList, setIngredientList] = useState(ingredients);
	const strikeOutIngredient = (id: string) => {
		if (document.getElementById(id).style.backgroundColor === "transparent") {
			document
				.getElementById(id)
				.setAttribute("style", "background-color:#16A34A");
		} else {
			document
				.getElementById(id)
				.setAttribute("style", "background-color:transparent");
		}
	};

	return ingredientsList.map((ingredient) => {
		return (
			<>
				<div
					key={Math.random()}
					className="inline-flex justify-between groceryGridStriped"
				>
					<div
						className="w-[200px] pl-[8px] cursor-pointer"
						style={{ backgroundColor: "transparent" }}
						id={ingredient.item as string}
						onClick={() => strikeOutIngredient(ingredient.item as string)}
					>
						{ingredient.item}
					</div>
					<div key={Math.random()} className="w-[100px] text-center">
						{ingredient.quantity}
					</div>
					{ingredient.stores.map((store) => {
						return (
							<>
								<div key={Math.random()} className="w-[100px] text-center">
									{store.price > 0
										? `${currency}${store.price.toFixed(2)}`
										: "N/A"}
								</div>
							</>
						);
					})}
				</div>
			</>
		);
	});
};

export default GroceryGridIngredients;
