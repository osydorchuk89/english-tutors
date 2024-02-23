import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma/db";
import bcrypt from "bcrypt";

export const authOptions = {
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
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username,
                    },
                });
                if (!user) {
                    throw new Error("Provided credentials are invalid");
                }
                const passwordCorrect = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!passwordCorrect) {
                    throw new Error("Provided credentials are invalid");
                }
                return user;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login",
    },
    debug: process.env.NODE_ENV === "development",
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
