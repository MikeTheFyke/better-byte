import {
	faBook,
	faCirclePlus,
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
	userId: string | undefined;
}

const Nav = async ({ session, userId }: NavProps) => {
	return (
		<>
			<nav className="flex justify-between bg-green-700 p-4">
				<div className="flex items-center justify-between md:w-[360px]">
					<Link href="/">
						<FontAwesomeIcon icon={faHouse} className="icon" />
					</Link>
					{session && userId ? (
						<>
							<Link href={`/RecipePage/${userId}`}>
								<FontAwesomeIcon icon={faBook} className="iconHeader" />
							</Link>
							<Link href={`/GroceryListPage/${userId}`}>
								<FontAwesomeIcon icon={faClipboard} className="iconHeader" />
							</Link>
							<Link href={`/SearchPage/${userId}`}>
								<FontAwesomeIcon
									icon={faMagnifyingGlass}
									className="iconHeader"
								/>
							</Link>
							{session.user.role === "admin" ? (
								<Link href={`/CreateItemPage/${userId}`}>
									<FontAwesomeIcon icon={faCirclePlus} className="iconHeader" />
								</Link>
							) : null}
						</>
					) : null}
				</div>
				<div className="text-default-text text-4xl font-bold flex items-center justify-center h-[75px] w-[219px] whitespace-nowrap overflow-hidden">
					Better Bytes
				</div>
				<div>
					{session && userId ? (
						<>
							<SearchBar />
							<div className="mt-2 mr-2 flex justify-between space-x-4">
								<p className="text-default-text">
									Welcome back {session.user.name}
								</p>
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
								<button type="button" className="mainButton text-sm">
									Login
								</button>
							</Link>
							<RegisterButton />
						</div>
					)}
				</div>
			</nav>
		</>
	);
};

export default Nav;
