"use client";
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

	const addIngredients = () => {
		formData.ingredients.push(ingredientData);
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

	console.log("FormData : ", formData);

	return (
		<div
			data-dialog-backdrop="sign-in-dialog"
			data-dialog-backdrop-close="true"
			className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
			onClick={() => setOpenDialog(false)}
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
					{/* Sub content */}
					<div className="-ml-2.5 -mt-3">
						<div className="inline-flex items-center">
							<label
								className="relative flex items-center p-3 rounded-full cursor-pointer"
								htmlFor="remember"
							>
								<input
									type="checkbox"
									className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
									id="remember"
								/>
								<span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-3.5 w-3.5"
										viewBox="0 0 20 20"
										fill="currentColor"
										stroke="currentColor"
										strokeWidth="1"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
								</span>
							</label>
							<label
								className="mt-px font-light text-gray-700 cursor-pointer select-none"
								htmlFor="remember"
							>
								Remember Me
							</label>
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
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeDialog;
