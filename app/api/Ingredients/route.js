import Ingredient from "@/app/(models)/Ingredient";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const body = await req.json();
		const IngredientData = body.formData;
		await Ingredient.create(IngredientData);

		console.log("IngredientData : ", IngredientData);

		return NextResponse.json(
			{ message: "Ingredient Created" },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

export async function GET() {
	try {
		const Ingredients = await Ingredient.find();
		return NextResponse.json({ Ingredients }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
