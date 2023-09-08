// Next
import Image from 'next/image'

// Components
import Button from '../Button'

// Styles
import styles from './ServicesGrid.module.scss'

// Assets
import graduation from '@/assets/images/graduation.webp'

interface ServicesGridProps {
	children?: React.ReactNode
}

interface ServiceProps {
	title: string
	subtitle: string
	description: string
	buttonText?: string
	buttonLink?: string
}

const ServicesGrid = (props: ServicesGridProps) => {
	const Service = (props: ServiceProps) => {
		return (
			<div className={styles.service}>
				<div className={styles.service_image}>
					<Image src={graduation} alt='Graduation - #SEO' fill />
				</div>
				<div className={styles.service_content}>
					<h3 className={styles.service_title}>{props.title}</h3>
					<p className={styles.service_subtitle}>{props.subtitle}</p>
					<p className={styles.service_description}>{props.description}</p>
					<Button variant='primary' rounded>
						Save $200 Now
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<Service
					title='SAT'
					subtitle='1400+ Guaranteed'
					description='Live Online/In-Person'
				/>
				<Service
					title='Academic Tutoring'
					subtitle='Exams 6-12'
					description='Live Online/In-Person'
				/>
				<Service
					title='MCAT'
					subtitle='513+ Guaranteed'
					description='Live Online/In-Person'
				/>
				<Service
					title='LSAT'
					subtitle='165+ Guaranteed'
					description='Live Online/In-Person'
				/>
			</div>
		</div>
	)
}

export default ServicesGrid
