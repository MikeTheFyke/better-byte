import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { RegisterForm } from "./RegisterForm";

interface Props {
	registerDialogOpen: boolean;
	setRegisterDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const RegisterDialog = ({
	registerDialogOpen,
	setRegisterDialogOpen,
}: Props) => {
	const router = useRouter();

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
				<RegisterForm
					registerDialogOpen={registerDialogOpen}
					setRegisterDialogOpen={setRegisterDialogOpen}
				/>
			</div>
		</div>
	);
};

export default RegisterDialog;
