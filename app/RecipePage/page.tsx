import RecipeCard from "@/app/(components)/RecipeCard";
import { Recipe } from "@/app/(models)/Recipe";

const getRecipes = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/Recipes", {
			cache: "no-store",
		});

		return res.json();
	} catch (error) {
		console.log("Failed to get recipes : ", error);
	}
};

const RecipePage = async () => {
	const { recipes } = await getRecipes();

	return (
		<div className="flex justify-center mt-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
				{recipes.map((recipe: Recipe) => {
					return (
						<>
							<RecipeCard recipe={recipe} />
						</>
					);
				})}
			</div>
		</div>
	);
};

export default RecipePage;
