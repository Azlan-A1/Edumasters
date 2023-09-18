// Types
// import type { TutorSession } from '@/types/tutor-session.types'

// Prisma
import type { TutorSession } from '@prisma/client'

// Packages
import dayjs from 'dayjs'

interface UserSessionsTableProps {
	sessions: TutorSession[]
}

const UserSessionsTable = (props: UserSessionsTableProps) => {
	return (
		<table className='table-fixed w-full'>
			<thead>
				<tr>
					<td>
						<p>Session Type</p>
					</td>
					<td>
						<p>Tutor Name</p>
					</td>
					<td>
						<p>Date & Time</p>
					</td>
				</tr>
			</thead>
			<tbody>
				{props.sessions?.map((session) => (
					<tr key={session.id}>
						<td>
							<p>{session.type}</p>
						</td>
						<td>
							<p>{session?.tutorId ? <>{session.tutor.name}</> : ''}</p>
						</td>
						<td>
							<p>{dayjs(session?.date).format('MMMM D, YYYY [at] h:mm a')}</p>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default UserSessionsTable
