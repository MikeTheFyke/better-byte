"use client";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

interface Props {
	id: string;
}

const DeleteCard = ({ id }: Props) => {
	const router = useRouter();

	const deleteRecipe = async () => {
		const res = await fetch(`http://localhost:3000/api/Recipes/${id}`, {
			method: "DELETE",
		});
		if (res.ok) {
			router.refresh();
		}
	};

	return (
		<FontAwesomeIcon
			icon={faTrashCan}
			className="text-red-400 hover:cursor-pointer hover:text-red-600 text-2xl p-1"
			onClick={deleteRecipe}
		/>
	);
};
export default DeleteCard;
