import Recipe from "@/app/(models)/Recipes";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
	try {
		const { id } = params;
		await Recipe.findByIdAndDelete(id);

		return NextResponse.json({ message: "Recipe Deleted" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
