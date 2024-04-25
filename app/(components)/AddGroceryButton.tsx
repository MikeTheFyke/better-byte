"use client";
import { useState } from "react";
import AddGroceryDialog from "./AddGroceryDialog";
import { RecipeIngredient } from "../(models)/Recipe";

interface Props {
	names: string[];
	userId: string;
	recipeIngredients: RecipeIngredient[];
}

const AddGroceryButton = ({ names, userId, recipeIngredients }: Props) => {
	const [addDialogOpen, setAddDialogOpen] = useState(false);

	return (
		<>
			{addDialogOpen ? (
				<AddGroceryDialog
					names={names}
					userId={userId}
					recipeIngredients={recipeIngredients}
					addDialogOpen={addDialogOpen}
					setAddDialogOpen={setAddDialogOpen}
				/>
			) : null}
			<input
				type="button"
				value="Add to grocery list"
				onClick={() => setAddDialogOpen(true)}
				className="w-full md:w-[300px] bg-green-600 text-white uppercase text-2xl font-bold rounded py-2 cursor-pointer"
			/>
		</>
	);
};

export default AddGroceryButton;
