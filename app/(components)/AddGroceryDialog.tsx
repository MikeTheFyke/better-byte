"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { RecipeIngredient } from "../(models)/Recipe";
import { GroceryList } from "../(models)/GroceryList";
import { useRouter } from "next/navigation";

interface Props {
	names: string[];
	userId: string;
	recipeIngredients: RecipeIngredient[];
	selectedGroceryList: GroceryList | undefined;
	addDialogOpen: boolean;
	setAddDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const AddGroceryDialog = ({
	names,
	userId,
	recipeIngredients,
	selectedGroceryList,
	addDialogOpen,
	setAddDialogOpen,
}: Props) => {
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		itemData.map((item, index) => {
			if (item.quantity === 0) {
				itemData.splice(index, 1);
			}
		});

		if (selectedGroceryList) {
			const updatedList = [
				...ingredientsCheckList,
				...selectedGroceryList.items.itemData,
			];

			console.log("ingredientsCheckList : ", ingredientsCheckList);
			console.log(
				"selectedGroceryList.items.itemData : ",
				selectedGroceryList.items.itemData
			);
			console.log("updatedList : ", updatedList);

			const itemData = Object.values(
				updatedList.reduce((value, object) => {
					if (value[object.item]) {
						value[object.item].quantity += object.quantity;
						// value[object.item].quantity++;
					} else {
						value[object.item] = { ...object, quantity: 1 };
					}
					return value;
				}, {})
			);

			const formData = {
				userId: userId,
				items: {
					itemData,
				},
			};

			const res = await fetch(`/api/GroceryLists/${selectedGroceryList._id!}`, {
				method: "PUT",
				body: JSON.stringify({ formData }),
				"content-type": "applciation/json",
			});

			if (!res.ok) {
				throw new Error("Failed to add to grocery list.");
			} else {
				router.refresh();
				setItemData(ingredientsCheckList);
				setAddDialogOpen(false);
			}

			// const updatedIngredients = updatedQuantity.concat(newIngredients);

			// const ingredientList = updatedIngredients
			// 	.reverse()
			// 	.map(({ item }) => item);
			// const finalList = updatedIngredients.filter(
			// 	({ item }, index) => !ingredientList.includes(item, index + 1)
			// );

			// console.log("ingredientList : ", ingredientList);
			// console.log("finalList : ", finalList);
			// console.log("updatedQuantity : ", updatedQuantity);
			// console.log("updatedIngredients : ", updatedIngredients);
		} else if (!selectedGroceryList) {
			console.log("No Previous Grocery List detected");

			const formData = {
				userId: userId,
				items: {
					itemData,
				},
			};

			const res = await fetch("/api/GroceryLists", {
				method: "POST",
				body: JSON.stringify({ formData }),
				"content-type": "applciation/json",
			});

			if (!res.ok) {
				throw new Error("Failed to add to grocery list.");
			} else {
				router.refresh();
				setItemData(ingredientsCheckList);
				setAddDialogOpen(false);
			}
		}
	};

	const ingredientsCheckList = recipeIngredients.map((ingredient) => {
		return {
			item: ingredient.name,
			quantity: 1,
			stores: ingredient.stores,
			checked: true,
		};
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		name: string
	) => {
		let value = parseInt(e.target.value);

		let updatedQuantity = itemData.map((ingredient) => {
			if (ingredient.item.toUpperCase() === name) {
				return { ...ingredient, quantity: value };
			}
			return ingredient;
		});

		let updatedPrices = updatedQuantity.map((ingredient, index) => {
			if (ingredient.item.toUpperCase() === name) {
				const ingredientIndex = index;
				let test = ingredient.stores.map((store: any, index) => {
					const storeIndex = index;
					const originalPrice =
						ingredientsCheckList[ingredientIndex].stores[storeIndex].price;
					return {
						...store,
						price: ingredient.quantity * originalPrice,
					};
				});
				return { ...ingredient, stores: test };
			}
			return ingredient;
		});

		setItemData(updatedPrices);
	};

	const boxChecked = (id: string) => {
		let updatedItems = itemData.map((ingredient) => {
			if (ingredient.item.toUpperCase() === id) {
				const newQuantity = ingredient.checked ? 0 : 1;
				return {
					...ingredient,
					checked: !ingredient.checked,
					quantity: newQuantity,
				};
			}
			return ingredient;
		});

		let updatedPrices = updatedItems.map((ingredient, index) => {
			if (ingredient.item.toUpperCase() === id) {
				const ingredientIndex = index;
				let test = ingredient.stores.map((store: any, index) => {
					const storeIndex = index;
					const originalPrice =
						ingredientsCheckList[ingredientIndex].stores[storeIndex].price;
					return {
						...store,
						price: ingredient.quantity * originalPrice,
					};
				});
				return { ...ingredient, stores: test };
			}
			return ingredient;
		});

		setItemData(updatedPrices);
	};

	const [existingList, setExistingList] = useState(selectedGroceryList);
	const [itemData, setItemData] = useState(ingredientsCheckList);

	console.log("ItemData : ", itemData);
	// console.log("selectedGroceryList : ", selectedGroceryList?.items.itemData);

	return (
		<div
			data-dialog-backdrop="add-grocery-dialog"
			data-dialog-backdrop-close="true"
			className="fixed top-0 left-o z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
		>
			<div
				data-dialog="add-grocery-dialog"
				className="relative mx-auto flex w-full max-w-[32rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
			>
				{/* Main container */}
				<div className="flex flex-col gap-4 p-6">
					{/* Header */}
					<div className="flex flex-row justify-between">
						<h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
							Add items to your grocery list
						</h4>
						<h4
							className="block font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 cursor-pointer"
							onClick={() => setAddDialogOpen(!addDialogOpen)}
						>
							X
						</h4>
					</div>
					{/* Dialog Content */}

					<div className="w-full inline-block">
						<h6 className="font-sans text-2xl antialiased leading-relaxed tracking-normal text-inherit">
							The following items will be added to your grocery list.
						</h6>
					</div>
				</div>
				<form onSubmit={handleSubmit} method="post">
					<div className="striped px-4">
						<div className="border border-slate-200 rounded py-4">
							{names.map((name, index) => {
								return (
									<div
										key={Math.random()}
										className="w-full h-[34px] px-2 py-[3px] flex justify-between"
									>
										<div>
											<input
												id={name}
												type="checkbox"
												name="bordered-checkbox"
												value="name"
												checked={
													itemData[index].checked &&
													itemData[index].quantity > 0
												}
												className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-600 dark:focus:ring-green-600 accent-green-800"
												onChange={() => boxChecked(name)}
											/>
											<label className="w-full h-[34px] py-4 ms-2 text-2xl font-medium text-black">
												{name}
											</label>
										</div>
										<input
											id={name + index}
											name="quantity"
											type="number"
											onChange={(e) => handleChange(e, name)}
											value={itemData[index].quantity}
											className="w-[40px] h-[25px] text-gray-900 text-2xl border border-green-600 rounded focus:ring-transparent mt-[1px] [&::-webkit-inner-spin-button]:appearance-none text-center"
											autoComplete="off"
										/>
									</div>
								);
							})}
						</div>
					</div>
					<div className="flex justify-between px-4 my-4">
						<input
							type="button"
							value="Cancel"
							className="block select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:opacity-50 disabled:shadow-none cursor-pointer mt-4"
							onClick={() => setAddDialogOpen(!addDialogOpen)}
						/>
						<input
							type="submit"
							value="Add to Grocery List"
							className="block select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:opacity-50 disabled:shadow-none cursor-pointer mt-4"
						/>
					</div>
				</form>
				{/* End of main container */}
			</div>
		</div>
	);
};

export default AddGroceryDialog;
