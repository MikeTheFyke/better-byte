import GroceryList from "@/app/(models)/GroceryLists";
import { NextResponse } from "next/server";

// Find Grocery List
export async function GET(req, { params }) {
	try {
		const { id } = params;

		const foundGroceryLists = await GroceryList.findOne({ id: id });

		return NextResponse.json({ foundGroceryLists }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
