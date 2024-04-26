import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const groceryListSchema = new Schema(
	{
		userId: String,
		items: {
			itemData: [
				{
					item: String,
					quantity: Number,
					stores: [{ name: String, quantity: String, unit: String }],
				},
			],
		},
	},
	{
		timestamps: true,
	}
);

const GroceryList =
	mongoose.models.GroceryLists ||
	mongoose.model("GroceryLists", groceryListSchema);
export default GroceryList;
