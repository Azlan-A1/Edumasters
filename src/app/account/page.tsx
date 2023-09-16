// Next
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

// Next Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Prisma
import { prisma } from '@/lib/prisma'

// Components
import UserDashboardHeader from '@/components/UserDashboardHeader'
import {
	CompletedSessionsWidget,
	UpcomingSessionWidget,
	UserSessionsTable,
} from '@/components/UserDashboard'

export default async function AccountPage() {
	const session = await getServerSession(authOptions)

	if (!session?.user) {
		redirect('/login')
	}

	const tutorSessions = await getTutorSessions(session.user.id)

	return (
		<div>
			<UserDashboardHeader
				title={`Hello ${session.user.name} 👋🏼`}
				subtitle='Welcome to your account dashboard'
			/>

			<div className='space-y-12'>
				<div className='container px-4'>
					<div className='grid grid-cols-3 gap-8'>
						<UpcomingSessionWidget sessions={tutorSessions} />
						<CompletedSessionsWidget sessions={tutorSessions} />
					</div>
				</div>

				<div className='container px-4'>
					<UserSessionsTable sessions={tutorSessions} />
				</div>
			</div>
		</div>
	)
}

async function getTutorSessions(userId: string) {
	const sessions = await prisma.tutorSession.findMany({
		where: {
			studentId: userId,
		},
		include: {
			tutor: true,
		},
		orderBy: {
			date: 'asc',
		},
	})

	return sessions
}
