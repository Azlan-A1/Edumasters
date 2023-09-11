// Types
import type { Service } from '@/types/service.types'

// Next
import Link from 'next/link'

// Styles
import styles from './CourseGrid.module.scss'

interface CourseGridProps {
	data: Service[]
}

const CourseGrid = (props: CourseGridProps) => {
	const CourseLink = (props: Service) => {
		return (
			<Link href={`/services/${props.slug}`} className={styles.course}>
				<div>
					<span>{props.title}</span>
				</div>
			</Link>
		)
	}

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				{props.data.map((course, index) => {
					return <CourseLink key={index} {...course} />
				})}
			</div>
		</div>
	)
}

export default CourseGrid
