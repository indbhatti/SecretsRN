import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import connectMongo from '../../../../middleware/mongooseconnect'
import User from '../../../../models/user'

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
      name: "cred",
      credentials: {
        email: { label: "email", placeholder: "enter email" },
        password: { label: "password", placeholder: "enter password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null
        }
        // const user = await getUser(credentials)
        const user = { id: "1", email: "user@123.com", password: "1234" }
        if (user?.password === credentials.password) {
          return user;
        }
        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/register' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
}

// const getUser = async (credentials: { email: string, password: string }) => {
//   try {
//     console.log('CONNECTING TO MONGO');
//     const connect = await connectMongo();
//     console.log('CONNECTED TO MONGO');
//     const user = await User.find({ username: credentials.email });
//     return user;
//   } catch (error) {
//     console.log(error)
//   }
// }
