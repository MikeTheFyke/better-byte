import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
	try {
		const body = await req.json();
		const userData = body.formData;

		// Confirm data exists
		if (!userData.email || !userData.password) {
			return NextResponse.json(
				{ message: "All fields are required", error },
				{ status: 400 }
			);
		}

		// check for duplicate emails
		const duplicate = await User.findOne({ email: userData.email })
			.lean()
			.exec();

		if (duplicate) {
			return NextResponse.json(
				{ message: "Duplicate email found", error },
				{ status: 409 }
			);
		}

		const hasPassword = await bcrypt.hash(userData.password, 10);
		userData.password = hasPassword;

		await userData.create(userData);
		return NextResponse.json(
			{ message: "Success user created", error },
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
