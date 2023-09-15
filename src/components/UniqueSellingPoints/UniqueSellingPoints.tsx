// Styles
import styles from './UniqueSellingPoints.module.scss'

// Icons
import {
	IconBallpen,
	IconBooks,
	IconChalkboard,
	IconGridPattern,
	IconMessages,
	IconQuotes,
	IconTie,
} from '@tabler/icons-react'

const UniqueSellingPoints = () => {
	const sellingPoints = [
		{
			icon: <IconTie />,
			title: 'Expert Tutors',
			description: `At Edumasters, our tutors are not just educators; they're subject specialists, many of whom have firsthand experience with the tests they teach, ensuring you get insights from the best in the industry.`,
		},
		{
			icon: <IconBallpen />,
			title: 'Personalized Learning Plans',
			description: `Recognizing that no two students learn the same way, we design individualized study paths tailored to each student's strengths, weaknesses, and goals.`,
		},
		{
			icon: <IconChalkboard />,
			title: 'Hollistic Learning',
			description: `Beyond just academic content, Edumasters emphasizes critical thinking, problem-solving, and time management skills, essential for real-world success.`,
		},
		{
			icon: <IconQuotes />,
			title: 'Proven Track Record',
			description: `Our success stories, testimonials, and consistently high student performance metrics attest to our commitment and effectiveness in delivering top-tier educational services.`,
		},
		{
			icon: <IconMessages />,
			title: 'Community and Support',
			description: `Edumasters fosters a supportive learning community where students can engage in collaborative study sessions, share resources, and motivate each other.`,
		},
		{
			icon: <IconBooks />,
			title: 'Cutting-Edge Resources',
			description: `Our study materials are meticulously curated, up-to-date, and designed to mirror the challenges of actual exams, ensuring students are always a step ahead.`,
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
