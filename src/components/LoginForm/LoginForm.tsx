'use client'

// Next Auth
import { signIn } from 'next-auth/react'

// Components
import Button from '@/components/Button'
import Input from '@/components/Input'

// React Hook Form
import { useForm } from 'react-hook-form'

const LoginForm = async () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = handleSubmit((data) => {
		signIn('credentials', data)
	})

	return (
		<form onSubmit={onSubmit} className='space-y-2'>
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
