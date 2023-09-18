// Next
import Link from 'next/link'
import { redirect } from 'next/navigation'

// Next Auth
import { getServerSession } from 'next-auth'

// Lib
import { authOptions } from '@/lib/auth'

// Components
import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'
import RegisterForm from '@/components/RegisterForm'

export default async function Register() {
	const session = await getServerSession(authOptions)

	if (session?.user) {
		redirect('/account')
	}

	return (
		<div>
			<PageHeader
				title='Register with Edumasters'
				subtitle={`Already have an account?`}
				actions={
					<>
						<Link href='/login'>
							<Button variant='secondary'>Login to your Account</Button>
						</Link>
					</>
				}
			/>

			<div className='container px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='h-full w-full bg-pink-500 rounded-lg'></div>
					<div>
						<RegisterForm />
					</div>
				</div>
			</div>
		</div>
	)
}
