// Types
import { Blog } from '@/types/blog.types'

// GraphQL
import { gql } from 'graphql-request'
import { hygraph } from '@/lib/graphql'

// Packages
import ReactMarkdown from 'react-markdown'
import BlogHeader from '@/components/BlogHeader'

export default async function BlogPost({ params }: any) {
	const blog = await getBlogPost(params.slug)

	return (
		<div>
			<BlogHeader
				title={blog.title}
				author={blog.createdBy}
				published={blog.createdAt}
			/>

			<div className='container px-12 border-x'>
				<ReactMarkdown>{blog.content}</ReactMarkdown>
			</div>
		</div>
	)
}

async function getBlogPost(slug: string) {
	const QUERY = gql`
		query GetBlogPost($slug: String!) {
			blog(where: { slug: $slug }) {
				title
				slug
				content
				createdBy {
					name
					picture
				}
				createdAt
			}
		}
	`

	const data = await hygraph.request(QUERY, { slug })

	const { blog } = data as { blog: Blog }

	return blog
}
