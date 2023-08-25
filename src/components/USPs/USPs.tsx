// Styles
import styles from './USPs.module.scss'

// Icons
import {
	IconBook,
	IconClockCheck,
	IconRocket,
	IconUser,
} from '@tabler/icons-react'

const USPs = () => {
	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.usp}>
					<div className={styles.usp_icon}>
						<IconRocket size={48} stroke={1} />
					</div>
					<h3 className={styles.usp_title}>1-on-1 Tutoring</h3>
					<p className={styles.usp_description}>
						Get 1-on-1 help from a top tutor in your area.
					</p>
				</div>
				<div className={styles.usp}>
					<div className={styles.usp_icon}>
						<IconBook size={48} stroke={1} />
					</div>
					<h3 className={styles.usp_title}>100% Satisfaction</h3>
					<p className={styles.usp_description}>
						We guarantee you'll be satisfied with your tutor.
					</p>
				</div>
				<div className={styles.usp}>
					<div className={styles.usp_icon}>
						<IconUser size={48} stroke={1} />
					</div>
					<h3 className={styles.usp_title}>Affordable</h3>
					<p className={styles.usp_description}>
						We offer affordable pricing for all students.
					</p>
				</div>
				<div className={styles.usp}>
					<div className={styles.usp_icon}>
						<IconClockCheck size={48} stroke={1} />
					</div>
					<h3 className={styles.usp_title}>Flexible</h3>
					<p className={styles.usp_description}>
						We offer flexible scheduling for all students.
					</p>
				</div>
			</div>
		</div>
	)
}

export default USPs
