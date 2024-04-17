import IngredientGrid from "@/app/(components)/IngredientGrid/IngredientGrid";
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
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
				<div
					className="h-[260px]"
					style={{
						backgroundImage: `url(${selectedRecipe.image.file})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<div>
					<h6 className="text-4xl">{selectedRecipe.title}</h6>
					<h6>{selectedRecipe.description}</h6>
					<h6>Serves: {selectedRecipe.servings.toString()}</h6>
				</div>
				<div>
					<div className="mb-4">
						<h1 className="text-2xl mb-2">Ingredients</h1>
						{selectedRecipe.ingredients.map((ingredient) => {
							return (
								<div className="flex justify-between" key={ingredient.name}>
									<h6 className="w-[200px]">
										{ingredient.quantity} {ingredient.unit}
									</h6>
									<h6 className="w-[200px]">{ingredient.name}</h6>
								</div>
							);
						})}
					</div>
					<IngredientGrid />
					<div>
						<h1 className="text-2xl  mb-2">Steps</h1>
						{selectedRecipe.steps.map((step) => {
							return (
								<>
									<li>{step}</li>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipePage;
