/* eslint-disable @next/next/no-async-client-component */
"use client";
import { useState } from "react";
import RecipeDialog from "./RecipeDialog";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBook,
	faCirclePlus,
	faClipboard,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

interface NavProps {
	session: any | null;
	userId: string | undefined;
}

const Footer = ({ session, userId }: NavProps) => {
	const [openDialog, setOpenDialog] = useState(false);
	return (
		<>
			{openDialog ? <RecipeDialog setOpenDialog={setOpenDialog} /> : null}
			<nav className="flex justify-between bg-green-700 p-8">
				<Link
					href={`/RecipePage/${userId}`}
					className="flex items-center justify-center"
				>
					<FontAwesomeIcon icon={faBook} className="iconFooter" />
				</Link>
				<Link
					href={`/GroceryListPage/${userId}`}
					className="flex items-center justify-center"
				>
					<FontAwesomeIcon icon={faClipboard} className="iconFooter" />
				</Link>
				<button
					className="mainButton"
					onClick={() => setOpenDialog(!openDialog)}
				>
					<span>Create new Recipe</span>
				</button>
				<Link
					href={`/SearchPage/${userId}`}
					className="flex items-center justify-center"
				>
					<FontAwesomeIcon icon={faMagnifyingGlass} className="iconFooter" />
				</Link>
				{session.user.role === "admin" ? (
					<Link
						href={`/CreateItemPage/${userId}`}
						className="flex items-center justify-center"
					>
						<FontAwesomeIcon icon={faCirclePlus} className="iconFooter" />
					</Link>
				) : null}
			</nav>
		</>
	);
};

export default Footer;
