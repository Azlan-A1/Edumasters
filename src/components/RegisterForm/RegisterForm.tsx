'use client'

// React
import { useState } from 'react'

// Next Auth
import { signIn } from 'next-auth/react'

// Components
import Button from '@/components/Button'
import Input from '@/components/Input'

// React Hook Form
import { useForm } from 'react-hook-form'

interface RegisterFormProps {
	callbackUrl?: string
}

const RegisterForm = (props: RegisterFormProps) => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			password: '',
			password_confirm: '',
			name: '',
		},
	})

	const [error, setError] = useState<string>('')

	const onSubmit = handleSubmit((data) => {
		fetch('/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(() => {
				signIn('credentials', {
					email: data.email,
					password: data.password,
					callbackUrl:
						window.location.origin + props.callbackUrl ??
						`${window.location.origin}/account`,
				})
			})
			.catch((error) => {
				setError(error)
			})
	})

	return (
		<form onSubmit={onSubmit} className='space-y-4'>
			{error && <div className=''>{JSON.stringify(error)}</div>}

			<Input.TextInput
				id='email'
				label='Email Address'
				placeholder='Enter your email address'
				register={register('email')}
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<Input.TextInput
					type='password'
					id='password'
					label='Password'
					placeholder='Enter your password'
					register={register('password')}
				/>
				<Input.TextInput
					type='password'
					id='password_confirm'
					label='Confirm Password'
					placeholder='Confirm your password'
					register={register('password_confirm')}
				/>
			</div>
			<Input.TextInput
				type='text'
				id='name'
				label='Full Name'
				placeholder='Enter your Full Name'
				register={register('name')}
			/>
			<Button type='submit' variant='primary' className='ml-auto'>
				Register with Edumasters
			</Button>
		</form>
	)
}

export default RegisterForm
