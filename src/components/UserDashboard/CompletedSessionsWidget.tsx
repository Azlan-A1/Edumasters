// Prisma
import { TutorSessionStatus, type TutorSession } from '@prisma/client'

// Components
import Widget from '../Widget'

interface CompletedSessionsWidgetProps {
	sessions: TutorSession[]
}

const CompletedSessionsWidget = (props: CompletedSessionsWidgetProps) => {
	const completedSessions = props.sessions
		.filter((session) => session.status === TutorSessionStatus.COMPLETED)
		.length.toString()

	return <Widget title='😄 Completed Sessions' value={completedSessions} />
}

export default CompletedSessionsWidget
