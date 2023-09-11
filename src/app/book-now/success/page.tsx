// Next
import { redirect } from 'next/navigation'

// Prisma
import { prisma } from '@/lib/prisma'
import { TutorSessionStatus } from '@prisma/client'

// Components
import PageHeader from '@/components/PageHeader'

export default async function BookingSuccess({
	searchParams,
}: {
	searchParams: {
		stripeSessionId: string
		tutorSessionId: string
	}
}) {
	if (!searchParams.tutorSessionId) return redirect('/book-now')

	await confirmTutorSession(searchParams.tutorSessionId)

	return (
		<div>
			<PageHeader title='Booking Success' />
		</div>
	)
}

const confirmTutorSession = async (tutorSessionId: string) => {
	await prisma.tutorSession.update({
		where: {
			id: tutorSessionId,
		},
		data: {
			status: TutorSessionStatus.PAID,
		},
	})
}
