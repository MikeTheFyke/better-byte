"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
	registerDialogOpen: boolean;
	setRegisterDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export const RegisterForm = ({
	registerDialogOpen,
	setRegisterDialogOpen,
}: Props) => {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setErrorMessage("");
		const res = await fetch("/api/Users", {
			method: "POST",
			body: JSON.stringify({ formData }),
			"content-type": "applciation/json",
		});

		if (!res.ok) {
			const response = await res.json();
			setErrorMessage(response.message);
		} else {
			router.refresh();
			router.push("/");
		}
	};

	const startingRegistrationData = {
		username: "",
		email: "",
		password: "",
	};

	const [formData, setFormData] = useState(startingRegistrationData);

	return (
		<form onSubmit={handleSubmit} method="post">
			<div className="flex flex-col gap-4 p-6">
				<div className="w-full inline-block">
					<div className="mb-4">
						<div>
							<label className="text-lg">Username</label>
							<input
								id="username"
								name="username"
								type="text"
								onChange={handleChange}
								required={true}
								value={formData.username}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mb-6"
								placeholder="Username"
							/>
						</div>
						<div>
							<label className="text-lg">Email address</label>
							<input
								id="email"
								name="email"
								type="email"
								onChange={handleChange}
								required={true}
								value={formData.email}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mb-6"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label className="text-lg">Password</label>
							<input
								id="password"
								name="password"
								type="password"
								onChange={handleChange}
								required={true}
								value={formData.password}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mb-10"
								placeholder="Password"
							/>
						</div>
						<div className="mt-10 w-full flex flex-row justify-between">
							<input
								className="block select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
								type="button"
								value="Cancel"
								onClick={() => setRegisterDialogOpen(false)}
							/>
							<input
								type="submit"
								value="Register"
								className="block select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center font-sans text-xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
