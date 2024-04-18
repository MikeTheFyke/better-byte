"use client";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { RecipeIngredient } from "../(models)/Recipe";

interface Props {
	ingredientData: RecipeIngredient;
	setIngredientData: React.Dispatch<
		React.SetStateAction<{
			name: string;
			quantity: string;
			unit: string;
		}>
	>;
	addIngredients: () => void;
}

const IngredientForm = ({
	ingredientData,
	setIngredientData,
	addIngredients = () => {},
}: Props) => {
	const handleIngredientChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;

		setIngredientData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<form className="w-[80%]">
			<div className="flex justify-start">
				<div>
					<label className="text-lg">Ingredient</label>
					<input
						id="name"
						name="name"
						type="text"
						onChange={handleIngredientChange}
						required={true}
						value={ingredientData.name}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
						placeholder="Ingredient name"
					/>
				</div>
				<div>
					<label className="text-lg">Quantity</label>
					<input
						id="quantity"
						name="quantity"
						type="text"
						onChange={handleIngredientChange}
						required={true}
						value={ingredientData.quantity}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
						placeholder="Quantity"
					/>
				</div>
				<div>
					<label className="text-lg">Unit</label>
					<input
						id="unit"
						name="unit"
						type="text"
						onChange={handleIngredientChange}
						required={true}
						value={ingredientData.unit}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
						placeholder="Quantity unit type"
					/>
				</div>
				<div
					className="w-[50px] h-[75px] flex justify-center place-items-center pt-[20px] hover:cursor-pointer"
					onClick={() => addIngredients()}
				>
					<div className="w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center place-items-center border border-white hover:bg-green-800">
						<FontAwesomeIcon icon={faPlus} className="text-2xl" />
					</div>
				</div>
				{/* <div className="w-[50px] h-[75px] flex justify-center place-items-center pt-[20px]">
					<div className="w-[40px] h-[40px] bg-red-400 rounded-full flex justify-center place-items-center border border-white hover:bg-red-600 hover:cursor-pointer">
						<FontAwesomeIcon icon={faMinus} className="text-2xl" />
					</div>
				</div> */}
			</div>
		</form>
	);
};

export default IngredientForm;
