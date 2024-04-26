import GroceryList from "@/app/(models)/GroceryLists";
import { NextResponse } from "next/server";

// Create Grocery List
export async function POST(req) {
	try {
		const body = await req.json();
		const groceryListData = body.formData;
		await GroceryList.create(groceryListData);

		console.log("groceryListData : ", groceryListData);

		return NextResponse.json(
			{ message: "Grocerylist Created" },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
