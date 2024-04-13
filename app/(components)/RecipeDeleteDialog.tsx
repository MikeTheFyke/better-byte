"use client";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
	recipeId: string;
	recipeName: string;
	setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
}

const RecipeDeleteDialog = ({
	recipeId,
	recipeName,
	setOpenDeleteDialog,
}: Props) => {
	const router = useRouter();

	const deleteRecipe = async () => {
		const res = await fetch(`http://localhost:3000/api/Recipes/${recipeId}`, {
			method: "DELETE",
		});
		if (res.ok) {
			setOpenDeleteDialog(false);
			router.refresh();
		} else {
			throw new Error("Failed to update Recipe.");
		}
	};

	return (
		<div
			data-dialog-backdrop="recipe-dialog"
			data-dialog-backdrop-close="true"
			className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
			// onClick={() => setOpenDeleteDialog(false)}
		>
			<div
				data-dialog="recipe-dialog"
				className="relative mx-auto flex w-full max-w-[32rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[20%]"
			>
				{/* Main container */}
				<div className="flex flex-col gap-4 p-6">
					{/* Header */}
					<div className="flex flex-row justify-between">
						<h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
							Delete your recipe
						</h4>
						<h4
							className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-pointer"
							onClick={() => setOpenDeleteDialog(false)}
						>
							X
						</h4>
					</div>
					{/* Dialog Content */}

					<div className="w-full inline-block">
						<h6 className="font-sans text-2xl antialiased leading-relaxed tracking-normal text-inherit">
							Are you sure you want to delete your
							<h6 className="font-sans text-2xl antialiased font-bold leading-relaxed tracking-normal text-inherit flex flex-row justify-start">
								{recipeName}
								<h6 className="font-sans text-2xl antialiased font-normal leading-relaxed tracking-normal text-inherit ml-2">
									recipe?
								</h6>
							</h6>
						</h6>
					</div>
				</div>
				{/* End of main container */}
				<div className="p-6 pt-0 absolute bottom-0 w-full flex flex-row justify-between">
					<button
						className="block select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
						onClick={() => setOpenDeleteDialog(false)}
					>
						Cancel
					</button>
					<button
						className="block select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
						onClick={() => deleteRecipe()}
					>
						Delete recipe
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeDeleteDialog;
