// Components
import Image from 'next/image'
import Input from '../Input'

// Styles
import styles from './Jumbotron.module.scss'

// Assets
import graduation from '@/assets/images/graduation.webp'

const Jumbotron = () => {
	return (
		<div className={styles.base}>
			<div className={styles.image}>
				<Image src={graduation} alt='Graduation - change this for SEO' fill />
			</div>
			<div className={styles.content}>
				<div className={styles.content_grid}>
					<div className={styles.column_1}>
						<p className={styles.label}>Find my test prep</p>
						<p className={styles.subtitle}>
							No matter the exam, score improvement is guaranteed. *
						</p>
						<h1 className={styles.title}>Maximum Results. Minimum Time.</h1>

						<form className={styles.form}>
							<Input.TextInput
								id='test_name'
								placeholder='Enter your test name'
							/>
							<button className='bg-pink-500 hover:bg-pink-600 px-2 py-1 rounded-sm text-white'>
								Find your Prep
							</button>
						</form>
					</div>
					<div className={styles.column_2}>
						<div className={styles.box}>
							<p className={styles.label}>Find my School</p>
							<p className={styles.subtitle}>
								Thousands of school profiles, rankings and expert advice.
							</p>
							<h2 className={styles.title}>Find the right school for you</h2>

							<form className={styles.form}>
								<Input.TextInput
									id='school_name'
									placeholder='Enter your school name'
								/>
								<button className='bg-pink-500 hover:bg-pink-600 px-2 py-1 rounded-sm text-white'>
									Find your School
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Jumbotron
