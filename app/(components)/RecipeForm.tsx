"use client";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RecipeForm = () => {
	const handleChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const startingRecipeData = {
		title: "",
		description: "",
		ingredients: [],
		image: "",
	};

	const [formData, setFormData] = useState(startingRecipeData);

	return (
		<div className="flex justify-center">
			<form className="w-[80%]">
				<div className="flex text-white text-center justify-center text-2xl pt-5 mb-4">
					Create a new recipe
				</div>
				<div className="grid grid-cols-2 gap-2 mb-4">
					<div>
						<label className="text-lg">Title</label>
						<input
							id="title"
							name="title"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.title}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Recipe name"
						/>
					</div>
					<div>
						<label className="text-lg">Description</label>
						<input
							id="description"
							name="description"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.description}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
							placeholder="Recipe desciption"
						/>
					</div>
				</div>
				<div className="flex justify-start">
					<div>
						<label className="text-lg">Ingredient</label>
						<input
							id="ingredient"
							name="ingredient"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.ingredients}
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
							onChange={handleChange}
							required={true}
							value={formData.ingredients}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
							placeholder="Quantity"
						/>
					</div>
					<div>
						<label className="text-lg">Unit</label>
						<input
							id="quantityUnit"
							name="quantityUnit"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.ingredients}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
							placeholder="Quantity unit type"
						/>
					</div>
					<div className="w-[50px] h-[75px] flex justify-center place-items-center pt-[20px]">
						<div className="w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center place-items-center border border-white hover:bg-green-800 hover:cursor-pointer">
							<FontAwesomeIcon icon={faPlus} className="text-2xl" />
						</div>
					</div>
					<div className="w-[50px] h-[75px] flex justify-center place-items-center pt-[20px]">
						<div className="w-[40px] h-[40px] bg-red-400 rounded-full flex justify-center place-items-center border border-white hover:bg-red-600 hover:cursor-pointer">
							<FontAwesomeIcon icon={faMinus} className="text-2xl" />
						</div>
					</div>
				</div>
				<div className="flex justify-end">
					<div className="flex justify-center place-items-center mr-4">
						No image selected
					</div>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Upload an image
					</button>
				</div>
			</form>
		</div>
	);
};

export default RecipeForm;
