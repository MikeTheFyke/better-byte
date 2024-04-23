import React from "react";
import AddGroceryIngredientRow from "./AddGroceryIngredientRow";

interface Props {
	names: string[];
}

const AddGroceryIngredientGrid = async ({ names }: Props) => {
	return (
		<div>
			{names.map((name, index) => {
				return <AddGroceryIngredientRow name={name} key={index + name} />;
			})}
		</div>
	);
};

export default AddGroceryIngredientGrid;
