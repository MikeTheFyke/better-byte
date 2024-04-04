import {
	faClipboard,
	faHouse,
	faMagnifyingGlass,
	faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

const Nav = () => {
	return (
		<nav className="flex justify-between bg-nav p-4">
			<div className="flex items-center space-x-4">
				<Link href="/">
					<FontAwesomeIcon icon={faHouse} className="icon" />
				</Link>
				<Link href="/RecipePage/new">
					<FontAwesomeIcon icon={faScroll} className="icon" />
				</Link>
				<Link href="/GroceryListPage">
					<FontAwesomeIcon icon={faClipboard} className="icon" />
				</Link>
				<Link href="/SearchPage">
					<FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
				</Link>
			</div>
			<div className="flex items-center space-x-4">
				<SearchBar />

				<div>
					<p className="text-default-text">mikefyke@hotmail.com</p>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
