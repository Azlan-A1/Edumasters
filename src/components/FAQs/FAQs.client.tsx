'use client'

// React
import { useState } from 'react'

interface AccordionProps {
	data: {
		question: string
		answer: string
	}[]
}

export const Accordion = (props: AccordionProps) => {
	const [active, setActive] = useState<number>(0)

	return (
		<div>
			{props.data.map((item, index) => (
				<div key={index}>
					<div onClick={() => setActive(index)}>
						<p>{item.question}</p>
					</div>
					{active === index && <p>{item.answer}</p>}
				</div>
			))}
		</div>
	)
}
