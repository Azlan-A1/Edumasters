'use client'

// Types
import { Role } from '@/types/auth.types'

// Next Auth
import { signOut, useSession } from 'next-auth/react'

// Components
import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'

interface UserDashboardHeaderProps {
	subtitle: string
}

const UserDashboardHeader = (props: UserDashboardHeaderProps) => {
	const { data: session } = useSession()

	return (
		<PageHeader
			title='Welcome to Edumasters'
			// subtitle={props.subtitle}
			subtitle={JSON.stringify(session)}
			actions={
				<>
					{session?.user?.roles?.includes(Role['admin']) && (
						<Button>Tutor Dashboard</Button>
					)}
					{session?.user?.roles?.includes(Role['admin']) && (
						<Button>Admin Dashboard</Button>
					)}
					<Button onClick={() => signOut()}>Logout</Button>
				</>
			}
		/>
	)
}

export default UserDashboardHeader
