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
				id="input-group-1"
				className="bg-gray-50 border border-slate-100 text-green-600 text-sm rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-[300px] ps-10 p-2.5 dark:bg-slate-100 dark:border-slate-100 dark:placeholder-slate-100 dark:text-green-600 dark:focus:ring-slate-100 dark:focus:border-slate-100"
				placeholder="Search an item"
			/>
			<button
				type="submit"
				className="text-white font-bold uppercase absolute end-1 bottom-1 bg-green-600 hover:bg-green-800 rounded-lg text-md px-4 py-1 dark:bg-green-600 dark:hover:bg-green-800"
			>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
