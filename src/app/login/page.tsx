// Next
import Link from 'next/link'
import { redirect } from 'next/navigation'

// Next Auth
import { getServerSession } from 'next-auth'

// Lib
import { authOptions } from '@/lib/auth'

// Components
import Button from '@/components/Button'
import LoginForm from '@/components/LoginForm'
import PageHeader from '@/components/PageHeader'

export default async function Login() {
	const session = await getServerSession(authOptions)

	if (session?.user) {
		redirect('/account')
	}

	return (
		<div>
			<PageHeader
				title='Login to Edumasters'
				subtitle={`Don't have an account?`}
				actions={
					<>
						<Link href='/register'>
							<Button variant='secondary'>Register for an Account</Button>
						</Link>
					</>
				}
			/>

			<div className='container px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<LoginForm />
					</div>
					<div className='h-full w-full bg-pink-500 rounded-lg'></div>
				</div>
			</div>
		</div>
	)
}
