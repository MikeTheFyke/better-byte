import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const recipeSchema = new Schema(
	{
		title: String,
		description: String,
		servings: Number,
		ingredients: [{ name: String, quantity: String, unit: String }],
		steps: [String],
		image: { name: String, file: String },
	},
	{
		timestamps: true,
	}
);

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
export default Recipe;
