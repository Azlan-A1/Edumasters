'use client'

// React
import { useCallback, useEffect, useState } from 'react'

// Styles
import styles from './BookingForm.module.scss'

// Packages
import Calendar from 'react-calendar'
import dayjs from 'dayjs'

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
	// the number of sessions
	const [sessions, setSessions] = useState<number>(1)

	// the selected date
	const [selectedDate, setSelectedDate] = useState<Date>()

	// the selected time
	const [selectedTime, setSelectedTime] = useState<string>()

	// the methodised date and time
	const [methodisedDateTime, setMethodisedDateTime] = useState<Date>()

	// handle sessions change
	const handleSessionsChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const _sessions = parseInt(event.target.value)
			setSessions(_sessions)
		},
		[]
	)

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

	useEffect(() => {
		if (selectedDate && selectedTime) {
			handleMethodisedDateTime()
		}
	}, [sessions, selectedDate, selectedTime, methodisedDateTime])

	return (
		<div className={styles.base}>
			<form className={'space-y-6'}>
				<div>
					<label>Sessions (hours)</label>
					<input
						type='number'
						id='sessions'
						name='sessions'
						min={1}
						value={sessions}
						onChange={handleSessionsChange}
					/>
				</div>
				<div className='grid grid-cols-3 gap-8'>
					<div>
						<label>Select your dates</label>
						<Calendar onClickDay={(value) => setSelectedDate(value)} />
					</div>
					{selectedDate && (
						<div>
							<label>
								Select a Time for {dayjs(selectedDate).format('MMMM D, YYYY')}
							</label>
							<div className='flex flex-col space-y-0.5'>
								{availableTimes.map((time) => {
									return (
										<button
											key={time}
											type='button'
											className={styles.timeslot_button}
											onClick={() => handleTimeSelection(time)}
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
							<label>Confirmation</label>
							<p>
								Are you sure you want to book a session for{' '}
								{dayjs(methodisedDateTime).format('MMMM D, YYYY [at] h:mma')}?
							</p>
							<button type='button' className={styles.booknow_button}>
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
