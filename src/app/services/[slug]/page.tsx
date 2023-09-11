// Types
import { Service } from '@/types/service.types'

// GraphQL
import { gql } from 'graphql-request'
import { hygraph } from '@/lib/graphql'

// Components
import Accordion from '@/components/Accordion'
import GoogleReviews from '@/components/GoogleReviews'
import ExamHeader from '@/components/ExamHeader'
import ExamPricingTable from '@/components/ExamPricingTable'
import TutorIntroduction from '@/components/TutorIntroduction'

// Icons
import { IconArrowsCross, IconBrain, IconDirections } from '@tabler/icons-react'

export default async function Service({ params }: any) {
	const data = await getService(params.slug)

	if (!data) {
		return (
			<div className='container py-12 text-center'>
				<p>This page is missing data.</p>
			</div>
		)
	}

	return (
		<div className='space-y-12'>
			<ExamHeader data={data} />

			<div className='container space-y-12 text-center'>
				<p className='w-full mx-auto text-2xl font-medium md:w-2/3'>
					{data.description}
				</p>

				<div className='grid grid-cols-3 gap-12'>
					<div>
						<IconDirections
							className='p-2 mx-auto mb-4 text-white bg-pink-500 rounded-full'
							size={60}
							stroke={1.5}
						/>
						<p className='font-medium'>
							#1 Students do not choose the most efficient way to solve a
							question.
						</p>
					</div>
					<div>
						<IconArrowsCross
							className='p-2 mx-auto mb-4 text-white bg-pink-500 rounded-full'
							size={60}
							stroke={1.5}
						/>
						<p className='font-medium'>
							#2 Students misundertand the question and choose the wrong answer.
						</p>
					</div>
					<div>
						<IconBrain
							className='p-2 mx-auto mb-4 text-white bg-pink-500 rounded-full'
							size={60}
							stroke={1.5}
						/>
						<p className='font-medium'>
							#3 Students memorize the answer and do not understand the concept.
						</p>
					</div>
				</div>
			</div>

			<div className='py-12 bg-black border-y-4 border-y-pink-500 mb-7'>
				<div className='container relative text-white'>
					<p className='text-3xl font-medium text-center uppercase font-lexend'>
						At Edumasters, we prioritize
					</p>
					<div className='absolute px-8 py-2 -translate-x-1/2 bg-pink-500 border-4 border-black -bottom-20 left-1/2'>
						<p className='text-4xl font-medium font-lexend whitespace-nowrap'>
							MAXIUMUM RESULTS, MINIMUM TIME.
						</p>
					</div>
				</div>
			</div>

			<div className='container py-12'>
				<h2 className='text-center'>
					Choose which {data.title} Prep option fits you best!
				</h2>
				<h6 className='mb-6 text-center'>
					Every student is different. We offer a variety of options to fit your
					needs.
				</h6>

				<ExamPricingTable data={data} />
			</div>

			<div className='py-12 bg-gray-100'>
				<div className='container px-8'>
					<h2 className='text-center'>Meet your Edumasters Tutor</h2>
					<h6 className='mb-6 text-center'>
						Introducing Azlan Ahmad - Your Professional {data.title} Tutor
					</h6>
					<TutorIntroduction />
				</div>
			</div>

			<div className='container'>
				<h2 className='mb-6 text-center'>
					Recent questions about our {data.title} Tutoring
				</h2>

				<Accordion data={data.frequentlyAskedQuestions} />
			</div>

			<div className='container'>
				<h2 className='text-center'>What our Clients are saying about us</h2>
				<h6 className='mb-6 text-center'>
					We have helped thousands of students achieve their goals.
				</h6>
				<GoogleReviews />
			</div>

			<div className='container py-12'>
				<h2 className='text-center'>Prepare for your {data.title} exam!</h2>
				<h6 className='mb-6 text-center'>
					Succeed on your {data.title} exam with our expert tutors at
					Edumasters.
				</h6>

				<ExamPricingTable data={data} />
			</div>
		</div>
	)
}

async function getService(slug: string) {
	const query = gql`
		query GetService($slug: String!) {
			service(where: { slug: $slug }) {
				title
				slug
				description
				headerImage {
					url
				}
				pricingTable {
					title
					sku
					tagline
					delivery
					stripePriceId
					featured
				}
				frequentlyAskedQuestions {
					... on FrequencyAskedQuestion {
						question
						answer
					}
				}
			}
		}
	`

	const variables = {
		slug,
	}

	const data = await hygraph.request(query, variables)

	const { service } = data as { service: Service }

	return service
}
