"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Ingredient, getIngredientByName } from "../(models)/Ingredients";
import { RecipeIngredient } from "../(models)/Recipe";

interface Props {
	names: string[];
	recipeIngredients: RecipeIngredient[];
	addDialogOpen: boolean;
	setAddDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const AddGroceryDialog = ({
	names,
	recipeIngredients,
	addDialogOpen,
	setAddDialogOpen,
}: Props) => {
	//
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log("itemData : ", itemData);
	};

	const ingredientsCheckList = recipeIngredients.map((ingredient) => {
		return {
			item: ingredient.name,
			stores: ingredient.stores,
			checked: true,
		};
	});

	const boxChecked = (id: string) => {
		let updatedItems = itemData.map((ingredient) => {
			if (ingredient.item === id) {
				return { ...ingredient, checked: !ingredient.checked };
			}
			return ingredient;
		});
		setItemData(updatedItems);
	};

	const [itemData, setItemData] = useState(ingredientsCheckList);

	return (
		<div
			data-dialog-backdrop="register-dialog"
			data-dialog-backdrop-close="true"
			className="fixed top-0 left-o -inset-4 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
		>
			<div
				data-dialog="register-dialog"
				className="relative mx-auto flex w-full max-w-[32rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
			>
				{/* Main container */}
				<div className="flex flex-col gap-4 p-6">
					{/* Header */}
					<div className="flex flex-row justify-between">
						<h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
							Add recipe to grocery list
						</h4>
						<h4
							className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-pointer"
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
									<div key={Math.random()} className="w-full px-4">
										<input
											id={name}
											type="checkbox"
											name="bordered-checkbox"
											value="name"
											checked={itemData[index].checked}
											className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											onChange={() => boxChecked(name)}
										/>
										<label className="w-full py-4 ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
											{name}
										</label>
									</div>
								);
							})}
						</div>
					</div>
					<div className="flex justify-between px-4 mb-4">
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
