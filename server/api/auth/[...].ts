import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { exampleContent } from '../exampleContent'
import bcrypt from 'bcrypt'

const runtimeConfig = useRuntimeConfig()
const prisma = new PrismaClient()

async function getMe(session: any) {
  return await $fetch('/api/me', {
    method: 'POST',
    query: {
      API_ROUTE_SECRET: runtimeConfig.API_ROUTE_SECRET,
    },
    body: {
      email: session?.user?.email,
    },
  })
}

export default NuxtAuthHandler({
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session }) => {
      const me = await getMe(session)

      ;(session as any).user.id = me?.userId
      ;(session as any).subscribed = me?.subscribed
      return Promise.resolve(session)
    },
    async redirect({ url }) {
      if (url === runtimeConfig.BASE_URL + '/auth/signin') {
        return Promise.resolve('/files')
      }
      return Promise.resolve(url)
    },
  },
  events: {
    createUser: async ({ user }) => {
      // Create an example document for new users
      try {
        const payload = {
          title: 'Example Document',
          content: exampleContent,
          userId: user.id,
        }

        await $fetch('/api/documents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: payload,
        })

      } catch (error) {
        console.error('Failed to create example document:', error)
      }
    },
  },
  secret: runtimeConfig.API_ENCRYPTION_SECRET,
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: runtimeConfig.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
    }),

    // @ts-expect-error
    GoogleProvider.default({
      clientId: runtimeConfig.GOOGLE_CLIENT_ID,
      clientSecret: runtimeConfig.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),

    // @ts-expect-error
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        })

        if (!user) {
          throw new Error('No user found')
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValid) {
          throw new Error('Invalid password')
        }

        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
})
