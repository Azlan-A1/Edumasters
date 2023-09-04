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

				return {
					id: user.id,
					name: user.name,
					email: user.email,
					randomKey: 'testing-random-key',
				}
			},
		}),
	],
	callbacks: {
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
