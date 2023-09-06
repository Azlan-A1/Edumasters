// Components
import BookingForm from '@/components/BookingForm'
import PageHeader from '@/components/PageHeader'

export default function BookNowPage() {
	return (
		<div>
			<PageHeader title='Book Now' />

			<div className='container px-4'>
				<BookingForm />
			</div>
		</div>
	)
}
