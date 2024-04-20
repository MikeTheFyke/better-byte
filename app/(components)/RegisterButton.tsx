"use client";
import { useState } from "react";
import RegisterDialog from "./RegisterDialog";

export const RegisterButton = () => {
	const [registerDialogOpen, setRegisterDialogOpen] = useState(false);

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
				className="mainButton text-sm"
				onClick={() => setRegisterDialogOpen(!registerDialogOpen)}
			>
				Register
			</button>
		</>
	);
};
