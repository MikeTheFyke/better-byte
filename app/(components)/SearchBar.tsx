import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
	return (
		<div className="relative">
			<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="w-4 h-4 text-green-600 dark:text-green-600"
				/>
			</div>
			<input
				type="text"
				className="searchInput text-sm"
				placeholder="Search for an item"
			/>
			<button type="submit" className="searchButton text-md">
				Search
			</button>
		</div>
	);
};

export default SearchBar;
