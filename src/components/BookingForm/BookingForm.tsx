'use client'

// React
import { useCallback, useEffect, useState } from 'react'

// Next
import { useSearchParams } from 'next/navigation'

// Next Auth
import { useSession } from 'next-auth/react'

// Utils
import getStripe from '@/utils/getStripe'

// Styles
import styles from './BookingForm.module.scss'
import './BookingForm.calendar.scss'

// Components
import Input from '@/components/Input'

// React Hook Form
import { useForm } from 'react-hook-form'

// Packages
import Calendar from 'react-calendar'
import classNames from 'classnames'
import dayjs from 'dayjs'
import Select from 'react-select'

const availableTimes = [
	'10:00 am',
	'11:00 am',
	'12:00 pm',
	'1:00 pm',
	'2:00 pm',
	'3:00 pm',
	'4:00 pm',
	'5:00 pm',
	'6:00 pm',
	'7:00 pm',
	'8:00 pm',
]

const BookingForm = () => {
	// the current session
	const { data: session } = useSession()

	// the selected date
	const [selectedDate, setSelectedDate] = useState<Date>()

	// the selected time
	const [selectedTime, setSelectedTime] = useState<string>()

	// the methodised date and time
	const [methodisedDateTime, setMethodisedDateTime] = useState<Date>()

	// query parameters
	const type = useSearchParams().get('type')
	const option = useSearchParams().get('option')

	// form data
	const { register, getValues, setValue, handleSubmit } = useForm({
		defaultValues: {
			exam_type: type,
			exam_option: option,
			sessions: 1,
			user_id: session?.user?.id,
			user_name: session?.user?.name,
			platform: '',
		},
	})

	// handle time selection
	const handleTimeSelection = useCallback(
		(time: string) => {
			setSelectedTime(time)
		},
		[selectedTime]
	)

	// handle methodised date and time
	const handleMethodisedDateTime = useCallback(() => {
		const _date = dayjs(selectedDate)

		const selectedDateTime = dayjs(
			_date.format('MM/DD/YYYY') + ' ' + selectedTime
		).toDate()

		setMethodisedDateTime(selectedDateTime)
	}, [methodisedDateTime])

	// handle form submit
	const onSubmit = handleSubmit(async (data) => {
		await fetch('/api/checkout/session', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				sessions: data.sessions,
			}),
		}).then(async (response) => {
			const session = await response.json()

			const stripe = await getStripe()

			const { error } = (await stripe?.redirectToCheckout({
				sessionId: session.id,
			})) as any

			if (error) {
				console.error(error)
			}
		})
	})

	// handle date and time change
	useEffect(() => {
		if (selectedDate && selectedTime) {
			handleMethodisedDateTime()
		}
	}, [selectedDate, selectedTime])

	// handle methodised date and time
	useEffect(() => {
		if (selectedDate && selectedTime) {
			const _date = dayjs(selectedDate)

			const selectedDateTime = dayjs(
				_date.format('MM/DD/YYYY') + ' ' + selectedTime
			).toDate()

			setMethodisedDateTime(selectedDateTime)
		}
	}, [selectedDate, selectedTime])

	// get user data and update the form
	useEffect(() => {
		if (session?.user) {
			if (!getValues('user_id')) {
				setValue('user_id', session?.user?.id)
			}

			if (!getValues('user_name')) {
				setValue('user_name', session?.user?.name)
			}
		}
	}, [session?.user])

	return (
		<div className={styles.base}>
			<form onSubmit={onSubmit} className={'space-y-6'}>
				<div className={styles.sessions}>
					<Input.NumberInput
						id='sessions'
						label='How many sessions would you like?'
						placeholder='How many sessions would you like?'
						min={1}
						register={register('sessions')}
					/>
				</div>
				<div className='grid grid-cols-3 gap-8'>
					<div>
						<label>What day would you like your session?</label>
						<Calendar
							minDate={new Date()}
							onClickDay={(value) => setSelectedDate(value)}
						/>
					</div>
					{selectedDate && (
						<div>
							<label>
								What time on {dayjs(selectedDate).format('MMMM D, YYYY')}?
							</label>
							<div className={styles.timeslot_buttons}>
								{availableTimes.map((time) => {
									const selected = selectedTime === time

									return (
										<button
											key={time}
											type='button'
											onClick={() => handleTimeSelection(time)}
											className={classNames({
												[styles.selected]: selected,
											})}
										>
											{time}
										</button>
									)
								})}
							</div>
						</div>
					)}
					{methodisedDateTime && (
						<div>
							<div className={styles.booking_confirmation}>
								<label>Confirmation</label>
								<p className='font-medium'>
									{dayjs(methodisedDateTime).format('MMMM D, YYYY [at] h:mma')}
								</p>
							</div>
							<div className={styles.booking_form}>
								<Input.TextInput
									id='exam'
									placeholder='Exam'
									register={register('exam_type')}
									disabled
								/>
								<Input.TextInput
									id='option'
									placeholder='Option'
									register={register('exam_option')}
								/>
								<Input.TextInput
									id='name'
									placeholder='Name'
									register={register('user_name')}
								/>
								<Input.TextInput
									id='platform'
									placeholder='Platform'
									register={register('platform')}
								/>
								<Select
									options={[
										{ value: 'ZOOM', label: 'Zoom' },
										{ value: 'GOOGLE_MEET', label: 'Google Meet' },
										{ value: 'MICROSOFT_TEAMS', label: 'Microsoft Teams' },
										{ value: 'SKYPE', label: 'Skype' },
									]}
									className='select'
								/>
							</div>
							<button type='submit' className={styles.booking_button}>
								Book now
							</button>
						</div>
					)}
				</div>
			</form>
		</div>
	)
}

export default BookingForm
