"use client";
import {
	faFileArrowUp,
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Ingredient } from "../(models)/Recipe";

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

	const handleStepChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;

		setStepData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const addIngredients = () => {
		if (formData.ingredients) formData.ingredients.push(ingredientData);
		setShowIngredientForm(!showIngredientForm);
	};

	const removeIngredient = (index: number) => {
		if (index > -1) {
			formData.ingredients.splice(index, 1);
		}
		setFormData(formData);
	};

	const clearIngredientForm = () => {
		setIngredientData({ name: "", quantity: "", unit: "" });
		setShowIngredientForm(!showIngredientForm);
	};

	const addStep = () => {
		if (formData.steps) formData.steps.push(stepData.description);
		setShowStepForm(!showStepForm);
	};

	const removeStep = (index: number) => {
		if (index > -1) {
			formData.steps.splice(index, 1);
		}
		setFormData(formData);
	};

	const clearStepsForm = () => {
		setStepData({ description: "" });
		setShowStepForm(!showStepForm);
	};

	const startingRecipeData = {
		title: "",
		description: "",
		ingredients: [{ name: "", quantity: "", unit: "" }],
		steps: [""],
		image: { name: "", file: "" },
	};

	const startingIngredient = {
		name: "",
		quantity: "",
		unit: "",
	};

	const startingStep = { description: "" };

	const startingImage = { name: "", file: "" };

	const [formData, setFormData] = useState(startingRecipeData);
	const [ingredientData, setIngredientData] = useState(startingIngredient);
	const [stepData, setStepData] = useState(startingStep);
	const [showIngredientForm, setShowIngredientForm] = useState(false);
	const [showStepForm, setShowStepForm] = useState(false);

	useEffect(() => {}, [formData]);

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
					<label className="text-lg">Ingredients</label>
					{formData.ingredients
						? formData.ingredients.map((ingredient, index) => {
								if (ingredient.name !== "") {
									return (
										<>
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
													<div className="w-[40px] h-[40px] bg-red-400 rounded-full flex justify-center place-items-center border border-white hover:bg-red-600 hover:cursor-pointer">
														<FontAwesomeIcon
															icon={faMinus}
															className="text-xl"
														/>
													</div>
												</div>
											</div>
										</>
									);
								}
						  })
						: null}
					{/* Sub content */}
					{!showIngredientForm ? (
						<div
							className="relative w-full min-w-[200px]"
							onClick={() => setShowIngredientForm(!showIngredientForm)}
						>
							<h6 className="block -mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit cursor-pointer">
								+ Add ingredient
							</h6>
						</div>
					) : null}
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
								<div className="h-[75px] flex justify-center place-items-center pt-[20px] hover:cursor-pointer">
									<div
										className="w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center place-items-center border border-white hover:bg-green-800"
										onClick={() => addIngredients()}
									>
										<FontAwesomeIcon icon={faPlus} className="text-2xl" />
									</div>
									<h6
										className="ml-4 font-sans text-base antialiased font-semibold  tracking-normal text-inherit cursor-pointer"
										onClick={() => clearIngredientForm()}
									>
										Cancel
									</h6>
								</div>
							</div>
						</>
					) : null}

					<div>
						{formData.steps
							? formData.steps.map((step, index) => {
									<label className="text-lg">Recipe steps</label>;
									if (step !== "") {
										return (
											<div
												className="flex flex-row w-full justify-between"
												key={index}
											>
												<div className="justify-start">
													<h6 className="block mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit cursor-pointer">
														{index}. {step}
													</h6>
												</div>
												<div
													className="flex justify-center place-items-center"
													onClick={() => removeStep(index)}
												>
													<div className="w-[40px] h-[40px] bg-red-400 rounded-full flex justify-center place-items-center border border-white hover:bg-red-600 hover:cursor-pointer">
														<FontAwesomeIcon
															icon={faMinus}
															className="text-xl"
														/>
													</div>
												</div>
											</div>
										);
									}
							  })
							: null}
					</div>

					{!showStepForm ? (
						<div
							className="relative w-full min-w-[200px]"
							onClick={() => setShowStepForm(!showStepForm)}
						>
							<h6 className="block -mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit cursor-pointer">
								+ Add recipe step
							</h6>
						</div>
					) : null}

					<div>
						{showStepForm ? (
							<div>
								<textarea
									id="description"
									name="description"
									onChange={handleStepChange}
									required={true}
									value={stepData.description}
									rows={2}
									className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
									placeholder="Recipe step"
								/>
								<div className="flex justify-end">
									<div
										className="w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center place-items-center border border-white hover:bg-green-800 cursor-pointer"
										onClick={() => addStep()}
									>
										<FontAwesomeIcon icon={faPlus} className="text-2xl" />
									</div>
									<div className="flex justify-center place-items-center">
										<h6
											className="ml-4 font-sans text-base antialiased font-semibold  tracking-normal text-inherit cursor-pointer"
											onClick={() => clearStepsForm()}
										>
											Cancel
										</h6>
									</div>
								</div>
							</div>
						) : null}
						<div className="flex flex-row justify-end w-full">
							{formData.image ? (
								<div className="flex justify-center place-items-center">
									<h6 className="mr-4 font-sans text-base antialiased font-semibold  tracking-normal text-inherit cursor-pointer">
										formData.image.name
									</h6>
								</div>
							) : (
								<div className="flex justify-center place-items-center">
									<h6 className="mr-4 font-sans text-base antialiased font-semibold  tracking-normal text-inherit cursor-pointer">
										No image selected
									</h6>
								</div>
							)}
							<button
								type="submit"
								className="text-white bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 flex justify-end"
							>
								<FontAwesomeIcon
									icon={faFileArrowUp}
									className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-4"
								/>
								Upload
							</button>
						</div>
					</div>
					{/* End of sub content */}
				</div>
				{/* End of main container */}
				<div className="p-6 pt-0">
					<button
						className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						Create recipe
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeDialog;
