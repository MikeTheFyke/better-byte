import Recipe from "@/app/(models)/Recipes";
import { NextResponse } from "next/server";

// Find Recipe
export async function GET(req, { params }) {
	try {
		const { id } = params;

		const foundRecipe = await Recipe.findOne({ _id: id });

		return NextResponse.json({ foundRecipe }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

// Update Recipe
export async function PUT(req, { params }) {
	try {
		const { id } = params;
		const body = await req.json();
		const recipeData = body.formData;

		const updateRecipeData = await Recipe.findByIdAndUpdate(id, {
			...recipeData,
		});

		return NextResponse.json({ message: "Recipe Updated" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

// Delete Recipe
export async function DELETE(req, { params }) {
	try {
		const { id } = params;
		await Recipe.findByIdAndDelete(id);

		return NextResponse.json({ message: "Recipe Deleted" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
