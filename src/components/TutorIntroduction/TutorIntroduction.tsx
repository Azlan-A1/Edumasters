// Styles
import styles from './TutorIntroduction.module.scss'

const TutorIntroduction = () => {
	return (
		<div className={styles.base}>
			<div className={styles.tutor_info}>
				<div className={styles.tutor_image}></div>
				<h4>Azlan Ahmad</h4>
				<p>Tutoring since 2018</p>
			</div>
			<div className={styles.tutor_intro}>
				<h4>
					🎓 Are you ready to unlock your full academic potential? 🌟 Look no
					further! Meet Azlan Ahmad, our highly qualified and experienced tutor
					at Edumasters.
				</h4>
				<p>
					The reason for starting Edumasters was to address a growing need for
					high-quality education and academic support services. Azlan Ahmad
					recognized the importance of providing students with access to
					top-tier tutoring and test preparation to help them succeed in their
					academic pursuits. Edumasters was founded with the goal of offering
					personalized, effective, and results-driven education services,
					including SAT, PSAT, SSAT, homework help, TOEFL, SHSAT, and AP
					tutoring, to empower students to reach their full potential and
					achieve their educational aspirations.
				</p>
				<p>
					With a passion for education and a wealth of knowledge, Azlan brings
					several years of expertise to the table. Whether you're struggling
					with a challenging subject or aiming to excel in your studies, Azlan
					is here to guide you on your educational journey.
				</p>
				<h5>🔍 What Sets Azlan Apart:</h5>
				<ul className='list-disc grid grid-cols-1 md:grid-cols-2 gap-8'>
					<li>
						Extensive Teaching Experience: Azlan has a proven track record of
						helping students succeed through personalized teaching methods.
					</li>
					<li>
						Subject Mastery: From mathematics to literature, Azlan is
						well-versed in a variety of subjects.
					</li>
					<li>
						Student-Centered Approach: Your success is Azlan's top priority, and
						he tailors lessons to suit your unique learning style and goals.
					</li>
					<li>
						SAT & PSAT Excellence: Azlan is your go-to expert for conquering the
						SAT and PSAT exams. He'll equip you with the skills and strategies
						needed to achieve your best score.
					</li>
					<li>
						SSAT Success: Whether you're preparing for the Secondary School
						Admission Test (SSAT) or need assistance with admissions, Azlan has
						the knowledge and guidance to get you there.
					</li>
					<li>
						Homework Help: Stuck on assignments? Azlan provides comprehensive
						homework help across various subjects, ensuring you grasp essential
						concepts and excel in your coursework.
					</li>
					<li>
						TOEFL Mastery: For those aiming to excel in the Test of English as a
						Foreign Language (TOEFL), Azlan offers top-notch guidance to enhance
						your English language skills.
					</li>
					<li>
						SHSAT Expertise: Preparing for the Specialized High Schools
						Admissions Test (SHSAT)? Azlan's expertise will give you the edge
						you need to succeed.
					</li>
					<li>
						AP Advantage: Azlan specializes in Advanced Placement (AP) courses,
						helping you navigate the challenging coursework and excel in your
						exams.
					</li>
				</ul>
				<p>
					Join Azlan Ahmad at Edumasters and embark on a journey to academic
					success. With his guidance, you'll build the skills, knowledge, and
					confidence to achieve your educational goals. 📚🌟
				</p>
			</div>
		</div>
	)
}

export default TutorIntroduction
