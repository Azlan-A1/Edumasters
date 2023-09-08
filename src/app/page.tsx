// Next
import Image from 'next/image'

// Components
import Accordion from '@/components/Accordion'
import BlogGrid from '@/components/BlogGrid/BlogGrid'
import Button from '@/components/Button'
import CourseGrid from '@/components/CourseGrid'
import GoogleReviews from '@/components/GoogleReviews'
import Jumbotron from '@/components/Jumbotron'
import ServicesGrid from '@/components/ServicesGrid'
import USPs from '@/components/USPs'

// Data
import { faqs } from '@/data/faq'

// Assets
import roadToKnowledge from '@/assets/illustrations/road_to_knowledge.svg'

export default function Home() {
	return (
		<div className='space-y-12'>
			<Jumbotron />
			<CourseGrid />
			<div className='container grid grid-cols-2 gap-12'>
				<div className='h-24 w-full bg-gray-100 rounded' />
				<div className='h-24 w-full bg-gray-100 rounded' />
			</div>

			<div className='container flex items-center space-x-16'>
				<div className='relative h-56 w-96'>
					<Image src={roadToKnowledge} alt='Road to knowledge' fill />
				</div>
				<div className='flex flex-col'>
					<h3>Our best colleges for 2024 are out!</h3>
					<p className='my-4'>
						Out lists name the top colleges in 50 categories from financial aid
						to career services based on a 165,000 student survey.{' '}
						<b>
							Find your best college with The Best 389 Colleges: 2024 Edition!
						</b>
					</p>
					<Button variant='primary'>See the 2024 Best Colleges</Button>
				</div>
			</div>

			<ServicesGrid />
			<USPs />

			<div className='container'>
				<BlogGrid max={4} />

				<div className='text-center space-y-4'>
					<p>We would love to hear from you!</p>
					<Button rounded className='mx-auto'>
						Get in Touch
					</Button>
				</div>
			</div>

			<div className='container'>
				<GoogleReviews />
			</div>

			<div className='container'>
				<Accordion data={faqs} />
			</div>
		</div>
	)
}
