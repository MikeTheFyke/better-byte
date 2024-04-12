"use client";
import {
	faFileArrowUp,
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
	setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

const RecipeDialog = ({ setOpenDialog }: Props) => {
	const router = useRouter();

	const startingRecipeData = {
		title: "",
		description: "",
		servings: 1,
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
	const [imageData, setImageData] = useState(startingImage);
	const [showIngredientForm, setShowIngredientForm] = useState(false);
	const [showStepForm, setShowStepForm] = useState(false);
	const [file, setFile] = useState<File>();

	useEffect(() => {}, [formData]);

	const onImageSubmit = () => {
		const name = "image";
		const button = document.getElementById("imageButton");
		const input = document.getElementById("getImage") as HTMLInputElement;

		button!.onclick = () => {
			input.click();
		};

		input?.addEventListener("change", (event) => {
			event.preventDefault(), saveImage(event);
		});

		const saveImage = async (event: Event) => {
			const myFiles = input.files![0];
			const formData = new FormData();
			const reader = new FileReader();

			reader.readAsDataURL(myFiles);

			reader.onload = function (e) {
				if (reader.result) {
					const data = reader.result;
					setImageData({
						name: input.files![0].name,
						file: data.toString() as string,
					});

					setFormData((prevState) => ({
						...prevState,
						[name]: imageData,
					}));
				}
			};
			console.log("Image Formdata : ", formData);
		};
	};

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
		clearIngredientForm();
		formData.ingredients.map((ingredient, index) => {
			if (ingredient.name === "") {
				formData.ingredients.splice(index, 1);
			}
		});
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
		clearStepsForm();
		formData.steps.map((step, index) => {
			if (step === "") {
				formData.steps.splice(index, 1);
			}
		});
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

	const createRecipe = async (e: any) => {
		e.preventDefault();

		const res = await fetch("/api/Recipes", {
			method: "POST",
			body: JSON.stringify({ formData }),
			"content-type": "application/json",
		});
		if (!res.ok) {
			throw new Error("Failed to create Recipe.");
		}

		router.refresh();
		setOpenDialog(false);
	};

	return (
		<div
			data-dialog-backdrop="recipe-dialog"
			data-dialog-backdrop-close="true"
			className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
			// onClick={() => setOpenDialog(false)}
		>
			<div
				data-dialog="recipe-dialog"
				className="relative mx-auto flex w-full max-w-[32rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[80%]"
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
					<div className="flex flex-row justify-between">
						<div className="w-[100%] mr-4">
							<h6 className="block font-sans text-base antialiased font-bold leading-relaxed tracking-normal text-inherit">
								Recipe Name
							</h6>
							<div className="relative h-11 w-full min-w-[200px]">
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
						</div>
						<div>
							<h6 className="block font-sans text-base antialiased font-bold leading-relaxed tracking-normal text-inherit">
								# of servings
							</h6>
							<div className="relative h-11 w-full min-w-[100px]">
								<input
									id="servings"
									name="servings"
									type="number"
									onChange={handleChange}
									required={true}
									value={formData.servings}
									className="w-full h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>
						</div>
					</div>
					<h6 className="block font-sans text-base antialiased font-bold leading-relaxed tracking-normal text-inherit">
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
					<div className="mt-2">
						<h6 className="block font-sans text-base antialiased font-bold leading-relaxed tracking-normal text-inherit mb-4">
							Recipe Image
						</h6>
						<form
							encType="multipart/form-data"
							className="flex flex-row justify-between w-full"
							id="imageForm"
						>
							<div className="flex flex-row">
								<button
									type="button"
									value="Upload"
									id="imageButton"
									onClick={() => onImageSubmit()}
									className="h-[40px] text-white bg-gradient-to-tr from-gray-900 to-gray-800 focus:ring-4 focus:outline-none font-medium uppercase rounded-lg text-sm px-4 py-2 flex justify-center place-items-center mr-4"
								>
									<FontAwesomeIcon
										icon={faFileArrowUp}
										className="w-4 h-4 text-white mr-4 -mt-0.5"
									/>
									Upload
								</button>
								<input
									type="file"
									name="file"
									id="getImage"
									className="hidden"
									accept="image/*"
								/>
								{imageData?.name !== "" ? (
									<div className="flex justify-center place-items-center">
										<h6 className="font-sans text-base antialiased font-semibold  tracking-normal text-inherit cursor-pointer">
											{imageData?.name}
										</h6>
									</div>
								) : (
									<div className="flex justify-center place-items-center">
										<h6 className="font-sans text-base antialiased font-semibold  tracking-normal text-inherit cursor-pointer">
											No image selected
										</h6>
									</div>
								)}
							</div>
						</form>
					</div>
					<label className="text-lg font-bold">Ingredients</label>
					{formData.ingredients
						? formData.ingredients.map((ingredient, index) => {
								if (ingredient.name !== "") {
									return (
										<div
											className="flex flex-row w-full justify-between"
											key={ingredient.name}
										>
											<div className="justify-start">
												<h6 className="block mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
													{ingredient.quantity} {ingredient.unit}{" "}
													{ingredient.name}
												</h6>
											</div>
											<div
												className="justify-end"
												onClick={() => removeIngredient(index)}
											>
												<h6 className="block ml-4 font-sans text-base antialiased font-semibold  tracking-normal text-inherit cursor-pointer">
													Remove
												</h6>
											</div>
										</div>
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
							<h6 className="block -mb-2 font-sans text-base antialiased font-bold leading-relaxed tracking-normal text-inherit cursor-pointer">
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
													<h6 className="block mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
														{index + 1}. {step}
													</h6>
												</div>
												<div
													className="justify-end"
													onClick={() => removeStep(index)}
												>
													<h6 className="block ml-4 font-sans text-base antialiased font-semibold  tracking-normal text-inherit cursor-pointer">
														Remove
													</h6>
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
							<h6 className="block -mb-2 font-sans text-base antialiased font-bold leading-relaxed tracking-normal text-inherit cursor-pointer">
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
					</div>
					{/* End of sub content */}
				</div>
				{/* End of main container */}
				<div className="p-6 pt-0 absolute bottom-0 w-full">
					<button
						className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
						onClick={(e) => createRecipe(e)}
					>
						Create recipe
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeDialog;
