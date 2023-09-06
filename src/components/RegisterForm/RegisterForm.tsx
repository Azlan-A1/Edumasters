'use client'

// Next
import { useRouter } from 'next/navigation'

// Components
import Button from '@/components/Button'
import Input from '@/components/Input'

// React Hook Form
import { useForm } from 'react-hook-form'

const RegisterForm = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			password: '',
			password_confirm: '',
			name: '',
		},
	})

	const router = useRouter()

	const onSubmit = handleSubmit((data) => {
		router.push('/account')
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
			<Input.TextInput
				type='password'
				id='password_confirm'
				placeholder='Confirm your password'
				register={register('password_confirm')}
			/>
			<Input.TextInput
				type='text'
				id='name'
				placeholder='Enter your name'
				register={register('name')}
			/>
			<Button type='submit' className='ml-auto'>
				Create Account
			</Button>
		</form>
	)
}

export default RegisterForm
