import React, { Dispatch, SetStateAction } from "react";
import AddGroceryIngredientRow from "./AddGroceryIngredientRow";
import { Ingredient, getIngredientByName } from "../(models)/Ingredients";
import AddGroceryIngredientGrid from "./AddGroceryIngredientGrid";

interface Props {
	names: string[];
	addDialogOpen: boolean;
	setAddDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const AddGroceryDialog = ({
	names,
	addDialogOpen,
	setAddDialogOpen,
}: Props) => {
	const ingredientsCheckList = names.map((name) => {
		return {
			item: name,
			checked: true,
		};
	});

	return (
		<div
			data-dialog-backdrop="register-dialog"
			data-dialog-backdrop-close="true"
			className="fixed top-0 left-o -inset-4 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
		>
			<div
				data-dialog="register-dialog"
				className="relative mx-auto flex w-full max-w-[32rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[558px]"
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
							onClick={() => setAddDialogOpen(false)}
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
				<div className="striped px-4">
					<div className="border border-slate-200 rounded py-4">
						{names.map((name, index) => {
							return (
								<AddGroceryIngredientRow
									key={Math.random()}
									name={name}
									index={index}
									ingredientsCheckList={ingredientsCheckList}
								/>
							);
						})}
					</div>
				</div>
				{/* End of main container */}
			</div>
		</div>
	);
};

export default AddGroceryDialog;
