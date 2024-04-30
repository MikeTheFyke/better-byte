import GroceryList from "@/app/(models)/GroceryLists";
import { NextResponse } from "next/server";

// Find Grocery List
export async function GET(req, { params }) {
	try {
		const { id } = params;

		const foundGroceryLists = await GroceryList.findOne({ userId: id });

		return NextResponse.json({ foundGroceryLists }, { status: 200 });
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

		const updateRecipeData = await GroceryList.findByIdAndUpdate(id, {
			...groceryData,
		});

		return NextResponse.json({ message: "Grocery Updated" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
