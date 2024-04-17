import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
	try {
		const body = await req.json();
		const userData = body.formData;
		console.log(" UserData : ", userData);

		// Confirm data exists
		if (!userData.email || !userData.password || !userData.username) {
			return NextResponse.json(
				{ message: "All fields are required" },
				{ status: 400 }
			);
		}

		// check for duplicate emails
		const duplicate = await User.findOne({ email: userData.email })
			.lean()
			.exec();

		if (duplicate) {
			return NextResponse.json(
				{ message: "Duplicate email found" },
				{ status: 409 }
			);
		}

		const hashPassword = await bcrypt.hash(userData.password, 10);
		userData.password = hashPassword;

		await User.create(userData);
		return NextResponse.json(
			{ message: "Success user created" },
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

export async function GET() {
	try {
		const users = await User.find();
		return NextResponse.json({ users }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
