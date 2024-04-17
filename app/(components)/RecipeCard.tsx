/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Recipe } from "../(models)/Recipe";
import AddLoblaws from "./AddLoblaws";
import AddMetro from "./AddMetro";
import AddNoFrills from "./AddNoFrills";
import AddWalmart from "./AddWalmart";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Props {
	recipe: Recipe;
	userId: string;
}

const RecipeCard = ({ recipe, userId }: Props) => {
	return (
		<div
			className="w-[400px] h-[400px] bg-slate-100 hover:bg-slate-300 rounded-xl"
			key={recipe._id}
		>
			<div className="flex justify-between p-1">
				<DeleteCard id={recipe._id} recipeName={recipe.title} />
				<Link
					href={`/RecipePage/${userId}/${recipe._id}`}
					style={{ display: "contents" }}
				>
					<div className="flex text-black place-items-center justify-center text-2xl">
						{recipe.title}
					</div>
				</Link>
				<EditCard recipe={recipe} />
			</div>
			<div
				className="h-[260px] grid grid-cols-2 gap-4 place-content-between"
				style={{
					backgroundImage: `url(${recipe.image.file})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<AddWalmart />
				<AddLoblaws />
				<AddMetro />
				<AddNoFrills />
			</div>
			<div className="flex text-slate-500 italic place-items-center justify-center text-2xl pt-4 h-[50px]">
				"{recipe.description}"
			</div>
			<div className="flex justify-end text-white text-2xl p-1">
				<div className="w-[60px] h-[30px] bg-blue-500 flex place-items-center justify-center rounded-tl-[10px] rounded-br-[10px]">
					<FontAwesomeIcon icon={faUser} className="text-xl mr-2" />
					{recipe.servings.toString()}
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
