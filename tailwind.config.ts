import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				smd: "950px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				nav: "#18222f",
				page: "#f1f5f9",
				card: "#47566a",
				"card-hover": "#4f5e74",
				"default-text": "#f1f3f5",
				"main-text": "#0f172a",
				"blue-accent": "#0084d4",
				"blue-accent-hover": "#009fff",
			},
		},
	},
	plugins: [],
};
export default config;
