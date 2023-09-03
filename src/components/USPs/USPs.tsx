// Styles
import Image from 'next/image'
import styles from './USPs.module.scss'

// Icons
import {
	IconBook,
	IconClockCheck,
	IconRocket,
	IconUser,
} from '@tabler/icons-react'

// Assets
import blob1 from '@/assets/blobs/blob_1.svg'
import blob2 from '@/assets/blobs/blob_2.svg'
import teaching from '@/assets/illustrations/teaching.svg'

const USPs = () => {
	return (
		<div className={styles.base}>
			<Image src={blob1} alt='Blob' className={styles.blob_1} />
			<Image src={blob2} alt='Blob' className={styles.blob_2} />
			<div className={styles.content}>
				<div className={styles.usps}>
					<div className={styles.usp}>
						<div className={styles.usp_icon}>
							<IconRocket size={40} stroke={1} />
						</div>
						<p className={styles.usp_title}>1-on-1 Tutoring</p>
						<p className={styles.usp_description}>
							Get 1-on-1 help from a top tutor in your area.
						</p>
					</div>
					<div className={styles.usp}>
						<div className={styles.usp_icon}>
							<IconBook size={40} stroke={1} />
						</div>
						<p className={styles.usp_title}>100% Satisfaction</p>
						<p className={styles.usp_description}>
							We guarantee you'll be satisfied with your tutor.
						</p>
					</div>
					<div className={styles.usp}>
						<div className={styles.usp_icon}>
							<IconUser size={40} stroke={1} />
						</div>
						<p className={styles.usp_title}>Affordable</p>
						<p className={styles.usp_description}>
							We offer affordable pricing for all students.
						</p>
					</div>
					<div className={styles.usp}>
						<div className={styles.usp_icon}>
							<IconClockCheck size={40} stroke={1} />
						</div>
						<p className={styles.usp_title}>Flexible</p>
						<p className={styles.usp_description}>
							We offer flexible scheduling for all students.
						</p>
					</div>
				</div>
				<div className={styles.illustration}>
					<Image src={teaching} alt='Teaching' fill />
				</div>
			</div>
		</div>
	)
}

export default USPs
