import {
	faBook,
	faClipboard,
	faHouse,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { RegisterButton } from "./RegisterButton";

interface NavProps {
	session: any | null;
}

const Nav = async ({ session }: NavProps) => {
	return (
		<nav className="flex justify-between bg-nav p-4">
			<div className="flex items-center space-x-10">
				<Link href="/">
					<FontAwesomeIcon icon={faHouse} className="icon" />
				</Link>
				{session ? (
					<>
						<Link href="/RecipePage">
							<FontAwesomeIcon icon={faBook} className="icon" />
						</Link>
						<Link href="/GroceryListPage/new">
							<FontAwesomeIcon icon={faClipboard} className="icon" />
						</Link>
						<Link href="/SearchPage">
							<FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
						</Link>
					</>
				) : null}
			</div>
			<div className="text-default-text">Better Bytes</div>
			<div>
				{session ? (
					<>
						<SearchBar />
						<div className="mt-4 mr-2 flex justify-between space-x-4">
							<p className="text-default-text">{session.user.name}</p>
							<Link
								href="/api/auth/signout?callbackUrl=/"
								style={{ display: "contents" }}
							>
								<p className="text-default-text">Logout</p>
							</Link>
						</div>
					</>
				) : (
					<div className="mt-2 flex justify-between space-x-4">
						<Link href="/api/auth/signin" style={{ display: "contents" }}>
							<button
								type="button"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Login
							</button>
						</Link>
						<RegisterButton />
					</div>
				)}
			</div>
		</nav>
	);
};

export default Nav;
