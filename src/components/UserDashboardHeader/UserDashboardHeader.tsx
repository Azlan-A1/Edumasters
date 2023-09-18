'use client'

// Types
import { Role } from '@/types/auth.types'

// Next
import Link from 'next/link'

// Next Auth
import { signOut, useSession } from 'next-auth/react'

// Components
import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'

interface UserDashboardHeaderProps {
	title: string
	subtitle: string
}

const UserDashboardHeader = (props: UserDashboardHeaderProps) => {
	const { data: session } = useSession()

	return (
		<PageHeader
			title={props.title}
			subtitle={props.subtitle}
			actions={
				<>
					{session?.user?.roles?.includes(Role['TUTOR']) && (
						<Link href='/account/tutor'>
							<Button>Tutor Dashboard</Button>
						</Link>
					)}
					{session?.user?.roles?.includes(Role['ADMIN']) && (
						<Link href='/account/admin'>
							<Button>Admin Dashboard</Button>
						</Link>
					)}
					<Button variant='tertiary' onClick={() => signOut()}>
						Logout
					</Button>
				</>
			}
		/>
	)
}

export default UserDashboardHeader
