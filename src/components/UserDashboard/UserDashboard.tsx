// Prisma
import { TutorSession } from '@prisma/client'

// Packages
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

interface UpcomingSessionWidgetProps {
	sessions: TutorSession[]
}

export const UpcomingSessionWidget = (props: UpcomingSessionWidgetProps) => {
	const latestSession = props.sessions[0]

	const hasUpcomingSession =
		latestSession && dayjs(latestSession.date).isAfter(dayjs())

	if (!hasUpcomingSession) {
		return <Widget title='🗓️ Next Session' value='No upcoming sessions' />
	}

	const now = dayjs()
	const futureDate = dayjs(latestSession.date)
	const daysDifference = futureDate.diff(now, 'day')
	const hoursDifference = futureDate.diff(now, 'hour') % 24

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

	return <Widget title='🗓️ Next Session' value={countdownString} />
}

interface WidgetProps {
	title: string
	value: string
}

const Widget = (props: WidgetProps) => {
	return (
		<div className='border border-gray-100 p-4 rounded shadow-lg'>
			<p className='text-gray-500 text-sm mb-4'>{props.title}</p>
			<p className='text-xl font-medium'>{props.value}</p>
		</div>
	)
}
