// Types
import type { Exam } from '@/types/exam.types'

// Next
import Image from 'next/image'

// GraphQL
import { hygraph } from '@/lib/graphql'
import { gql } from 'graphql-request'

// Components
import Accordion from '@/components/Accordion'
import BlogGrid from '@/components/BlogGrid/BlogGrid'
import Button from '@/components/Button'
import CourseGrid from '@/components/CourseGrid'
import FeaturedCourses from '@/components/FeaturedCourses'
import GoogleReviews from '@/components/GoogleReviews'
import Jumbotron from '@/components/Jumbotron'
import ServicesGrid from '@/components/ServicesGrid'
import Statistics from '@/components/Statistics'
import UniqueSellingPoints from '@/components/UniqueSellingPoints'
import USPs from '@/components/USPs'

// Data
import { faqs } from '@/data/faq'

// Assets
import roadToKnowledge from '@/assets/illustrations/road_to_knowledge.svg'

export default async function Home() {
	const courses = await getExamCourses()

	const featuredCourses = [courses[0], courses[1], courses[2], courses[3]]

	return (
		<>
			<Jumbotron />

			<div className='space-y-20'>
				<Statistics />

				<div className='container grid grid-cols-2 gap-12'>
					<div className='h-24 w-full bg-gray-100 rounded' />
					<div className='h-24 w-full bg-gray-100 rounded' />
				</div>

				<div>
					<div className='container'>
						<h2 className='text-center'>Check out our Featured Courses</h2>
						<h6 className='text-center mb-6'>
							Succeed on your exam with our expert tutors at Edumasters.
						</h6>
					</div>
					<FeaturedCourses data={featuredCourses} />
				</div>

				<div>
					<h2 className='text-center'>Our Full Range of Courses</h2>
					<h6 className='text-center mb-6'>
						Pass all of your exams with Edumasters!
					</h6>
					<CourseGrid data={courses} />
				</div>

				<div>
					<UniqueSellingPoints />
				</div>

				<div className='container'>
					<div className='container'>
						<h2 className='text-center'>Read our Educational Blog</h2>
						<h6 className='text-center mb-6'>
							We have a lot of interesting articles for you to read.
						</h6>
					</div>
					<BlogGrid max={4} />
				</div>

				<div className='container'>
					<GoogleReviews />
				</div>

				<div className='container'>
					<h2 className='text-center'>Frequently Asked Questions (FAQs)</h2>
					<h6 className='text-center mb-6'>
						All the answers to your questions in one place.
					</h6>
					<div className='md:px-32'>
						<Accordion data={faqs} />
					</div>
				</div>
			</div>
		</>
	)
}

const getExamCourses = async () => {
	const QUERY = gql`
		query GetAllExams {
			exams {
				title
				slug
				description
				headerImage {
					url
				}
			}
		}
	`

	const data = await hygraph.request(QUERY)

	const { exams } = data as { exams: Exam[] }

	return exams
}
