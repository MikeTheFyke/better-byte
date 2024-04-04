import AddLoblaws from "./AddLoblaws";
import AddMetro from "./AddMetro";
import AddNoFrills from "./AddNoFrills";
import AddWalmart from "./AddWalmart";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";

const RecipeCard = () => {
	return (
		<div>
			<AddWalmart />
			<AddLoblaws />
			<AddMetro />
			<AddNoFrills />
			<div>
				<DeleteCard />
				<EditCard />
			</div>
		</div>
	);
};

export default RecipeCard;
