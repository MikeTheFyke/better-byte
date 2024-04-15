"use client";
import { useState } from "react";
import RegisterDialog from "./RegisterDialog";

export const RegisterButton = () => {
	const [registerDialogOpen, setRegisterDialogOpen] = useState(false);

	console.log("Is register open? : ", registerDialogOpen);

	return (
		<>
			{registerDialogOpen ? (
				<RegisterDialog
					registerDialogOpen={registerDialogOpen}
					setRegisterDialogOpen={setRegisterDialogOpen}
				/>
			) : null}
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				onClick={() => setRegisterDialogOpen(!registerDialogOpen)}
			>
				Register
			</button>
		</>
	);
};
