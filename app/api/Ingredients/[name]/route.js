import { NextResponse } from "next/server";
import Ingredient from "../../../(models)/Ingredient";

// Find ingredient
export async function GET(req, { params }) {
	try {
		const { name } = params;

		const foundIngredient = await Ingredient.findOne({ name: name });

		return NextResponse.json({ foundIngredient }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
