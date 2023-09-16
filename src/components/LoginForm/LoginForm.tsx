'use client'

// Next
import { useRouter } from 'next/navigation'

// Next Auth
import { signIn } from 'next-auth/react'

// Components
import Button from '@/components/Button'
import Input from '@/components/Input'

// React Hook Form
import { useForm } from 'react-hook-form'

interface LoginFormProps {
	callbackUrl?: string
}

const LoginForm = (props: LoginFormProps) => {
	const router = useRouter()

	const { register, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = handleSubmit((data) => {
		signIn('credentials', data).then(() => {
			router.push('/account')
		})
	})

	return (
		<form onSubmit={onSubmit} className='space-y-4'>
			<Input.TextInput
				id='email'
				placeholder='Enter your email address'
				register={register('email')}
			/>
			<Input.TextInput
				type='password'
				id='password'
				placeholder='Enter your password'
				register={register('password')}
			/>
			<Button type='submit' className='ml-auto'>
				Login
			</Button>
		</form>
	)
}

export default LoginForm
