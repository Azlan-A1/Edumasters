// Types
import type { Blog } from '@/types/blog.types'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './BlogHeader.module.scss'

// Packages
import dayjs from 'dayjs'
import { IconArrowNarrowLeft } from '@tabler/icons-react'

interface BlogHeaderProps {
	title: string
	author: {
		name: string
		picture: string
	}
	published: Date
}

const BlogHeader = (props: Blog) => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div>
						<div className={styles.image}>
							{props.headerImage && (
								<Image src={props.headerImage.url} alt={props.title} fill />
							)}
						</div>
					</div>
					<div className='flex flex-col justify-center'>
						<Link href='/blog' className={styles.back_link}>
							<IconArrowNarrowLeft />
							<span>Read all of our blogs</span>
						</Link>

						<h1 className={styles.title}>{props.title}</h1>

						<div className={styles.meta}>
							<div className={styles.author_avatar}>
								<Image
									src={props.createdBy.picture}
									alt={props.createdBy.name + ' Profile Picture'}
									fill
								/>
							</div>
							<div className={styles.details}>
								<p className={styles.author_name}>{props.createdBy.name}</p>
								<p className={styles.date}>
									Published on: {dayjs(props.createdAt).format('MM/DD/YYYY')}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogHeader
