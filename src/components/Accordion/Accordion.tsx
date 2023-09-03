'use client'

// React
import { useCallback, useState } from 'react'

// Styles
import styles from './Accordion.module.scss'

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion'

// Icons
import { IconMinus, IconPlus, IconQuestionMark } from '@tabler/icons-react'

interface AccordionProps {
	data: {
		question: string
		answer: string
	}[]
}

const Accordion = (props: AccordionProps) => {
	const [active, setActive] = useState<number>(0)

	const handleClick = useCallback(
		(index: number) => () => {
			setActive(index)
		},
		[]
	)

	return (
		<AnimatePresence initial={false} mode='wait'>
			<div className={styles.base}>
				<motion.div className={styles.accordion}>
					{props.data.map((item, index) => {
						const isActive = active === index

						return (
							<motion.div key={index} className={styles.item}>
								<div className={styles.question} onClick={handleClick(index)}>
									<p className={styles.question_text}>
										<span className={styles.question_icon}>
											<IconQuestionMark />
										</span>
										{item.question}
									</p>
									<div>
										{!isActive ? (
											<IconPlus stroke={3} />
										) : (
											<IconMinus stroke={3} />
										)}
									</div>
								</div>
								{isActive && (
									<motion.div
										className={styles.answer}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{
											duration: 1,
										}}
									>
										<p>{item.answer}</p>
									</motion.div>
								)}
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</AnimatePresence>
	)
}

export default Accordion
