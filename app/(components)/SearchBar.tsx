import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
	return (
		<div className="relative">
			<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="w-4 h-4 text-gray-500 dark:text-gray-400"
				/>
			</div>
			<input
				type="text"
				id="input-group-1"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Search an item"
			/>
			<button
				type="submit"
				className="text-white absolute end-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
