import RecipeCard from "@/app/(components)/RecipeCard";
import RecipeForm from "@/app/(components)/RecipeForm";

interface PageParams {
	user_id: string;
}

const RecipePage = ({ params }) => {
	return (
		<>
			<div className="w-full bg-blue-300">
				<RecipeForm />
			</div>
			<div className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
					<RecipeCard />
					<RecipeCard />
					<RecipeCard />
					<RecipeCard />
					<RecipeCard />
				</div>
			</div>
		</>
	);
};

export default RecipePage;

1670 - 3;
