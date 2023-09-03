// Types
import { Grade } from '@/types/grade'

// GraphQL
import { gql } from 'graphql-request'
import { hygraph } from '@/lib/graphql'

// Components
import GradeHeader from '@/components/GradeHeader'

export default async function Grade({ params }: any) {
	const data = await getCourse(params.slug)

	if (!data) {
		return (
			<div className='container py-12 text-center'>
				<p>This page is missing data.</p>
			</div>
		)
	}

	return (
		<div>
			<GradeHeader data={data} />

			<div className='container py-12 text-center space-y-12'>
				<p className='w-full md:w-2/3 mx-auto font-medium text-2xl'>
					{data.description}
				</p>

				<div className='grid grid-cols-3 gap-12'>
					<div>
						<p>
							#1 Students do not choose the most efficient way to solve a
							question.
						</p>
					</div>
					<div>
						<p>
							#2 Students misundertand the question and choose the wrong answer.
						</p>
					</div>
					<div>
						<p>
							#3 Students memorize the answer and do not understand the concept.
						</p>
					</div>
				</div>
			</div>

			<div className='bg-black border-y-4 border-y-pink-500 py-12 mb-7'>
				<div className='relative container text-white'>
					<p className='text-3xl font-medium text-center uppercase'>
						At Edumasters, we prioritize
					</p>
					<div className='absolute -bottom-20 left-1/2 -translate-x-1/2 bg-pink-500 border-4 border-black px-8 py-2'>
						<p className='text-4xl font-medium whitespace-nowrap'>
							MAXIUMUM RESULTS, MINIMUM TIME.
						</p>
					</div>
				</div>
			</div>

			<div className='container'>
				<pre className='bg-gray-100 p-4 rounded text-xs'>
					<code>
						<span className='font-medium'>Debug</span>{' '}
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			</div>
		</div>
	)
}

async function getCourse(slug: string) {
	const query = gql`
		query GetGrade($slug: String!) {
			grades(where: { slug: $slug }) {
				title
				slug
				description
				headerImage {
					url
				}
			}
		}
	`

	const variables = {
		slug: slug,
	}

	const data = await hygraph.request(query, variables)

	const { grades } = data as { grades: Grade[] }

	return grades[0]
}
