// Types
import type { TutorSession } from '@/types/tutor-session.types'

// Styles
import styles from './TutorSessionsTable.module.scss'

// Packages
import dayjs from 'dayjs'

interface TutorSessionsTableProps {
	data: Array<TutorSession>
}

const TutorSessionsTable = (props: TutorSessionsTableProps) => {
	const sessions = props.data.map((session) => {
		return (
			<tr>
				<td className={styles.user_details}>
					<span className={styles.user_name}>{session.student.name}</span>
					<span className={styles.user_email}>{session.student.email}</span>
				</td>
				<td>
					{session.tutor ? (
						session.tutor.name
					) : (
						<span className={styles.unassigned}>
							<button>Assign a Tutor</button>
						</span>
					)}
				</td>
				<td>{session.type}</td>
				<td>{session.platform}</td>
				<td>{dayjs(session.date).format('MMM D YYYY h:mm a')}</td>
				<td>{dayjs(session.createdAt).format('MMM D YYYY h:mm a')}</td>
			</tr>
		)
	})

	return (
		<div className={styles.base}>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Student</td>
						<td>Tutor</td>
						<td>Exam</td>
						<td>Platform</td>
						<td>Date of Session</td>
						<td>Date Booked</td>
					</tr>
				</thead>
				<tbody>{sessions}</tbody>
			</table>
		</div>
	)
}

export default TutorSessionsTable
