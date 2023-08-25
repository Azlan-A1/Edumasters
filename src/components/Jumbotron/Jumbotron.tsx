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
				<div className={styles.content_grid}>
					<div className={styles.column_1}>
						<p className={styles.label}>Find my test prep</p>
						<p className={styles.subtitle}>
							No matter the exam, score improvement is guaranteed.*
						</p>
						<h1 className={classNames(styles.title)}>
							Maximum Results. Minimum Time.
						</h1>

						<form className={styles.form}>
							<Input.TextInput
								id='test_name'
								placeholder='Enter your test name'
							/>
							<Button variant='primary'>Find your Prep</Button>
						</form>
					</div>
					<div className={styles.column_2}>
						<div className={styles.box}>
							<p className={styles.label}>Find my School</p>
							<p className={styles.subtitle}>
								Thousands of school profiles, rankings and expert advice.
							</p>
							<h2 className={classNames(styles.title, 'h1')}>
								Find the right school for you
							</h2>

							<form className={styles.form}>
								<Input.TextInput
									id='school_name'
									placeholder='Enter your school name'
								/>
								<Button variant='primary'>Find your School</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Jumbotron
