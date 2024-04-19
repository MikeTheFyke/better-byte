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
				<div className="grid grid-cols-2 gap-4">
					<div
						className="h-[100%] w-[100%]"
						style={{
							backgroundImage: `url(${selectedRecipe.image.file})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
					<div className="min-w-[310px]">
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
										<h6 className="w-[60px]">{ingredient.quantity}</h6>
										<h6 className="w-[80px]">{ingredient.unit}</h6>
										<h6 className="w-[100px]">{ingredient.name}</h6>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-10">
				<div className="grid grid-cols-1 gap-4">
					<div className="w-full pl-4">
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
			<div className="flex justify-center">
				<div className="grid grid-cols-[130px_500px] md:grid-cols-[180px_500px] w-[630px] md:w-[688px] justify-center px-4 mt-10 border-4 border-slate-600 rounded">
					{/* Grid start */}

					<div className="w-[130px] md:w-[180px] grid grid-rows-5 striped">
						<h1 className="w-[120px] font-bold text-xl">Ingredient</h1>
						{selectedRecipe.ingredients.map((ingredient) => {
							return (
								<div
									className="flex justify-start whitespace-nowrap"
									key={ingredient.name}
								>
									<h6 className="w-[130px] md:w-[180px] h-[30px] truncate pt-1">
										{ingredient.name}
									</h6>
								</div>
							);
						})}
						<h1 className="w-[100px] font-bold text-xl">Total</h1>
					</div>

					{/* Grid Inner */}
					<div className="w-[500px] md:[520px]">
						<div className="w-[400px] md:[420px]">
							<IngredientRow
								items={availableLocations}
								currency={false}
								styles={"text-xl font-bold"}
							/>
						</div>
						<div className="w-[500px] md:[520px]">
							<div className="flex justify-center">
								<div className="grid grid-cols-5 w-[500px] striped">
									{names.map((ingredient) => {
										return (
											<>
												<IngredientGrid name={ingredient} names={names} />
											</>
										);
									})}
								</div>
							</div>
						</div>
						<div className="w-[400px] md:[420px]">
							<IngredientRow
								items={totals}
								currency={true}
								styles={"text-xl font-bold"}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecipePage;
