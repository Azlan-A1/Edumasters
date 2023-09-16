// Types
import { Service } from '@/types/service.types'

// GraphQL
import { hygraph } from '@/lib/graphql'
import { gql } from 'graphql-request'

// Components
import Accordion from '@/components/Accordion'
import BlogGrid from '@/components/BlogGrid/BlogGrid'
import CourseGrid from '@/components/CourseGrid'
import FeaturedServices from '@/components/FeaturedServices'
import GoogleReviews from '@/components/GoogleReviews'
import Jumbotron from '@/components/Jumbotron'
import Statistics from '@/components/Statistics'
import UniqueSellingPoints from '@/components/UniqueSellingPoints'

// Data
import { faqs } from '@/data/faq'

// Icons
import { IconBrandOpenai } from '@tabler/icons-react'

export default async function Home() {
	const services = await getAllServices()

	const featuredServices = services
		.filter((service) => service.featured)
		.slice(0, 4)

	return (
		<>
			<Jumbotron />

			<div className='mt-20 space-y-20'>
				<Statistics />

				<div className='container grid grid-cols-1 gap-12 md:grid-cols-2'>
					<div className='w-full h-32 p-2 bg-gray-100 rounded'>
						<div className='flex items-center h-full'>
							<div className='flex items-center justify-center w-1/5'>
								<IconBrandOpenai size={48} stroke={1.25} />
							</div>
							<div className='w-4/5'>
								<p className='font-medium'>Why not just use ChatGPT?</p>
								<p>
									ChatGPT is an online sensation and can help with incredible
									tasks, but it's information is not as valuable as that from a
									professional tutor.
								</p>
							</div>
						</div>
					</div>
					<div className='w-full h-32 bg-gray-100 rounded' />
				</div>

				<div>
					<div className='container'>
						<h2 className='text-center'>Check out our Featured Courses</h2>
						<h6 className='mb-6 text-center'>
							Succeed on your exam with our expert tutors at Edumasters.
						</h6>
					</div>
					<FeaturedServices data={featuredServices} />
				</div>

				<div>
					<h2 className='text-center'>Our Full Range of Courses</h2>
					<h6 className='mb-6 text-center'>
						Pass all of your exams with Edumasters!
					</h6>
					<CourseGrid data={services} />
				</div>

				<div>
					<UniqueSellingPoints />
				</div>

				<div className='container'>
					<div className='container'>
						<h2 className='text-center'>Read our Educational Blog</h2>
						<h6 className='mb-6 text-center'>
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
					<h6 className='mb-6 text-center'>
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

const getAllServices = async () => {
	const QUERY = gql`
		query GetAllServices {
			services {
				title
				slug
				description
				featured
				headerImage {
					url
				}
			}
		}
	`

	const data = await hygraph.request(QUERY)

	const { services } = data as { services: Service[] }

	return services
}
