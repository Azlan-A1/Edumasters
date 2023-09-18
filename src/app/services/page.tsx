// Types
import type { Service } from '@/types/service.types'

// GraphQL
import { gql } from 'graphql-request'
import { hygraph } from '@/lib/graphql'

// Components
import Accordion from '@/components/Accordion'
import PageHeader from '@/components/PageHeader'
import CourseGrid from '@/components/CourseGrid'

// Data
import { faqs } from '@/data/faq'

export default async function ExamsPage() {
	const services = await getAllServices()

	return (
		<>
			<PageHeader
				title='Our Services'
				subtitle='Learn from the best, and no one else!'
			/>

			<div className='space-y-20'>
				<CourseGrid data={services} />

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
