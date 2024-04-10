"use client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
	setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

const RecipeDialog = ({ setOpenDialog }: Props) => {
	const handleChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleIngredientChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;

		setIngredientData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const addIngredients = () => {
		formData.ingredients.push(ingredientData);
		setShowIngredientForm(!showIngredientForm);
	};

	const removeIngredient = (index: number) => {
		if (index > -1) {
			formData.ingredients.splice(index, 1);
		}
	};

	const startingRecipeData = {
		title: "",
		description: "",
		ingredients: [{ name: "", quantity: "", unit: "" }],
		step: [""],
		image: "",
	};

	const startingIngredient = {
		name: "",
		quantity: "",
		unit: "",
	};

	const [formData, setFormData] = useState(startingRecipeData);
	const [ingredientData, setIngredientData] = useState(startingIngredient);
	const [showIngredientForm, setShowIngredientForm] = useState(false);

	console.log("FormData : ", formData);

	return (
		<div
			data-dialog-backdrop="sign-in-dialog"
			data-dialog-backdrop-close="true"
			className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
			// onClick={() => setOpenDialog(false)}
		>
			<div
				data-dialog="sign-in-dialog"
				className="relative mx-auto flex w-full max-w-[32rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
			>
				{/* Main container */}
				<div className="flex flex-col gap-4 p-6">
					{/* Header */}
					<div className="flex flex-row justify-between">
						<h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
							Create a new recipe
						</h4>
						<h4
							className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-pointer"
							onClick={() => setOpenDialog(false)}
						>
							X
						</h4>
					</div>
					{/* Dialog Content */}
					<h6 className="block -mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
						Recipe Name
					</h6>
					<div className="relative h-11 w-full min-w-[200px] mb-4">
						<input
							id="title"
							name="title"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.title}
							className="w-full h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Recipe name"
						/>
					</div>
					<h6 className="block -mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
						Recipe Description
					</h6>
					<div className="relative h-11 w-full min-w-[200px]">
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
					{formData.ingredients
						? formData.ingredients.map((ingredient, index) => {
								return (
									<div
										className="flex flex-row w-full justify-between"
										key={ingredient.name}
									>
										<div className="justify-start">
											<h6 className="block mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit cursor-pointer">
												{ingredient.quantity} {ingredient.unit}{" "}
												{ingredient.name}
											</h6>
										</div>
										<div
											className="justify-end"
											onClick={() => removeIngredient(index)}
										>
											<div className="w-[30px] h-[30px] bg-red-400 rounded-full flex justify-center place-items-center border border-white hover:bg-red-600 hover:cursor-pointer">
												<FontAwesomeIcon icon={faMinus} className="text-xl" />
											</div>
										</div>
									</div>
								);
						  })
						: null}
					{/* Sub content */}
					<div
						className="relative w-full min-w-[200px]"
						onClick={() => setShowIngredientForm(!showIngredientForm)}
					>
						<h6 className="block -mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit cursor-pointer">
							+ Add ingredient
						</h6>
					</div>
					{showIngredientForm ? (
						<>
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
							<div className="flex flex-row">
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
							</div>
						</>
					) : null}
					{/* End of sub content */}
				</div>
				{/* End of main container */}
				<div className="p-6 pt-0">
					<button
						className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeDialog;
