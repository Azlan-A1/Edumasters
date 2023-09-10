// Types
import type { Exam } from '@/types/exam.types'

// Next
import Link from 'next/link'

// Styles
import styles from './CourseGrid.module.scss'

interface CourseGridProps {
	data: Exam[]
}

const CourseGrid = (props: CourseGridProps) => {
	const CourseLink = (props: Exam) => {
		return (
			<Link href={`/exams/${props.slug}`} className={styles.course}>
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
