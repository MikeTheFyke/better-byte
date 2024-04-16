"use client";
import { useEffect, useState } from "react";

const CreateItemForm = () => {
	const handleSubmit = async (e: any) => {
		e.preventDefault();
	};

	const boxChecked = (id: string) => {
		let updatedItems = itemData.stores.map((store, index) => {
			if (store.name === id) {
				return { ...store, checked: !store.checked };
			}
			return store;
		});
		setItemData((prevState) => ({
			...prevState,
			stores: updatedItems,
		}));
	};

	const updateItem = (item: string) => {
		setItemData((prevState) => ({
			...prevState,
			name: item,
		}));
	};

	const ingredientUpdate = (e: any, location: string) => {
		let value = e.target.value;
		let name = e.target.name;

		let updatedItems = itemData.stores.map((store, index) => {
			if (store.name === location) {
				return { ...store, [name]: value };
			}
			return store;
		});

		setItemData((prevState) => ({
			...prevState,
			stores: updatedItems,
		}));
	};

	const startingStores = [
		{
			name: "Walmart",
			price: "",
			unit: "",
			checked: false,
		},
		{
			name: "Loblaws",
			price: "",
			unit: "",
			checked: false,
		},
		{
			name: "noFrills",
			price: "",
			unit: "",
			checked: false,
		},
		{
			name: "Sobeys",
			price: "",
			unit: "",
			checked: false,
		},
		{
			name: "Galleria",
			price: "",
			unit: "",
			checked: false,
		},
	];

	const startingItemData = { name: "", stores: startingStores };
	const [itemData, setItemData] = useState(startingItemData);

	useEffect(() => {}, [itemData]);

	return (
		<form onSubmit={handleSubmit} method="post" className="w-[600px]">
			<h1 className="mb-10 text-2xl w-full text-center">
				Enter grocery item details below
			</h1>
			<div>
				<label className="text-lg">Item name</label>
				<input
					id="name"
					name="name"
					type="text"
					onChange={() => updateItem(itemData.name)}
					required={true}
					value={itemData.name}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mb-6 mt-4"
					placeholder="Item name"
				/>
			</div>
			{itemData.stores.map((store, index) => {
				return (
					<div
						key={store.name}
						className="flex flex-row justify-between w-full mb-6 border-solid border-2 dark:border-gray-600 rounded-md p-4"
					>
						<div className="flex items-center w-[200px]">
							<input
								id={store.name}
								type="checkbox"
								name="bordered-checkbox"
								value="location"
								checked={store.checked}
								className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								onChange={() => boxChecked(store.name)}
							/>
							<label className="w-full py-4 ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
								{store.name}
							</label>
						</div>
						<div>
							<label className="text-lg">Item price</label>
							<input
								id="price"
								name="price"
								type="text"
								onChange={(e) => ingredientUpdate(e, store.name)}
								required={true}
								value={store.price}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mb-6"
								placeholder="Item Price $"
							/>
						</div>
						<div>
							<label className="text-lg">Item unit type</label>
							<input
								id="unit"
								name="unit"
								type="text"
								onChange={(e) => ingredientUpdate(e, store.name)}
								required={true}
								value={store.unit}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mb-6"
								placeholder="Item unit"
							/>
						</div>
					</div>
				);
			})}
			<input
				type="submit"
				value="Add item"
				className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:opacity-50 disabled:shadow-none cursor-pointer mt-4"
			/>
		</form>
	);
};

export default CreateItemForm;
