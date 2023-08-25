// Next
import Image from 'next/image'

// Components
import Button from '../Button'

// Styles
import styles from './BlogGrid.module.scss'

// Assets
import graduation from '@/assets/images/graduation.webp'

// Packages
import classNames from 'classnames'

const BlogGrid = () => {
	const BlogItem = () => {
		return (
			<div className={styles.blog_item}>
				<div className={styles.blog_image}>
					<Image src={graduation} alt='Graduation - #SEO' fill />
				</div>
				<div className={styles.blog_content}>
					<h6 className={styles.blog_title}>Graduation - #SEO</h6>
					<p className={styles.blog_meta}>Posted 4 days ago</p>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<BlogItem />
				<BlogItem />
				<BlogItem />
				<BlogItem />
			</div>
			<div className={classNames(styles.content, styles.content_cta)}>
				<p>We would love to hear from you!</p>
				<Button rounded>Get in Touch</Button>
			</div>
		</div>
	)
}

export default BlogGrid
