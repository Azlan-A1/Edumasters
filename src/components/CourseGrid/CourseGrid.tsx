// Types
import type { Service } from '@/types/service.types'

// Next
import Link from 'next/link'

// Styles
import styles from './CourseGrid.module.scss'
import { IconStarFilled } from '@tabler/icons-react'

interface CourseGridProps {
	data: Service[]
}

const CourseGrid = (props: CourseGridProps) => {
	const CourseLink = (props: Service) => {
		return (
			<Link href={`/services/${props.slug}`} className={styles.course}>
				<div className='h-full flex flex-col'>
					<p className='text-lg font-medium mb-2'>{props.title}</p>

					<p className='mb-4'>{props.description}</p>

					<div className='flex items-center space-x-1 mt-auto text-pink-500'>
						<IconStarFilled size={16} />
						<IconStarFilled size={16} />
						<IconStarFilled size={16} />
						<IconStarFilled size={16} />
						<IconStarFilled size={16} />
					</div>
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
