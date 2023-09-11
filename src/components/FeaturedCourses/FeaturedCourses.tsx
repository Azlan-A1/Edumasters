// Types
import type { Service } from '@/types/service.types'

// Next
import Link from 'next/link'

// Styles
import styles from './FeaturedCourses.module.scss'

// Icons
import { IconStarFilled } from '@tabler/icons-react'

interface FeaturedCoursesProps {
	data: Service[]
}

const FeaturedCourses = (props: FeaturedCoursesProps) => {
	const rating = 5

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.courses}>
					{props.data.map((service) => (
						<Link href={`/services/${service.slug}`} key={service.slug}>
							<div className={styles.course}>
								<div className={styles.course_image}></div>

								<div className={styles.course_content}>
									<p className={styles.course_title}>{service.title}</p>
									<p className={styles.course_tagline}>
										Guaranteed pass* with just 12 lessons.
									</p>
									<div className={styles.course_rating}>
										{[...Array(rating)].map((_, i) => (
											<IconStarFilled
												key={i}
												size={14}
												className={styles.course_rating_star}
											/>
										))}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default FeaturedCourses
