"use client";
import { useEffect, useState } from "react";

export type ItemStore = {
	name: string;
	price: number;
	unit: string;
	checked: boolean;
};

export type Item = {
	item: string;
	stores: Array<ItemStore>;
};

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

	const ingredientUpdate = (location: string, id: string | number) => {
		let updatedItems = itemData.stores.map((store, index) => {
			if (store.name === id.toString()) {
				console.log("Store : ", store);
				return { ...store, checked: !store.checked };
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
			price: 0,
			unit: "",
			checked: false,
		},
		{
			name: "Loblaws",
			price: 0,
			unit: "",
			checked: false,
		},
		{
			name: "noFrills",
			price: 0,
			unit: "",
			checked: false,
		},
		{
			name: "Sobeys",
			price: 0,
			unit: "",
			checked: false,
		},
		{
			name: "Galleria",
			price: 0,
			unit: "",
			checked: false,
		},
	];

	const startingItemData = { name: "", stores: startingStores };
	const [itemData, setItemData] = useState(startingItemData);

	useEffect(() => {}, [itemData]);

	console.log("ItemData : ", itemData);

	return (
		<form onSubmit={handleSubmit} method="post" className="w-[600px]">
			<h1 className="mb-10 text-2xl w-full text-center">
				Enter grocery item details below
			</h1>
			<div>
				<label className="text-lg mt-10">Item name</label>
				<input
					id="name"
					name="name"
					type="text"
					onChange={() => updateItem(itemData.name)}
					required={true}
					value={itemData.name}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mb-6"
					placeholder="Item name"
				/>
			</div>
			{itemData.stores.map((store, index) => {
				return (
					<div
						key={store.name}
						className="flex flex-row justify-between w-full"
					>
						<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
							<input
								id={store.name}
								type="checkbox"
								name="bordered-checkbox"
								value="location"
								checked={store.checked}
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								onChange={() => boxChecked(store.name)}
							/>
							<label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								{store.name}
							</label>
						</div>
						<div>
							<label className="text-lg">Item price</label>
							<input
								id="price"
								name="price"
								type="text"
								onChange={() => ingredientUpdate(store.name, store.price)}
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
								onChange={() => ingredientUpdate(store.name, store.unit)}
								required={true}
								value={store.unit}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mb-6"
								placeholder="Item unit"
							/>
						</div>
					</div>
				);
			})}
		</form>
	);
};

export default CreateItemForm;
