// Types
import type { TutorSession } from '@/types/tutor-session.types'

// Prisma
import { prisma } from '@/lib/prisma'

// Components
import TutorSessionsTable from '@/components/TutorSessionsTable'

export default async function AdminDashboardSessions() {
	const data = await getTutorSessions()

	return (
		<div className='space-y-4'>
			<p className='border rounded p-4'>
				Session Management. Assign, edit or delete sessions.
			</p>
			<TutorSessionsTable data={data} />
		</div>
	)
}

async function getTutorSessions() {
	const response = await prisma.tutorSession.findMany({
		include: {
			student: true,
		},
	})

	return response as TutorSession[]
}
