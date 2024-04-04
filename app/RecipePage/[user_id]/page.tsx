import RecipeCard from "@/app/(components)/RecipeCard";

interface PageParams {
	user_id: string;
}

const RecipePage = ({ params }) => {
	return (
		<div>
			<RecipeCard />
		</div>
	);
};

export default RecipePage;
