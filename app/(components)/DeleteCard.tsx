"use client";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RecipeDeleteDialog from "./RecipeDeleteDialog";

interface Props {
	id: string;
	recipeName: string;
}

const DeleteCard = ({ id, recipeName }: Props) => {
	const router = useRouter();
	const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

	return (
		<>
			{openDeleteDialog ? (
				<RecipeDeleteDialog
					recipeId={id}
					recipeName={recipeName}
					setOpenDeleteDialog={setOpenDeleteDialog}
				/>
			) : null}
			<FontAwesomeIcon
				icon={faTrashCan}
				className="text-red-400 hover:cursor-pointer hover:text-red-600 text-2xl p-1"
				onClick={() => setOpenDeleteDialog(true)}
			/>
		</>
	);
};
export default DeleteCard;
