'use client'

// Next Auth
import { SessionProvider } from 'next-auth/react'

interface RootProviderProps {
	children: React.ReactNode
}

const RootProvider = (props: RootProviderProps) => {
	return <SessionProvider>{props.children}</SessionProvider>
}

export default RootProvider
