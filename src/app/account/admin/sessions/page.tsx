// Prisma
import TutorSessionsTable from '@/components/TutorSessionsTable'
import { prisma } from '@/lib/prisma'

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

	return response
}
