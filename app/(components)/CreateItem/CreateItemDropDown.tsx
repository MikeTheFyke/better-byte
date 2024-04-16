"use client";
import { useState } from "react";

const CreateItemDropDown = () => {
	const [selectedStore, setSelectedStore] = useState("Select Store");
	const [isOpen, setIsOpen] = useState(false);

	const stores = ["Walmart", "Metro", "Loblaws", "Sobeys", "Galleria"];

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const onSelectStore = (store: string) => {
		setSelectedStore(store);
		setIsOpen(false);
	};

	return (
		<div className="w-full py-6 pb-8">
			<div className="relative inline-block">
				<button
					type="button"
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold w-44 py-2 px-4 rounded inline-flex justify-between align-middle"
					onClick={toggleDropdown}
				>
					{selectedStore}
					<svg
						className="w-2.5 h-2.5 ml-2.5 mt-1.5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							d="m1 1 4 4 4-4"
						/>
					</svg>
				</button>

				{isOpen && (
					<div className="origin-top-left absolute left-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
						<ul
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="options-menu"
						>
							{stores.map((store, index) => (
								<li key={`store${index}`}>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() => onSelectStore(store)}
									>
										{store}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default CreateItemDropDown;
