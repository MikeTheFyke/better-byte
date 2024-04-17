import RecipeCard from "@/app/(components)/RecipeCard";
import { Recipe, getRecipeById } from "@/app/(models)/Recipe";

const RecipePage = async ({ params }: any) => {
	const recipeId = params.id;
	const recipes = await getRecipeById(recipeId);
	const selectedRecipe: Recipe = recipes.foundRecipe;

	return (
		<div className="flex justify-center mt-10">
			{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
				{selectedRecipe ? (
					<RecipeCard recipe={selectedRecipe} userId={params.user_id} />
				) : null}
			</div> */}
			<div className="flex flex-col">
				<h6>{selectedRecipe.title}</h6>
				<h6>{selectedRecipe.description}</h6>
				<h6>Servings: {selectedRecipe.servings.toString()}</h6>
				<h1>Ingredients</h1>
				{selectedRecipe.ingredients.map((ingredient) => {
					return (
						<>
							<li>
								{ingredient.name} {ingredient.quantity} {ingredient.unit}
							</li>
						</>
					);
				})}
				<h1>Steps</h1>
				{selectedRecipe.steps.map((step) => {
					return (
						<>
							<li>{step}</li>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default RecipePage;
