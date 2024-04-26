import AddGroceryButton from "@/app/(components)/AddGroceryButton";
import IngredientGrid from "@/app/(components)/IngredientGrid/IngredientGrid";
import IngredientRow from "@/app/(components)/IngredientGrid/IngredientRow";
import { GroceryList, getGroceryListsById } from "@/app/(models)/GroceryLists";

import { availableLocations } from "@/app/(models)/Ingredients";
import { Recipe, getRecipeById } from "@/app/(models)/Recipe";

const RecipePage = async ({ params }: any) => {
	const recipeId = params.id;
	const userId = params.user_id;

	const recipes = await getRecipeById(recipeId);
	const groceryLists = await getGroceryListsById(userId);
	const selectedRecipe: Recipe = recipes.foundRecipe;
	const selectedGroceryList: GroceryList | undefined = groceryLists
		? groceryLists.foundGroceryLists
		: undefined;

	const names = selectedRecipe.ingredients.map((ingredient) => {
		return ingredient.name.toUpperCase();
	});

	const totals = selectedRecipe.totals.map((item) => {
		return item.total;
	});

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
						<h6 className="text-black text-4xl">{selectedRecipe.title}</h6>
						<h6 className="text-black">{selectedRecipe.description}</h6>
						<h6 className="text-black">
							Serves: {selectedRecipe.servings.toString()}
						</h6>
						<div className="grid grid-rows-5 w-[100px] text-black">
							<h1 className="w-[100px] text-2xl font-bold mb-2">Ingredients</h1>
							{selectedRecipe.ingredients.map((ingredient) => {
								return (
									<div
										className="flex justify-start whitespace-nowrap h-[30px] pt-1"
										key={ingredient.name}
									>
										<h6 className="w-[60px] h-[30px] pt-1">
											{ingredient.quantity}
										</h6>
										<h6 className="w-[80px] h-[30px] pt-1">
											{ingredient.unit}
										</h6>
										<h6 className="w-[160px] h-[30px] pt-1 sm:truncate sm:overflow-hidden">
											{ingredient.name}
										</h6>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-10 text-black">
				<div className="grid grid-cols-1 gap-4">
					<div className="w-full pl-4">
						<h1 className="text-2xl font-bold mb-2 w-[680px]">Steps</h1>
						{selectedRecipe.steps.map((step, index) => {
							return (
								<>
									<ul>
										{index + 1}. {step}
									</ul>
								</>
							);
						})}
					</div>
				</div>
			</div>
			<div className="flex justify-center mb-10">
				<div className="grid grid-cols-[130px_500px] md:grid-cols-[180px_500px] w-[638px] md:w-[688px] justify-center px-[4px] mt-10 border border-1 border-slate-300 drop-shadow-lg drop-shadow-grey-900/10 rounded-xl">
					{/* Grid start */}

					<div className="w-[130px] md:w-[180px] grid grid-rows-5 striped">
						<h1 className="w-[120px] font-bold text-xl text-black pl-2">
							Ingredient
						</h1>
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
						<h1 className="w-[100px] h-[30px] font-bold text-xl text-black pl-2">
							Total
						</h1>
					</div>

					{/* Grid Inner */}
					<div className="w-[500px] md:[520px]">
						<IngredientRow
							items={availableLocations}
							currency={false}
							styles={"text-xl font-bold text-black"}
						/>

						<div className="w-[500px] md:[520px]">
							<div className="flex justify-center">
								<div className="grid grid-cols-5 w-[500px] striped">
									{names.map((ingredient, index) => {
										return (
											<>
												<IngredientGrid name={ingredient} index={index} />
											</>
										);
									})}
								</div>
							</div>
						</div>

						<IngredientRow
							items={totals}
							currency={true}
							styles={"text-xl font-bold text-black"}
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<AddGroceryButton
					userId={userId}
					names={names}
					recipeIngredients={selectedRecipe.ingredients}
					selectedGroceryList={selectedGroceryList}
				/>
			</div>
		</>
	);
};

export default RecipePage;
