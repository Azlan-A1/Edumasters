// Types
import { Exam } from '@/types/exam.types'

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

export default async function Exam({ params }: any) {
	const data = await getExam(params.slug)

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

			<div className='container text-center space-y-12'>
				<p className='w-full md:w-2/3 mx-auto font-medium text-2xl'>
					{data.description}
				</p>

				<div className='grid grid-cols-3 gap-12'>
					<div>
						<IconDirections
							className='mx-auto mb-4 bg-pink-500 rounded-full p-2 text-white'
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
							className='mx-auto mb-4 bg-pink-500 rounded-full p-2 text-white'
							size={60}
							stroke={1.5}
						/>
						<p className='font-medium'>
							#2 Students misundertand the question and choose the wrong answer.
						</p>
					</div>
					<div>
						<IconBrain
							className='mx-auto mb-4 bg-pink-500 rounded-full p-2 text-white'
							size={60}
							stroke={1.5}
						/>
						<p className='font-medium'>
							#3 Students memorize the answer and do not understand the concept.
						</p>
					</div>
				</div>
			</div>

			<div className='bg-black border-y-4 border-y-pink-500 py-12 mb-7'>
				<div className='relative container text-white'>
					<p className='text-3xl font-medium font-lexend text-center uppercase'>
						At Edumasters, we prioritize
					</p>
					<div className='absolute -bottom-20 left-1/2 -translate-x-1/2 bg-pink-500 border-4 border-black px-8 py-2'>
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
				<h6 className='text-center mb-6'>
					Every student is different. We offer a variety of options to fit your
					needs.
				</h6>

				<ExamPricingTable data={data.pricingTable} />
			</div>

			<div className='bg-gray-100 py-12'>
				<div className='container px-8'>
					<h2 className='text-center'>Meet your Edumasters Tutor</h2>
					<h6 className='text-center mb-6'>
						Introducing Azlan Ahmad - Your Professional {data.title} Tutor
					</h6>
					<TutorIntroduction />
				</div>
			</div>

			<div className='container'>
				<h2 className='text-center mb-6'>
					Recent questions about our {data.title} Tutoring
				</h2>

				<Accordion data={data.frequentlyAskedQuestions} />
			</div>

			<div className='container'>
				<h2 className='text-center'>What our Clients are saying about us</h2>
				<h6 className='text-center mb-6'>
					We have helped thousands of students achieve their goals.
				</h6>
				<GoogleReviews />
			</div>

			<div className='container py-12'>
				<h2 className='text-center'>Prepare for your {data.title} exam!</h2>
				<h6 className='text-center mb-6'>
					Succeed on your {data.title} exam with our expert tutors at
					Edumasters.
				</h6>

				<ExamPricingTable data={data.pricingTable} />
			</div>

			{/* Debug 
			<div className='container'>
				<pre className='bg-gray-100 p-4 rounded text-xs'>
					<code>
						<span className='font-medium'>Debug</span>{' '}
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			</div>
			*/}
		</div>
	)
}

async function getExam(slug: string) {
	const query = gql`
		query GetExam($slug: String!) {
			exam(where: { slug: $slug }) {
				title
				slug
				description
				headerImage {
					url
				}
				pricingTable {
					title
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

	const { exam } = data as { exam: Exam }

	return exam
}
