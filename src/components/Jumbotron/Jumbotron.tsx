// Next
import Image from 'next/image'

// Components
import Button from '../Button'
import Input from '../Input'

// Styles
import styles from './Jumbotron.module.scss'

// Assets
import graduation from '@/assets/images/graduation.webp'

// Packages
import classNames from 'classnames'

const Jumbotron = () => {
	return (
		<div className={styles.base}>
			<div className={styles.image}>
				<Image src={graduation} alt='Graduation - #SEO' fill />
			</div>
			<div className={styles.content}>
				<p className={styles.label}>Professional Online Tutoring</p>
				<p className={styles.subtitle}>
					No matter the exam, score improvement is guaranteed.*
				</p>
				<h1 className={classNames(styles.title)}>
					Maximum Results. Minimum Time.
				</h1>

				{/* 
				<form className={styles.form}>
					<input type='text' placeholder='Search for a test' />
					<button type='submit'>Search</button>
				</form>
				 */}
			</div>
		</div>
	)
}

export default Jumbotron
