"use client";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Recipe } from "../(models)/Recipe";
import { useState } from "react";
import RecipeEditDialog from "./RecipeEditDialog";

interface Props {
	recipe: Recipe;
}

const EditCard = ({ recipe }: Props) => {
	const [openDialog, setOpenDialog] = useState(false);

	return (
		<>
			{openDialog ? (
				<RecipeEditDialog setOpenDialog={setOpenDialog} recipe={recipe} />
			) : null}

			<FontAwesomeIcon
				icon={faPencil}
				className="text-blue-400 hover:cursor-pointer hover:text-blue-600  text-2xl p-1"
				onClick={() => setOpenDialog(!openDialog)}
			/>
		</>
	);
};

export default EditCard;
