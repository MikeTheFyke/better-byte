interface PageParams {
	user_id: string;
}

const RecipePage = ({ params }) => {
	return <div>RecipePage {params.user_id}</div>;
};

export default RecipePage;
