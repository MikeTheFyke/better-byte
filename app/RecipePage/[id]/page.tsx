import RecipeCard from "@/app/(components)/RecipeCard";

const getRecipeById = async (id: string) => {
	try {
		const res = await fetch(`http://localhost:3000/api/Recipes/${id}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to get recipe.");
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

interface PageParams {
	user_id: string;
}

const RecipePage = async ({ params }: any) => {
	const recipeId = params.id;
	const recipe = await getRecipeById(recipeId);

	console.log("recipe : ", recipe.foundRecipe);

	return (
		<div className="flex justify-center mt-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
				{recipe ? <RecipeCard recipe={recipe.foundRecipe} /> : null}
			</div>
		</div>
	);
};

export default RecipePage;
