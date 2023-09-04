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

const BlogHeader = (props: BlogHeaderProps) => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<Link href='/blog' className={styles.back_link}>
					<IconArrowNarrowLeft />
					<span>Read all of our blogs</span>
				</Link>

				<h1 className={styles.title}>{props.title}</h1>

				<div className={styles.meta}>
					<div className={styles.author_avatar}>
						<Image
							src={props.author.picture}
							alt={props.author.name + ' Profile Picture'}
							fill
						/>
					</div>
					<div className={styles.details}>
						<p className={styles.author_name}>{props.author.name}</p>
						<p className={styles.date}>
							Published on: {dayjs(props.published).format('MM/DD/YYYY')}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogHeader
