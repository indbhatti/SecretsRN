import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import connectMongo from '../../../../middleware/mongooseconnect'
import UserMongo from '../../../../models/user'
import { compare } from 'bcryptjs'
import { User } from 'next-auth'

export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID as string,
      clientSecret: process.env.FACEBOOK_APP_SECRET as string
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email@mail.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (
        credentials: Record<string, string> | undefined
      ) => {
        try {
          if (!credentials) {
            return null
          }
          const db = await connectMongo(); // Make sure connectMongo returns a database connection
          const user = await UserMongo.findOne({ username: credentials.email }); // Use findOne instead of find

          if (!user) {
            return null
          }

          const checkPassword = await compare(credentials.password, user.password); // Correct the typo "passowrd" to "password"

          if (!checkPassword) {
            return null
          }

          const userToSend: User = {
            id: user._id,
            email: user.username
          }
          return userToSend;
        } catch (error) {
          return null
        }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/register' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
}

