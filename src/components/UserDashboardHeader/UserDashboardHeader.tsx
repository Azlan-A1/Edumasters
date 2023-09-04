'use client'

// Next Auth
import { signOut } from 'next-auth/react'

// Components
import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'

interface UserDashboardHeaderProps {
	subtitle: string
}

const UserDashboardHeader = (props: UserDashboardHeaderProps) => {
	return (
		<PageHeader
			title='Welcome to Edumasters'
			subtitle={props.subtitle}
			actions={
				<>
					<Button onClick={() => signOut()}>Logout</Button>
				</>
			}
		/>
	)
}

export default UserDashboardHeader
