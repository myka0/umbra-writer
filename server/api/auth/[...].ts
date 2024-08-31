import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
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
    session: async ({ session, user, token }) => {
      const me = await getMe(session)

      if (session.user) {
        session.user.id = user.id
      }

      ;(session as any).subscribed = me?.subscribed
      return Promise.resolve(session)
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
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ]
})
