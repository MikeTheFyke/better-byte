import { GroceryList, getGroceryListsById } from "@/app/(models)/GroceryList";
import { getRecipeById } from "@/app/(models)/Recipe";

const GroceryListPage = async ({ params }: any) => {
	const recipeId = params.id;
	const userId = params.user_id;

	const recipes = await getRecipeById(recipeId);
	const groceryLists = await getGroceryListsById(userId);
	const selectedGroceryList: GroceryList | undefined = groceryLists
		? groceryLists.foundGroceryLists
		: undefined;

	console.log("selectedGroceryList : ", selectedGroceryList);

	if (selectedGroceryList) {
		return (
			<div>
				<div className="grid grid-col-5 striped">
					{selectedGroceryList.items.itemData.map((ingredient) => {
						return <div>{ingredient.item}</div>;
					})}
				</div>
			</div>
		);
	} else return <div>No grocery list</div>;
};

export default GroceryListPage;
