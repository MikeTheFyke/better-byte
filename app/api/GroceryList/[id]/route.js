import GroceryLists from "@/app/(models)/GroceryList";
import { NextResponse } from "next/server";

// Find Grocery List
export async function GET(req, { params }) {
	try {
		const { id } = params;

		const foundGroceryLists = await GroceryLists.findOne({ id: id });

		return NextResponse.json({ foundGroceryLists }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

// Create Grocery List
export async function POST(req) {
	try {
		const body = await req.json();
		const groceryListData = body.formData;
		await GroceryLists.create(groceryListData);

		return NextResponse.json(
			{ message: "Grocerylist Created" },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
