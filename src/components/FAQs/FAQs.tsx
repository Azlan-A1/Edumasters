// Types
import type { Service } from '@/types/service.types'

// Styles
import styles from './FAQs.module.scss'

// Client Components
import { Accordion } from './FAQs.client'

interface FAQsProps {
	data: Service['frequentlyAskedQuestions']
}

const FAQs = (props: FAQsProps) => {
	return (
		<div className={styles.base}>
			<h2 className={styles.title}>Frequency Asked Questions</h2>
			<div className={styles.accordion}>
				<Accordion data={props.data} />
			</div>
		</div>
	)
}

export default FAQs
