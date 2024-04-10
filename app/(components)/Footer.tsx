"use client";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import RecipeDialog from "./RecipeDialog";

const Footer = () => {
	const [openDialog, setOpenDialog] = useState(false);

	console.log("Dialog : ", openDialog);

	return (
		<>
			{openDialog ? <RecipeDialog setOpenDialog={setOpenDialog} /> : null}
			<nav className="flex justify-center bg-nav p-4">
				<button
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
					onClick={() => setOpenDialog(!openDialog)}
				>
					<FontAwesomeIcon icon={faScroll} className="icon" />
					<span>Create new Recipe</span>
				</button>
			</nav>
		</>
	);
};

export default Footer;
