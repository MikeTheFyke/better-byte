import AddLoblaws from "./AddLoblaws";
import AddMetro from "./AddMetro";
import AddNoFrills from "./AddNoFrills";
import AddWalmart from "./AddWalmart";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";

const RecipeCard = () => {
	return (
		<div className="w-[400px] h-[400px] bg-slate-100 hover:bg-slate-300 rounded-xl">
			<div className="flex justify-end p-1">
				<DeleteCard />
				<EditCard />
			</div>
			<div className="bg-red-200 h-[260px] grid grid-cols-2 gap-4 place-content-between">
				<AddWalmart />
				<AddLoblaws />
				<AddMetro />
				<AddNoFrills />
			</div>
			<div className="flex text-black text-center justify-center text-2xl pt-5">
				Recipe name
			</div>
		</div>
	);
};

export default RecipeCard;
