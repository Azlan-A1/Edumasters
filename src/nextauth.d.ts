// Next Auth
import { DefaultSession } from 'next-auth'

// Types
import { Role } from './types/auth.types'

declare module 'next-auth' {
	interface User {
		id: string
		name: string
		email: string
		roles: Role[]
	}

	interface Session extends DefaultSession {
		user?: User
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: string
		name: string
		email: string
		roles: Role[]
	}
}
