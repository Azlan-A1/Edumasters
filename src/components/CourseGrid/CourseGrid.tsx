// Next
import Link from 'next/link'

// Styles
import styles from './CourseGrid.module.scss'

// Data
import { courses } from './CourseGrid.data'

interface CourseGridProps {}

const CourseGrid = (props: CourseGridProps) => {
	const CourseLink = (props: { name: string; path: string }) => {
		return (
			<Link href={props.path} className={styles.course}>
				<div>
					<span>{props.name}</span>
				</div>
			</Link>
		)
	}

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.column_1}>
					{courses[0].map((course, index) => {
						return (
							<CourseLink key={index} name={course.name} path={course.path} />
						)
					})}
				</div>
				<div className={styles.column_2}>
					{courses[1].map((course, index) => {
						return (
							<CourseLink key={index} name={course.name} path={course.path} />
						)
					})}
				</div>
				<div className={styles.column_3}>
					{courses[2].map((course, index) => {
						return (
							<CourseLink key={index} name={course.name} path={course.path} />
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default CourseGrid
