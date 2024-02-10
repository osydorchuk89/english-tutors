import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Username",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password",
                },
            },
            async authorize(credentials) {
                const user = {
                    username: "admin",
                    password: "password",
                };
                if (
                    credentials?.username === user.username &&
                    credentials?.password === user.password
                ) {
                    return user;
                } else {
                    throw new Error("Provided credentials are invalid");
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login",
    },
    debug: process.env.NODE_ENV === "development",
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
