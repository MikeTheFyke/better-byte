import IngredientGrid from "@/app/(components)/IngredientGrid/IngredientGrid";
import { Recipe, getRecipeById } from "@/app/(models)/Recipe";

const RecipePage = async ({ params }: any) => {
	const recipeId = params.id;
	const recipes = await getRecipeById(recipeId);
	const selectedRecipe: Recipe = recipes.foundRecipe;

	const names = selectedRecipe.ingredients.map((ingredient) => {
		return ingredient.name.toUpperCase();
	});

	return (
		<>
			<div className="flex justify-center mt-10">
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

							<div className="flex justify-start mb-2">
								<h1 className="w-[200px] font-bold">Quantity/Unit</h1>
								<h1 className="w-[200px] font-bold">Ingredients</h1>
							</div>

							{selectedRecipe.ingredients.map((ingredient) => {
								return (
									<div className="flex justify-start" key={ingredient.name}>
										<h6 className="w-[200px]">
											{ingredient.quantity} {ingredient.unit}
										</h6>
										<h6 className="w-[200px]">{ingredient.name}</h6>
									</div>
								);
							})}
						</div>
					</div>
					<div className="mt-8">
						<div className="flex justify-center">
							<div className="grid grid-cols-5 w-[500px]">
								<div className="w-[100px] text-center">Walmart</div>
								<div className="w-[100px] text-center">Loblaws</div>
								<div className="w-[100px] text-center">noFrills</div>
								<div className="w-[100px] text-center">Galleria</div>
							</div>
						</div>
						{names.map((ingredient) => {
							return (
								<>
									<IngredientGrid name={ingredient} names={names} />
								</>
							);
						})}
						<div className="flex justify-center">
							<div className="grid grid-cols-5 w-[500px]">
								<div className="w-[100px] text-center">
									{selectedRecipe.totals[0].total}
								</div>
								<div className="w-[100px] text-center">
									{selectedRecipe.totals[1].total}
								</div>
								<div className="w-[100px] text-center">
									{selectedRecipe.totals[2].total}
								</div>
								<div className="w-[100px] text-center">
									{selectedRecipe.totals[3].total}
								</div>
								<div className="w-[100px] text-center">Total</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-10">
				<div className="grid grid-cols-1 gap-4">
					<div className="w-full">
						<h1 className="text-2xl mb-2 w-[1000px]">Steps</h1>
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
		</>
	);
};

export default RecipePage;
