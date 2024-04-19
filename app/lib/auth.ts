import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req: any) {
                console.log(credentials);

                // your sign in check with db here 

                // return null if user not found to show error on the webpage

                return {
                    id: 1,
                    name: "saurav",
                    email: "saurav@gmail.com"
                };
            },

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ token, user }: any) => {
            console.log(token);
            token.userId = token.sub
            return token;
        },
        session: async ({ session, token, user }: any) => {

            console.log(session)
            session.user.id = token.sub
            return session
        }
    },
    pages: {
        signIn: "/signin",
    }
}