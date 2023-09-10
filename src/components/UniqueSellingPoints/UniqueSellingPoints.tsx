// Styles
import styles from './UniqueSellingPoints.module.scss'

// Icons
import { IconGridPattern } from '@tabler/icons-react'

const UniqueSellingPoints = () => {
	const sellingPoints = [
		{
			icon: <IconGridPattern />,
			title: '360° Learning',
			description:
				'We provide 360° learning to our students. We make sure that our students are learning from all the aspects.',
		},
		{
			icon: <IconGridPattern />,
			title: '360° Learning',
			description:
				'We provide 360° learning to our students. We make sure that our students are learning from all the aspects.',
		},
		{
			icon: <IconGridPattern />,
			title: '360° Learning',
			description:
				'We provide 360° learning to our students. We make sure that our students are learning from all the aspects.',
		},
		{
			icon: <IconGridPattern />,
			title: '360° Learning',
			description:
				'We provide 360° learning to our students. We make sure that our students are learning from all the aspects.',
		},
		{
			icon: <IconGridPattern />,
			title: '360° Learning',
			description:
				'We provide 360° learning to our students. We make sure that our students are learning from all the aspects.',
		},
		{
			icon: <IconGridPattern />,
			title: '360° Learning',
			description:
				'We provide 360° learning to our students. We make sure that our students are learning from all the aspects.',
		},
	]

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<h2 className='text-center'>Why you should choose Edumasters</h2>
				<h6 className='text-center'>
					Succeed on your exam with our expert tutors at Edumasters.
				</h6>

				<div className={styles.points}>
					{sellingPoints.map((point, index) => (
						<div key={index} className={styles.selling_point}>
							<div className={styles.selling_point_heading}>
								<div className={styles.selling_point_icon}>{point.icon}</div>

								<h5 className={styles.selling_point_title}>{point.title}</h5>
							</div>
							<p className={styles.selling_point_text}>{point.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default UniqueSellingPoints
