"use client";
import React, { useState } from "react";
import {
	Ingredient,
	IngredientLocation,
	getIngredientByName,
} from "../(models)/Ingredients";

interface Props {
	name: string;
	index: number;
	key: string | number;
	ingredientsCheckList: Array<{ item: string; checked: boolean }>;
}

const AddGroceryIngredientRow = ({
	name,
	index,
	key,
	ingredientsCheckList,
}: Props) => {
	const boxChecked = (id: string) => {
		console.log("id : ", id);
		let updatedItems = itemData.map((ingredient) => {
			if (ingredient.item === id) {
				return { ...ingredient, checked: !ingredient.checked };
			}
			return ingredient;
		});
		console.log("Updated : ", updatedItems);
		setItemData(updatedItems);
	};

	const [itemData, setItemData] = useState(ingredientsCheckList);

	return (
		<div key={key} className="w-full px-4">
			<input
				id={name}
				type="checkbox"
				name="bordered-checkbox"
				value="name"
				checked={itemData[index].checked}
				className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				onChange={() => boxChecked(name)}
			/>
			<label className="w-full py-4 ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
				{name}
			</label>
		</div>
	);
};

export default AddGroceryIngredientRow;
