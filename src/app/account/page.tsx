// Next
import { redirect } from 'next/navigation'

// Next Auth
import { getServerSession } from 'next-auth'

// Lib
import { authOptions } from '@/lib/auth'

// Components
import UserDashboardHeader from '@/components/UserDashboardHeader'

// Icons
import { IconCircle, IconCircleCheck } from '@tabler/icons-react'

export default async function AccountPage() {
	const session = await getServerSession(authOptions)

	if (!session?.user) {
		redirect('/login')
	}

	return (
		<div>
			<UserDashboardHeader subtitle={`👋🏼 Hello ${session.user.name}`} />

			<div className='space-y-12'>
				<div className='container px-4'>
					<div className='grid grid-cols-3 gap-8'>
						<div className='border border-gray-100 p-4 rounded shadow-lg'>
							<p className='text-gray-500 text-sm mb-4'>🗓️ Next Session</p>
							<p className='text-xl font-medium'>In 2 days</p>
						</div>
						<div className='border border-gray-100 p-4 rounded shadow-lg'>
							<p className='text-gray-500 text-sm mb-4'>
								😄 Completed Sessions
							</p>
							<p className='text-xl font-medium'>4 sessions</p>
						</div>
						<div className='border border-gray-100 p-4 rounded shadow-lg'>
							<p className='text-gray-500 text-sm mb-4'>
								✍🏼 Homework Tasks Completed
							</p>
							<p className='text-xl font-medium'>12 homeworks</p>
						</div>
					</div>
				</div>

				<div className='container px-4'>
					<div className='grid grid-cols-4 gap-8'>
						<div className='col-span-3'>
							<div className='space-y-4'>
								<div className='grid grid-cols-3 gap-4 text-xs text-gray-400'>
									<p>Session Type</p>
									<p>Tutor Name</p>
									<p>Date & Time</p>
								</div>
								<div className='border rounded px-4 py-2'>
									<div className='grid grid-cols-3 gap-4'>
										<p>ACT Exam Tutoring</p>
										<p>Azlan Ahmed</p>
										<p>
											{new Date().toDateString() +
												' ' +
												new Date().toLocaleTimeString()}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='border border-gray-100 p-4 rounded shadow-lg'>
							<p className='text-gray-500 text-sm mb-4'>📚 Homework</p>
							<div className='space-y-2'>
								<div className='flex items-center space-x-2'>
									<IconCircle size={16} />
									<p className=''>Maths revision</p>
								</div>
								<div className='flex items-center space-x-2'>
									<IconCircleCheck
										size={16}
										stroke={2.5}
										className='text-pink-500'
									/>
									<p className='line-through italic decoration-pink-500 text-gray-500'>
										Science revision
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
