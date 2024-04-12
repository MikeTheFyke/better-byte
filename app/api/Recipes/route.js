import Recipe from "@/app/(models)/Recipes";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const body = await req.json();
		const recipeData = body.formData;
		await Recipe.create(recipeData);

		return NextResponse.json({ message: "Recipe Created" }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
