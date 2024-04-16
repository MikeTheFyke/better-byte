import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt";

export const options = {
	providers: [
		GitHubProvider({
			profile(profile) {
				let userRole = "Github User";
				if (profile?.email == "mikefyke@hotmail.com") {
					userRole = "admin";
				}

				return {
					...profile,
					role: userRole,
				};
			},
			clientId: process.env.GitHub_ID,
			clientSecret: process.env.GitHub_Secret,
		}),
		GoogleProvider({
			profile(profile) {
				let userRole = "Google User";

				return {
					...profile,
					id: profile.sub,
					role: userRole,
				};
			},
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_Secret,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "Enter your username",
				},
				email: {
					label: "Email",
					type: "text",
					placeholder: "Enter your email",
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "Enter your password",
				},
			},
			async authorize(credentials) {
				try {
					const foundUser = await User.findOne({ email: credentials.email })
						.lean()
						.exec();

					if (foundUser) {
						console.log("User exists");
						const match = await bcrypt.compare(
							credentials.password,
							foundUser.password
						);
						if (match) {
							console.log("Good pass");
							delete foundUser.password;
							foundUser["name"] = credentials.username;
							if (credentials.email === "mikefyke@hotmail.com") {
								foundUser["role"] = "admin";
							} else {
								foundUser["role"] = "Unverified email";
							}
							return foundUser;
						}
					}
				} catch (error) {
					console.log(error);
				}
				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.role = user.role;
			return token;
		},
		async session({ session, token }) {
			if (session?.user) session.user.role = token.role;
			return session;
		},
	},
};
