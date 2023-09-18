// GraphQL
import { gql } from 'graphql-request'
import { hygraph } from '@/lib/graphql'

// Components
import PageHeader from '@/components/PageHeader'

// Packages
import ReactMarkdown from 'react-markdown'

export default async function PrivacyPolicy() {
	const page = await getPageData()

	return (
		<div>
			<PageHeader title={page.title} />

			<div className='container'>
				<ReactMarkdown className='markdown'>{page.content}</ReactMarkdown>
			</div>
		</div>
	)
}

async function getPageData() {
	const QUERY = gql`
		query GetPrivacyPolicy {
			metaPage(where: { slug: "privacy-policy" }) {
				title
				slug
				content
			}
		}
	`

	const { metaPage } = (await hygraph.request(QUERY)) as { metaPage: any }

	return metaPage
}
