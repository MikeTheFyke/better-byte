import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
	registerDialogOpen: boolean;
	setRegisterDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const RegisterDialog = ({
	registerDialogOpen,
	setRegisterDialogOpen,
}: Props) => {
	const router = useRouter();

	// const deleteRecipe = async () => {
	// 	const res = await fetch(`http://localhost:3000/api/Recipes/${recipeId}`, {
	// 		method: "DELETE",
	// 	});
	// 	if (res.ok) {
	// 		setOpenDeleteDialog(false);
	// 		router.refresh();
	// 	} else {
	// 		throw new Error("Failed to update Recipe.");
	// 	}
	// };

	return (
		<div
			data-dialog-backdrop="register-dialog"
			data-dialog-backdrop-close="true"
			className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
		>
			<div
				data-dialog="register-dialog"
				className="relative mx-auto flex w-full max-w-[32rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[20%]"
			>
				{/* Main container */}
				<div className="flex flex-col gap-4 p-6">
					{/* Header */}
					<div className="flex flex-row justify-between">
						<h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
							Register your account
						</h4>
						<h4
							className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-pointer"
							onClick={() => setRegisterDialogOpen(false)}
						>
							X
						</h4>
					</div>
					{/* Dialog Content */}

					<div className="w-full inline-block">
						<h6 className="font-sans text-2xl antialiased leading-relaxed tracking-normal text-inherit">
							Let's get you started!
						</h6>
					</div>
				</div>
				{/* End of main container */}
				<div className="p-6 pt-0 absolute bottom-0 w-full flex flex-row justify-between">
					<button
						className="block select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
						onClick={() => setRegisterDialogOpen(false)}
					>
						Cancel
					</button>
					<button
						className="block select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
						// onClick={() => deleteRecipe()}
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default RegisterDialog;
