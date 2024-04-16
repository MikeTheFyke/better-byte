import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ingredientSchema = new Schema(
	{
		name: String,
		stores: [{ name: String, price: Number, unit: String }],
	},
	{
		timestamps: true,
	}
);

const Recipe =
	mongoose.models.Ingredient || mongoose.model("Ingredient", ingredientSchema);
export default Recipe;
