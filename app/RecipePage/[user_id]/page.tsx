import RecipeCard from "@/app/(components)/RecipeCard";
import { Recipe, getRecipes } from "@/app/(models)/Recipe";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const RecipePage = async ({ params }: any) => {
	const { recipes } = await getRecipes();
	const session = await getServerSession(options);

	if (session) {
		return (
			<>
				<div className="flex justify-center pt-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
						{recipes.map((recipe: Recipe) => {
							return (
								<>
									<RecipeCard recipe={recipe} userId={params.user_id} />
								</>
							);
						})}
					</div>
				</div>
				<h1 className="text-black text-center w-full py-4">
					All prices displaying * indicate stores that do not include all items
					in recipe.
				</h1>
			</>
		);
	} else {
		redirect("/api/auth/signin?callbackUrl=/");
	}
};

export default RecipePage;
