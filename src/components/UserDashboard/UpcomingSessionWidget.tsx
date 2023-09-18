// Prisma
import { TutorSession } from '@prisma/client'

// Components
import Widget from '../Widget'

// Packages
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

interface UpcomingSessionWidgetProps {
	sessions: TutorSession[]
}

const UpcomingSessionWidget = (props: UpcomingSessionWidgetProps) => {
	const latestSession = props.sessions[0]

	const hasUpcomingSession =
		latestSession && dayjs(latestSession.date).isAfter(dayjs())

	if (!hasUpcomingSession) {
		return <Widget title='🗓️ Next Session' value='No upcoming sessions' />
	}

	// get the next session after today
	const nextSession = props.sessions.find((session) =>
		dayjs(session.date).isAfter(dayjs())
	)

	const now = dayjs()
	const futureDate = dayjs(nextSession.date)
	const daysDifference = futureDate.diff(now, 'day')
	const hoursDifference = futureDate.diff(now, 'hour') % 24
	const minutesDifference = futureDate.diff(now, 'minute') % 60

	let countdownString =
		daysDifference > 0
			? `In ${daysDifference} day${daysDifference > 1 ? 's' : ''}`
			: ''

	if (hoursDifference > 0) {
		countdownString +=
			daysDifference > 0
				? ` and ${hoursDifference} hour${hoursDifference > 1 ? 's' : ''}`
				: `In ${hoursDifference} hour${hoursDifference > 1 ? 's' : ''}`
	}

	if (minutesDifference > 0) {
		countdownString +=
			daysDifference > 0 || hoursDifference > 0
				? ` and ${minutesDifference} minute${minutesDifference > 1 ? 's' : ''}`
				: `In ${minutesDifference} minute${minutesDifference > 1 ? 's' : ''}`
	}

	return <Widget title='🗓️ Next Session' value={countdownString} />
}

export default UpcomingSessionWidget
