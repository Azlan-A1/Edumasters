// Next Auth
import NextAuth from 'next-auth/next'

// Lib
import { authOptions } from '@/lib/auth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
