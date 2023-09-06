// Types
import type { NextAuthOptions } from 'next-auth'

// Netx Auth Providers
import CredentialsProvider from 'next-auth/providers/credentials'

// Prisma
import { prisma } from './prisma'
import { compare } from 'bcryptjs'

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
					placeholder: 'Please enter your email',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'Please enter your password',
				},
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				})

				if (!user) return null

				if (!(await compare(credentials.password, user.password))) return null

				const { password, ...rest } = user

				return rest as any
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
				token.name = user.name
				token.email = user.email
				token.roles = user.roles
			}

			return token
		},
		async session({ session, token }) {
			if (token && session.user) {
				session.user.id = token.id
				session.user.name = token.name
				session.user.email = token.email
				session.user.roles = token.roles
			}

			return session
		},
		async redirect(params: { url: string }) {
			const { url } = params

			if (!url.startsWith('http')) return url

			const callbackUrl = new URL(url).searchParams.get('callbackUrl')

			if (!callbackUrl) return url

			return new URL(callbackUrl as string).pathname
		},
	},
	pages: {
		signIn: '/login',
	},
}
