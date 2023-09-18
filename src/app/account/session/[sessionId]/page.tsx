// Types
import { TutorSession, TutorSessionStatus } from '@prisma/client'

// Prisma
import { prisma } from '@/lib/prisma'
import PageHeader from '@/components/PageHeader'
import Button from '@/components/Button'
import Link from 'next/link'
import Widget from '@/components/Widget'
import dayjs from 'dayjs'

export default async function SessionPage({
	params,
	searchParams,
}: {
	params: { sessionId: string }
	searchParams: {
		payment: 'success'
	}
}) {
	let session: TutorSession

	if (searchParams.payment === 'success') {
		session = await confirmTutorSession(params.sessionId)
	} else {
		session = await prisma.tutorSession.findUnique({
			where: {
				id: params.sessionId,
			},
			include: {
				tutor: true,
			},
		})
	}

	return (
		<>
			<PageHeader
				title='Session Details'
				actions={
					<>
						<Link href='/account'>Back to Account</Link>
					</>
				}
			/>

			<div className='space-y-8'>
				{searchParams.payment === 'success' && (
					<div className='container'>
						<div className='bg-emerald-200 border border-emerald-400 p-2 rounded'>
							<p className='text-emerald-900'>
								🎉 &nbsp; Congratulations! Your payment was successful.
							</p>
						</div>
					</div>
				)}

				<div className='container'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<Widget title='Date of Session'>
							<p>{dayjs(session.date).format('DD MMMM, YY')}</p>
						</Widget>
						<Widget title='Your Tutor'>
							{session.tutorId ? (
								<p>{session.tutor?.name}</p>
							) : (
								<p>Not assigned yet</p>
							)}
						</Widget>
						<Widget title='Status'>
							<p>{session.status}</p>
						</Widget>
					</div>
				</div>
			</div>
		</>
	)
}

const confirmTutorSession = async (sessionId: string) => {
	const session = await prisma.tutorSession.update({
		where: {
			id: sessionId,
		},
		data: {
			status: TutorSessionStatus.PAID,
		},
		include: {
			tutor: true,
		},
	})

	return session as TutorSession
}
