// Types
import { Blog } from '@/types/blog.types'

// Next
import Image from 'next/image'
import Link from 'next/link'

// GraphQL
import { gql } from 'graphql-request'
import { hygraph } from '@/lib/graphql'

// Components
import Button from '../Button'

// Styles
import styles from './BlogGrid.module.scss'

// Assets
import graduation from '@/assets/images/graduation.webp'

// Packages
import classNames from 'classnames'
import dayjs from 'dayjs'

interface BlogGridProps {
	max?: number
}

interface BlogItemProps {
	data: Blog
}

const BlogGrid = async (props: BlogGridProps) => {
	const blogs = await getBlogPosts()

	const BlogItem = (props: BlogItemProps) => {
		let date

		if (props.data.dateOverride) {
			date = dayjs(props.data.dateOverride).format('MMMM D, YYYY')
		} else {
			date = dayjs(props.data.createdAt).format('MMMM D, YYYY')
		}

		return (
			<Link href={`/blog/${props.data.slug}`}>
				<div className={styles.blog_item}>
					<div className={styles.blog_image}>
						<Image src={graduation} alt='Graduation - #SEO' fill />
					</div>
					<div className={styles.blog_content}>
						<h6 className={styles.blog_title}>{props.data.title}</h6>
						<p className={styles.blog_meta}>Posted {date}</p>
					</div>
				</div>
			</Link>
		)
	}

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				{blogs.map((blog, index) => {
					if (props.max) {
						if (index >= props.max) {
							return
						}
					}

					return <BlogItem key={index} data={blog} />
				})}
			</div>
		</div>
	)
}

async function getBlogPosts() {
	const QUERY = gql`
		query GetAllBlogPosts {
			blogs {
				title
				slug
				dateOverride
				createdBy {
					name
					picture
				}
				createdAt
			}
		}
	`

	const data = await hygraph.request(QUERY)

	const { blogs } = data as { blogs: Blog[] }

	return blogs
}

export default BlogGrid
