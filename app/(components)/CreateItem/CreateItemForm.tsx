"use client";
import { useState } from "react";
import CreateItemDropDown from "./CreateItemDropDown";

const CreateItemForm = () => {
	const handleSubmit = async (e: any) => {
		e.preventDefault();
	};

	const startingRegistrationData = {
		username: "",
		email: "",
		password: "",
	};

	const [formData, setFormData] = useState(startingRegistrationData);

	return (
		<form onSubmit={handleSubmit} method="post">
			<h6>Enter grocery item details below</h6>
			<CreateItemDropDown />
		</form>
	);
};

export default CreateItemForm;
