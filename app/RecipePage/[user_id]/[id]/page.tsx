import IngredientGrid from "@/app/(components)/IngredientGrid/IngredientGrid";
import IngredientRow from "@/app/(components)/IngredientGrid/IngredientRow";
import { Recipe, getRecipeById } from "@/app/(models)/Recipe";

const RecipePage = async ({ params }: any) => {
	const recipeId = params.id;
	const recipes = await getRecipeById(recipeId);
	const selectedRecipe: Recipe = recipes.foundRecipe;

	const names = selectedRecipe.ingredients.map((ingredient) => {
		return ingredient.name.toUpperCase();
	});

	const totals = selectedRecipe.totals.map((item) => {
		return item.total;
	});

	const availableLocations = ["Walmart", "Loblaws", "noFrills", "Galleria"];

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
						<div className="grid grid-rows-5 w-[100px]">
							<h1 className="w-[100px] font-bold">Ingredients</h1>
							{selectedRecipe.ingredients.map((ingredient) => {
								return (
									<div
										className="flex justify-start whitespace-nowrap"
										key={ingredient.name}
									>
										<h6 className="w-[20px]">{ingredient.quantity}</h6>
										<h6 className="w-[60px]">{ingredient.unit}</h6>
										<h6 className="w-[100px]">{ingredient.name}</h6>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<div className="grid grid-cols-2 gap-0 place-items-center w-[600px] -ml-[200px]">
					{/* Grid start */}

					<div className="w-[100px]">
						<div className="grid grid-rows-5 w-[100px]">
							<h1 className="w-[100px] font-bold">Ingredients</h1>
							{selectedRecipe.ingredients.map((ingredient) => {
								return (
									<div
										className="flex justify-start whitespace-nowrap"
										key={ingredient.name}
									>
										<h6 className="w-[100px]">{ingredient.name}</h6>
									</div>
								);
							})}
							<h1 className="w-[100px] font-bold">Total</h1>
						</div>
					</div>

					{/* Grid Inner */}
					<div className="w-[500px]">
						<div className="flex justify-center">
							<div className="grid grid-cols-5 w-[500px]">
								{availableLocations.map((location) => {
									return (
										<>
											<IngredientRow displayValue={location} />
										</>
									);
								})}
							</div>
						</div>
						<div className="flex justify-center">
							<div className="grid grid-cols-5 w-[500px]">
								{names.map((ingredient) => {
									return (
										<>
											<IngredientGrid name={ingredient} names={names} />
										</>
									);
								})}
							</div>
						</div>
						<div className="flex justify-center">
							<div className="grid grid-cols-5 w-[500px]">
								{totals.map((price) => {
									return (
										<>
											<IngredientRow displayValue={price} />
										</>
									);
								})}
							</div>
						</div>
					</div>
					{/* Grid Inner end */}

					{/* Grid end */}
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
