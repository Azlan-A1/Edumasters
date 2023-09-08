// Types
import { Exam } from '@/types/exam.types'

// Next
import Image from 'next/image'

// Styles
import styles from './ExamHeader.module.scss'

interface ExamHeaderProps {
	data: Exam
}

const ExamHeader = (props: ExamHeaderProps) => {
	return (
		<div className={styles.base}>
			<Image
				src={props.data.headerImage.url}
				alt={props.data.title + ' Header Image'}
				fill
				className={styles.image}
			/>
			<div className={styles.content}>
				<h1 className={styles.title}>{props.data.title} Tutoring</h1>
				<h2 className={styles.description}>
					Looking for a top score in the {props.data.title} exam?
				</h2>
				<button className={styles.button}>Enroll Now</button>
			</div>
		</div>
	)
}

export default ExamHeader
