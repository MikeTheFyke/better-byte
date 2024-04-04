import {
	faClipboard,
	faHouse,
	faMagnifyingGlass,
	faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Nav = () => {
	return (
		<nav className="flex justify-between bg-nav p-4">
			<div className="flex items-center space-x-10">
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
			<div className="text-default-text">Better Bytes</div>
			<div>
				<SearchBar />
				<div className="mt-2 flex justify-between space-x-4">
					<p className="text-default-text">mikefyke@hotmail.com</p>
					<p className="text-default-text">Logout</p>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
