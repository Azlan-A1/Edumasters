// Styles
import styles from './GradeTutorIntroduction.module.scss'

const GradeTutorIntroduction = () => {
	return (
		<div className={styles.base}>
			<div className={styles.tutor_info}>
				<div className={styles.tutor_image}></div>
				<h4>Firstname Surname</h4>
				<p>Tutoring since 2018</p>
			</div>
			<div className={styles.tutor_intro}>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aliquam
					quos laboriosam saepe corporis omnis consectetur enim ratione
					reiciendis, eligendi illum! Ut rem sint fugiat labore animi inventore
					consequuntur! Perferendis.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aliquam
					quos laboriosam saepe corporis omnis consectetur enim ratione
					reiciendis, eligendi illum! Ut rem sint fugiat labore animi inventore
					consequuntur! Perferendis.
				</p>
			</div>
		</div>
	)
}

export default GradeTutorIntroduction
