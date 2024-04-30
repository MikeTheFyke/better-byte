import GroceryList from "@/app/(models)/GroceryLists";
import { NextResponse } from "next/server";

// Create Grocery List
export async function POST(req) {
	try {
		const body = await req.json();
		const groceryListData = body.formData;
		await GroceryList.create(groceryListData);

		return NextResponse.json(
			{ message: "Grocerylist Created" },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

// Update Grocery List
export async function PUT(req, { params }) {
	try {
		const { id } = params;
		const body = await req.json();
		const groceryData = body.formData;

		console.log("id : ", id);

		const updateRecipeData = await GroceryList.findByIdAndUpdate(
			{ userId: id },
			{
				...groceryData,
			}
		);

		return NextResponse.json({ message: "Grocery Updated" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
