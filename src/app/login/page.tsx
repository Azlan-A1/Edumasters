// Next
import { redirect } from 'next/navigation'

// Next Auth
import { getServerSession } from 'next-auth'

// Lib
import { authOptions } from '@/lib/auth'

// Components
import LoginForm from '@/components/LoginForm'
import PageHeader from '@/components/PageHeader'
import RegisterForm from '@/components/RegisterForm'

export default async function Login() {
	const session = await getServerSession(authOptions)

	if (session?.user) {
		redirect('/account')
	}

	return (
		<div>
			<PageHeader title='Login/Register' />

			<div className='container px-4'>
				<div className='grid grid-cols-2 gap-8 items-start'>
					<div className='border border-gray-100 shadow-lg p-4 rounded'>
						<h4 className='mb-4'>Login to Edumasters</h4>
						<LoginForm />
					</div>
					<div className='border border-gray-100 shadow-lg p-4 rounded'>
						<h4 className='mb-4'>Create an Account with Edumasters</h4>
						<RegisterForm />
					</div>
				</div>
			</div>
		</div>
	)
}
