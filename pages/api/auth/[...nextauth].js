import NextAuth from "next-auth/next";
import CredentialProvider from 'next-auth/providers/credentials'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default NextAuth({
    providers: [
        CredentialProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'Email', type: 'email', placeholder: 'jon' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials) => {
                //database lookup
                const users = await prisma.User.findFirst({
                    where: {
                        email: credentials.email
                    }
                })

                if (credentials.email === users.email && credentials.password === users.password) {

                    return users

                }
                //login failed
                return null
            }
        })
    ],
    pages: {
        error: '/login',
        signIn: '/login'
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id
                token.name = user.firstname
                token.image = user.image
            }

            return token

        },
        session: ({ token, session }) => {

            if (token) {
                session.id = token.id
                session.name = token.name
                session.image = token.image
            }

            return session
        }
    },
    secret: 'test',
    jwt: {
        secret: 'test',
        encryption: true
    }
})