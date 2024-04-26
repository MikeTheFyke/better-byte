import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const groceryListsSchema = new Schema(
	{
		id: String,
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

const GroceryLists =
	mongoose.models.GroceryLists ||
	mongoose.model("GroceryLists", groceryListsSchema);
export default GroceryLists;
