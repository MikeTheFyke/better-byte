import Recipe from "../(models)/Recipes";
import { NestResponse, NextResponse } from "next/server";

export async function POST(req) {
	try {
		const body = await req.json();
		const receipeData = body.formData;
		await Recipe.create(receipeData);
		return NextResponse.json({ message: "Recipe Created" }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
